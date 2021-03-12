param(
    [Parameter(Mandatory = $true)][string]$Name = $(throw "Parameter missing: -Name ProjectName")
)

$lastFolder = (Get-Item -Path "../" -Verbose).FullName
$solutionPath = (Join-Path $lastFolder "nopCommerce\src\NopCommerce.sln")
$webProject = (Join-Path $lastFolder "nopCommerce\src\Presentation\Nop.Web")
$rootFolder = (Get-Item -Path "./" -Verbose).FullName
$outputFolder = (Join-Path $rootFolder "artifacts-$Name")
$TestResultPath = (Join-Path $rootFolder $Name)
if (!(Test-Path $TestResultPath)) { mkdir $TestResultPath }
try {
    if (Test-Path $outputFolder) { Remove-Item $outputFolder -Force -Recurse }

    dotnet build $solutionPath --configuration release
    
    dotnet publish $webProject --configuration release --output $outputFolder
    
    Start-Process "powershell" "cd $outputFolder;dotnet Nop.Web.dll"
    
    Start-Sleep -Milliseconds 10000
    
    Write-Output "install"
    $content = Invoke-WebRequest "https://localhost:5001/Install" -ContentType 'application/x-www-form-urlencoded;charset=UTF-8' -Method POST -Body "AdminEmail=admin%40demo.com&AdminPassword=admin&ConfirmPassword=admin&Country=CN-zh-CN&InstallSampleData=true&DataProvider=1&CreateDatabaseIfNotExists=true&ServerName=localhost&DatabaseName=$Name&Username=sa&Password=Qwer%21234&ConnectionString=&Collation=&__RequestVerificationToken=CfDJ8ObQTlopsWVItdUlEBbDA6uYUwrkRY98tu1rbsmUsOOe-76_vpZdMo6L_sXoKve_Jq8COC7Pc-5UjnWj6MMJvGF2qGlp0yNVUbmt3OqLDGAmmX1ZhbKrC3tcTEaUTp8x3l3INLz-OEskj3NhxKRrlIY&InstallSampleData=false&CreateDatabaseIfNotExists=false&ConnectionStringRaw=false&IntegratedSecurity=false&UseCustomCollation=false"
    
    Write-Output "StatusCode: $($content.StatusCode)" 
    Write-Output $content.Content

    Write-Output "restall"
    Invoke-WebRequest "https://localhost:5001/Install/RestartApplication" -ContentType 'text/html;charset=UTF-8' -Method GET
    
    Start-Process "powershell" "cd $outputFolder;dotnet Nop.Web.dll"

    Start-Sleep -Milliseconds 15000

    Write-Output "jmeter run test"

    for ($i = 1; $i -le 5; $i++) {
        $sum += $i

        $date = Get-Date -Format FileDateTime;
        jmeter -n -t "Test Plan.jmx" -l $TestResultPath/$date.txt -e -o $TestResultPath/$date

        Start-Sleep -Milliseconds 5000
    }
}
catch {
    
}
finally {
    Set-Location $rootFolder
}

