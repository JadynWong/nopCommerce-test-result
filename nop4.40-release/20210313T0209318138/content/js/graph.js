/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 365.0, "minX": 0.0, "maxY": 3276.0, "series": [{"data": [[0.0, 365.0], [0.1, 378.0], [0.2, 440.0], [0.3, 493.0], [0.4, 512.0], [0.5, 541.0], [0.6, 551.0], [0.7, 556.0], [0.8, 561.0], [0.9, 561.0], [1.0, 574.0], [1.1, 576.0], [1.2, 579.0], [1.3, 582.0], [1.4, 585.0], [1.5, 594.0], [1.6, 596.0], [1.7, 606.0], [1.8, 607.0], [1.9, 607.0], [2.0, 612.0], [2.1, 621.0], [2.2, 629.0], [2.3, 635.0], [2.4, 636.0], [2.5, 639.0], [2.6, 642.0], [2.7, 644.0], [2.8, 645.0], [2.9, 646.0], [3.0, 648.0], [3.1, 648.0], [3.2, 651.0], [3.3, 654.0], [3.4, 656.0], [3.5, 659.0], [3.6, 661.0], [3.7, 665.0], [3.8, 666.0], [3.9, 667.0], [4.0, 668.0], [4.1, 668.0], [4.2, 672.0], [4.3, 674.0], [4.4, 677.0], [4.5, 679.0], [4.6, 680.0], [4.7, 680.0], [4.8, 682.0], [4.9, 682.0], [5.0, 684.0], [5.1, 684.0], [5.2, 686.0], [5.3, 687.0], [5.4, 691.0], [5.5, 693.0], [5.6, 694.0], [5.7, 695.0], [5.8, 700.0], [5.9, 701.0], [6.0, 701.0], [6.1, 705.0], [6.2, 707.0], [6.3, 709.0], [6.4, 712.0], [6.5, 712.0], [6.6, 715.0], [6.7, 717.0], [6.8, 718.0], [6.9, 720.0], [7.0, 723.0], [7.1, 724.0], [7.2, 726.0], [7.3, 728.0], [7.4, 729.0], [7.5, 731.0], [7.6, 732.0], [7.7, 733.0], [7.8, 733.0], [7.9, 737.0], [8.0, 738.0], [8.1, 740.0], [8.2, 740.0], [8.3, 744.0], [8.4, 744.0], [8.5, 744.0], [8.6, 746.0], [8.7, 746.0], [8.8, 747.0], [8.9, 748.0], [9.0, 750.0], [9.1, 751.0], [9.2, 751.0], [9.3, 753.0], [9.4, 753.0], [9.5, 755.0], [9.6, 756.0], [9.7, 757.0], [9.8, 760.0], [9.9, 760.0], [10.0, 762.0], [10.1, 765.0], [10.2, 765.0], [10.3, 765.0], [10.4, 766.0], [10.5, 766.0], [10.6, 766.0], [10.7, 767.0], [10.8, 768.0], [10.9, 770.0], [11.0, 770.0], [11.1, 770.0], [11.2, 771.0], [11.3, 775.0], [11.4, 775.0], [11.5, 776.0], [11.6, 779.0], [11.7, 779.0], [11.8, 781.0], [11.9, 782.0], [12.0, 782.0], [12.1, 782.0], [12.2, 783.0], [12.3, 784.0], [12.4, 784.0], [12.5, 786.0], [12.6, 786.0], [12.7, 787.0], [12.8, 787.0], [12.9, 788.0], [13.0, 791.0], [13.1, 791.0], [13.2, 792.0], [13.3, 792.0], [13.4, 793.0], [13.5, 795.0], [13.6, 795.0], [13.7, 796.0], [13.8, 797.0], [13.9, 797.0], [14.0, 798.0], [14.1, 799.0], [14.2, 801.0], [14.3, 803.0], [14.4, 803.0], [14.5, 804.0], [14.6, 804.0], [14.7, 805.0], [14.8, 805.0], [14.9, 806.0], [15.0, 808.0], [15.1, 810.0], [15.2, 811.0], [15.3, 812.0], [15.4, 813.0], [15.5, 813.0], [15.6, 814.0], [15.7, 816.0], [15.8, 816.0], [15.9, 817.0], [16.0, 817.0], [16.1, 819.0], [16.2, 819.0], [16.3, 820.0], [16.4, 821.0], [16.5, 821.0], [16.6, 822.0], [16.7, 823.0], [16.8, 824.0], [16.9, 826.0], [17.0, 826.0], [17.1, 827.0], [17.2, 828.0], [17.3, 828.0], [17.4, 828.0], [17.5, 829.0], [17.6, 829.0], [17.7, 829.0], [17.8, 829.0], [17.9, 830.0], [18.0, 831.0], [18.1, 832.0], [18.2, 833.0], [18.3, 834.0], [18.4, 835.0], [18.5, 836.0], [18.6, 837.0], [18.7, 838.0], [18.8, 839.0], [18.9, 839.0], [19.0, 839.0], [19.1, 840.0], [19.2, 841.0], [19.3, 842.0], [19.4, 843.0], [19.5, 844.0], [19.6, 847.0], [19.7, 848.0], [19.8, 849.0], [19.9, 849.0], [20.0, 850.0], [20.1, 851.0], [20.2, 851.0], [20.3, 851.0], [20.4, 852.0], [20.5, 852.0], [20.6, 852.0], [20.7, 853.0], [20.8, 854.0], [20.9, 855.0], [21.0, 855.0], [21.1, 856.0], [21.2, 856.0], [21.3, 857.0], [21.4, 857.0], [21.5, 858.0], [21.6, 859.0], [21.7, 859.0], [21.8, 860.0], [21.9, 861.0], [22.0, 862.0], [22.1, 863.0], [22.2, 863.0], [22.3, 865.0], [22.4, 866.0], [22.5, 867.0], [22.6, 868.0], [22.7, 868.0], [22.8, 869.0], [22.9, 870.0], [23.0, 871.0], [23.1, 872.0], [23.2, 872.0], [23.3, 873.0], [23.4, 873.0], [23.5, 874.0], [23.6, 875.0], [23.7, 876.0], [23.8, 877.0], [23.9, 877.0], [24.0, 878.0], [24.1, 879.0], [24.2, 879.0], [24.3, 880.0], [24.4, 880.0], [24.5, 880.0], [24.6, 882.0], [24.7, 883.0], [24.8, 883.0], [24.9, 884.0], [25.0, 884.0], [25.1, 885.0], [25.2, 887.0], [25.3, 887.0], [25.4, 887.0], [25.5, 888.0], [25.6, 889.0], [25.7, 890.0], [25.8, 891.0], [25.9, 891.0], [26.0, 891.0], [26.1, 893.0], [26.2, 894.0], [26.3, 895.0], [26.4, 895.0], [26.5, 896.0], [26.6, 897.0], [26.7, 898.0], [26.8, 900.0], [26.9, 901.0], [27.0, 902.0], [27.1, 903.0], [27.2, 904.0], [27.3, 904.0], [27.4, 905.0], [27.5, 906.0], [27.6, 907.0], [27.7, 908.0], [27.8, 908.0], [27.9, 908.0], [28.0, 909.0], [28.1, 909.0], [28.2, 911.0], [28.3, 912.0], [28.4, 913.0], [28.5, 913.0], [28.6, 914.0], [28.7, 915.0], [28.8, 916.0], [28.9, 916.0], [29.0, 916.0], [29.1, 918.0], [29.2, 918.0], [29.3, 919.0], [29.4, 920.0], [29.5, 920.0], [29.6, 920.0], [29.7, 920.0], [29.8, 921.0], [29.9, 922.0], [30.0, 922.0], [30.1, 923.0], [30.2, 924.0], [30.3, 925.0], [30.4, 926.0], [30.5, 927.0], [30.6, 928.0], [30.7, 930.0], [30.8, 931.0], [30.9, 932.0], [31.0, 933.0], [31.1, 933.0], [31.2, 933.0], [31.3, 934.0], [31.4, 935.0], [31.5, 935.0], [31.6, 936.0], [31.7, 937.0], [31.8, 937.0], [31.9, 938.0], [32.0, 940.0], [32.1, 941.0], [32.2, 941.0], [32.3, 942.0], [32.4, 942.0], [32.5, 944.0], [32.6, 945.0], [32.7, 946.0], [32.8, 947.0], [32.9, 947.0], [33.0, 948.0], [33.1, 949.0], [33.2, 949.0], [33.3, 950.0], [33.4, 950.0], [33.5, 951.0], [33.6, 952.0], [33.7, 953.0], [33.8, 954.0], [33.9, 955.0], [34.0, 955.0], [34.1, 956.0], [34.2, 957.0], [34.3, 957.0], [34.4, 959.0], [34.5, 959.0], [34.6, 960.0], [34.7, 962.0], [34.8, 962.0], [34.9, 963.0], [35.0, 964.0], [35.1, 964.0], [35.2, 966.0], [35.3, 966.0], [35.4, 966.0], [35.5, 967.0], [35.6, 967.0], [35.7, 968.0], [35.8, 968.0], [35.9, 968.0], [36.0, 969.0], [36.1, 969.0], [36.2, 969.0], [36.3, 971.0], [36.4, 973.0], [36.5, 974.0], [36.6, 974.0], [36.7, 975.0], [36.8, 976.0], [36.9, 977.0], [37.0, 977.0], [37.1, 978.0], [37.2, 979.0], [37.3, 980.0], [37.4, 982.0], [37.5, 982.0], [37.6, 983.0], [37.7, 984.0], [37.8, 984.0], [37.9, 984.0], [38.0, 984.0], [38.1, 985.0], [38.2, 986.0], [38.3, 987.0], [38.4, 989.0], [38.5, 989.0], [38.6, 991.0], [38.7, 991.0], [38.8, 992.0], [38.9, 993.0], [39.0, 994.0], [39.1, 995.0], [39.2, 996.0], [39.3, 996.0], [39.4, 998.0], [39.5, 998.0], [39.6, 1000.0], [39.7, 1002.0], [39.8, 1003.0], [39.9, 1003.0], [40.0, 1003.0], [40.1, 1004.0], [40.2, 1005.0], [40.3, 1005.0], [40.4, 1005.0], [40.5, 1006.0], [40.6, 1007.0], [40.7, 1007.0], [40.8, 1008.0], [40.9, 1008.0], [41.0, 1009.0], [41.1, 1009.0], [41.2, 1010.0], [41.3, 1011.0], [41.4, 1013.0], [41.5, 1014.0], [41.6, 1015.0], [41.7, 1015.0], [41.8, 1016.0], [41.9, 1016.0], [42.0, 1018.0], [42.1, 1018.0], [42.2, 1019.0], [42.3, 1020.0], [42.4, 1020.0], [42.5, 1022.0], [42.6, 1022.0], [42.7, 1023.0], [42.8, 1025.0], [42.9, 1025.0], [43.0, 1026.0], [43.1, 1026.0], [43.2, 1027.0], [43.3, 1027.0], [43.4, 1028.0], [43.5, 1028.0], [43.6, 1028.0], [43.7, 1029.0], [43.8, 1029.0], [43.9, 1030.0], [44.0, 1030.0], [44.1, 1032.0], [44.2, 1032.0], [44.3, 1032.0], [44.4, 1035.0], [44.5, 1037.0], [44.6, 1037.0], [44.7, 1038.0], [44.8, 1039.0], [44.9, 1041.0], [45.0, 1042.0], [45.1, 1042.0], [45.2, 1044.0], [45.3, 1045.0], [45.4, 1046.0], [45.5, 1046.0], [45.6, 1048.0], [45.7, 1049.0], [45.8, 1049.0], [45.9, 1050.0], [46.0, 1051.0], [46.1, 1051.0], [46.2, 1053.0], [46.3, 1053.0], [46.4, 1054.0], [46.5, 1055.0], [46.6, 1056.0], [46.7, 1057.0], [46.8, 1058.0], [46.9, 1061.0], [47.0, 1061.0], [47.1, 1061.0], [47.2, 1062.0], [47.3, 1062.0], [47.4, 1063.0], [47.5, 1063.0], [47.6, 1064.0], [47.7, 1064.0], [47.8, 1064.0], [47.9, 1065.0], [48.0, 1066.0], [48.1, 1066.0], [48.2, 1067.0], [48.3, 1070.0], [48.4, 1071.0], [48.5, 1071.0], [48.6, 1072.0], [48.7, 1072.0], [48.8, 1073.0], [48.9, 1074.0], [49.0, 1074.0], [49.1, 1075.0], [49.2, 1078.0], [49.3, 1079.0], [49.4, 1081.0], [49.5, 1081.0], [49.6, 1082.0], [49.7, 1083.0], [49.8, 1083.0], [49.9, 1085.0], [50.0, 1085.0], [50.1, 1086.0], [50.2, 1087.0], [50.3, 1087.0], [50.4, 1087.0], [50.5, 1089.0], [50.6, 1089.0], [50.7, 1090.0], [50.8, 1091.0], [50.9, 1091.0], [51.0, 1092.0], [51.1, 1093.0], [51.2, 1093.0], [51.3, 1093.0], [51.4, 1096.0], [51.5, 1097.0], [51.6, 1098.0], [51.7, 1099.0], [51.8, 1100.0], [51.9, 1101.0], [52.0, 1102.0], [52.1, 1102.0], [52.2, 1106.0], [52.3, 1107.0], [52.4, 1107.0], [52.5, 1108.0], [52.6, 1108.0], [52.7, 1110.0], [52.8, 1111.0], [52.9, 1112.0], [53.0, 1114.0], [53.1, 1115.0], [53.2, 1117.0], [53.3, 1119.0], [53.4, 1120.0], [53.5, 1123.0], [53.6, 1125.0], [53.7, 1125.0], [53.8, 1127.0], [53.9, 1128.0], [54.0, 1129.0], [54.1, 1130.0], [54.2, 1130.0], [54.3, 1132.0], [54.4, 1133.0], [54.5, 1133.0], [54.6, 1133.0], [54.7, 1135.0], [54.8, 1136.0], [54.9, 1137.0], [55.0, 1138.0], [55.1, 1139.0], [55.2, 1140.0], [55.3, 1144.0], [55.4, 1145.0], [55.5, 1146.0], [55.6, 1146.0], [55.7, 1147.0], [55.8, 1148.0], [55.9, 1149.0], [56.0, 1150.0], [56.1, 1151.0], [56.2, 1151.0], [56.3, 1152.0], [56.4, 1154.0], [56.5, 1155.0], [56.6, 1157.0], [56.7, 1158.0], [56.8, 1158.0], [56.9, 1159.0], [57.0, 1159.0], [57.1, 1161.0], [57.2, 1161.0], [57.3, 1162.0], [57.4, 1166.0], [57.5, 1168.0], [57.6, 1169.0], [57.7, 1170.0], [57.8, 1172.0], [57.9, 1173.0], [58.0, 1173.0], [58.1, 1174.0], [58.2, 1175.0], [58.3, 1176.0], [58.4, 1177.0], [58.5, 1178.0], [58.6, 1179.0], [58.7, 1179.0], [58.8, 1181.0], [58.9, 1182.0], [59.0, 1183.0], [59.1, 1184.0], [59.2, 1185.0], [59.3, 1189.0], [59.4, 1192.0], [59.5, 1193.0], [59.6, 1194.0], [59.7, 1195.0], [59.8, 1196.0], [59.9, 1197.0], [60.0, 1198.0], [60.1, 1201.0], [60.2, 1201.0], [60.3, 1203.0], [60.4, 1205.0], [60.5, 1207.0], [60.6, 1207.0], [60.7, 1208.0], [60.8, 1212.0], [60.9, 1212.0], [61.0, 1213.0], [61.1, 1214.0], [61.2, 1216.0], [61.3, 1218.0], [61.4, 1219.0], [61.5, 1223.0], [61.6, 1224.0], [61.7, 1226.0], [61.8, 1229.0], [61.9, 1233.0], [62.0, 1236.0], [62.1, 1237.0], [62.2, 1240.0], [62.3, 1240.0], [62.4, 1241.0], [62.5, 1244.0], [62.6, 1245.0], [62.7, 1245.0], [62.8, 1248.0], [62.9, 1248.0], [63.0, 1250.0], [63.1, 1251.0], [63.2, 1252.0], [63.3, 1253.0], [63.4, 1255.0], [63.5, 1256.0], [63.6, 1257.0], [63.7, 1258.0], [63.8, 1260.0], [63.9, 1261.0], [64.0, 1265.0], [64.1, 1266.0], [64.2, 1268.0], [64.3, 1270.0], [64.4, 1273.0], [64.5, 1274.0], [64.6, 1275.0], [64.7, 1278.0], [64.8, 1278.0], [64.9, 1279.0], [65.0, 1281.0], [65.1, 1284.0], [65.2, 1288.0], [65.3, 1289.0], [65.4, 1292.0], [65.5, 1294.0], [65.6, 1298.0], [65.7, 1303.0], [65.8, 1305.0], [65.9, 1307.0], [66.0, 1309.0], [66.1, 1314.0], [66.2, 1316.0], [66.3, 1318.0], [66.4, 1320.0], [66.5, 1321.0], [66.6, 1323.0], [66.7, 1325.0], [66.8, 1326.0], [66.9, 1329.0], [67.0, 1331.0], [67.1, 1333.0], [67.2, 1335.0], [67.3, 1335.0], [67.4, 1337.0], [67.5, 1339.0], [67.6, 1342.0], [67.7, 1342.0], [67.8, 1345.0], [67.9, 1349.0], [68.0, 1352.0], [68.1, 1358.0], [68.2, 1360.0], [68.3, 1362.0], [68.4, 1362.0], [68.5, 1363.0], [68.6, 1364.0], [68.7, 1367.0], [68.8, 1368.0], [68.9, 1369.0], [69.0, 1371.0], [69.1, 1373.0], [69.2, 1373.0], [69.3, 1376.0], [69.4, 1377.0], [69.5, 1378.0], [69.6, 1380.0], [69.7, 1381.0], [69.8, 1384.0], [69.9, 1385.0], [70.0, 1390.0], [70.1, 1392.0], [70.2, 1394.0], [70.3, 1396.0], [70.4, 1402.0], [70.5, 1404.0], [70.6, 1409.0], [70.7, 1409.0], [70.8, 1412.0], [70.9, 1413.0], [71.0, 1416.0], [71.1, 1418.0], [71.2, 1420.0], [71.3, 1422.0], [71.4, 1425.0], [71.5, 1428.0], [71.6, 1429.0], [71.7, 1430.0], [71.8, 1432.0], [71.9, 1433.0], [72.0, 1440.0], [72.1, 1445.0], [72.2, 1446.0], [72.3, 1446.0], [72.4, 1447.0], [72.5, 1453.0], [72.6, 1456.0], [72.7, 1457.0], [72.8, 1459.0], [72.9, 1461.0], [73.0, 1464.0], [73.1, 1466.0], [73.2, 1466.0], [73.3, 1470.0], [73.4, 1474.0], [73.5, 1479.0], [73.6, 1480.0], [73.7, 1483.0], [73.8, 1487.0], [73.9, 1489.0], [74.0, 1491.0], [74.1, 1496.0], [74.2, 1500.0], [74.3, 1502.0], [74.4, 1504.0], [74.5, 1505.0], [74.6, 1510.0], [74.7, 1512.0], [74.8, 1515.0], [74.9, 1518.0], [75.0, 1521.0], [75.1, 1521.0], [75.2, 1525.0], [75.3, 1526.0], [75.4, 1532.0], [75.5, 1534.0], [75.6, 1536.0], [75.7, 1541.0], [75.8, 1543.0], [75.9, 1545.0], [76.0, 1545.0], [76.1, 1547.0], [76.2, 1551.0], [76.3, 1552.0], [76.4, 1557.0], [76.5, 1559.0], [76.6, 1563.0], [76.7, 1569.0], [76.8, 1573.0], [76.9, 1576.0], [77.0, 1579.0], [77.1, 1582.0], [77.2, 1584.0], [77.3, 1590.0], [77.4, 1593.0], [77.5, 1595.0], [77.6, 1600.0], [77.7, 1600.0], [77.8, 1601.0], [77.9, 1603.0], [78.0, 1606.0], [78.1, 1609.0], [78.2, 1612.0], [78.3, 1613.0], [78.4, 1614.0], [78.5, 1619.0], [78.6, 1622.0], [78.7, 1622.0], [78.8, 1625.0], [78.9, 1627.0], [79.0, 1627.0], [79.1, 1632.0], [79.2, 1634.0], [79.3, 1640.0], [79.4, 1640.0], [79.5, 1645.0], [79.6, 1650.0], [79.7, 1654.0], [79.8, 1658.0], [79.9, 1659.0], [80.0, 1662.0], [80.1, 1673.0], [80.2, 1674.0], [80.3, 1674.0], [80.4, 1675.0], [80.5, 1676.0], [80.6, 1677.0], [80.7, 1678.0], [80.8, 1684.0], [80.9, 1690.0], [81.0, 1692.0], [81.1, 1694.0], [81.2, 1695.0], [81.3, 1698.0], [81.4, 1702.0], [81.5, 1706.0], [81.6, 1708.0], [81.7, 1710.0], [81.8, 1714.0], [81.9, 1721.0], [82.0, 1724.0], [82.1, 1728.0], [82.2, 1731.0], [82.3, 1733.0], [82.4, 1739.0], [82.5, 1742.0], [82.6, 1748.0], [82.7, 1749.0], [82.8, 1753.0], [82.9, 1755.0], [83.0, 1762.0], [83.1, 1768.0], [83.2, 1773.0], [83.3, 1775.0], [83.4, 1783.0], [83.5, 1786.0], [83.6, 1788.0], [83.7, 1796.0], [83.8, 1797.0], [83.9, 1798.0], [84.0, 1806.0], [84.1, 1808.0], [84.2, 1813.0], [84.3, 1815.0], [84.4, 1819.0], [84.5, 1824.0], [84.6, 1826.0], [84.7, 1832.0], [84.8, 1833.0], [84.9, 1837.0], [85.0, 1838.0], [85.1, 1844.0], [85.2, 1847.0], [85.3, 1848.0], [85.4, 1850.0], [85.5, 1851.0], [85.6, 1853.0], [85.7, 1861.0], [85.8, 1862.0], [85.9, 1867.0], [86.0, 1869.0], [86.1, 1873.0], [86.2, 1879.0], [86.3, 1881.0], [86.4, 1887.0], [86.5, 1888.0], [86.6, 1892.0], [86.7, 1894.0], [86.8, 1895.0], [86.9, 1897.0], [87.0, 1900.0], [87.1, 1904.0], [87.2, 1909.0], [87.3, 1911.0], [87.4, 1915.0], [87.5, 1920.0], [87.6, 1922.0], [87.7, 1928.0], [87.8, 1931.0], [87.9, 1931.0], [88.0, 1932.0], [88.1, 1935.0], [88.2, 1937.0], [88.3, 1942.0], [88.4, 1947.0], [88.5, 1949.0], [88.6, 1952.0], [88.7, 1955.0], [88.8, 1959.0], [88.9, 1961.0], [89.0, 1962.0], [89.1, 1964.0], [89.2, 1967.0], [89.3, 1971.0], [89.4, 1972.0], [89.5, 1975.0], [89.6, 1988.0], [89.7, 1990.0], [89.8, 1995.0], [89.9, 1996.0], [90.0, 1997.0], [90.1, 1999.0], [90.2, 2001.0], [90.3, 2002.0], [90.4, 2004.0], [90.5, 2009.0], [90.6, 2012.0], [90.7, 2014.0], [90.8, 2017.0], [90.9, 2018.0], [91.0, 2021.0], [91.1, 2022.0], [91.2, 2025.0], [91.3, 2027.0], [91.4, 2031.0], [91.5, 2037.0], [91.6, 2039.0], [91.7, 2039.0], [91.8, 2040.0], [91.9, 2043.0], [92.0, 2046.0], [92.1, 2051.0], [92.2, 2053.0], [92.3, 2054.0], [92.4, 2055.0], [92.5, 2063.0], [92.6, 2071.0], [92.7, 2073.0], [92.8, 2075.0], [92.9, 2078.0], [93.0, 2082.0], [93.1, 2084.0], [93.2, 2088.0], [93.3, 2089.0], [93.4, 2092.0], [93.5, 2096.0], [93.6, 2100.0], [93.7, 2107.0], [93.8, 2108.0], [93.9, 2113.0], [94.0, 2116.0], [94.1, 2117.0], [94.2, 2128.0], [94.3, 2132.0], [94.4, 2146.0], [94.5, 2148.0], [94.6, 2151.0], [94.7, 2161.0], [94.8, 2164.0], [94.9, 2165.0], [95.0, 2170.0], [95.1, 2181.0], [95.2, 2190.0], [95.3, 2199.0], [95.4, 2203.0], [95.5, 2207.0], [95.6, 2215.0], [95.7, 2221.0], [95.8, 2228.0], [95.9, 2234.0], [96.0, 2236.0], [96.1, 2240.0], [96.2, 2248.0], [96.3, 2261.0], [96.4, 2264.0], [96.5, 2267.0], [96.6, 2272.0], [96.7, 2276.0], [96.8, 2279.0], [96.9, 2287.0], [97.0, 2291.0], [97.1, 2304.0], [97.2, 2318.0], [97.3, 2328.0], [97.4, 2348.0], [97.5, 2352.0], [97.6, 2360.0], [97.7, 2370.0], [97.8, 2380.0], [97.9, 2395.0], [98.0, 2405.0], [98.1, 2418.0], [98.2, 2429.0], [98.3, 2446.0], [98.4, 2449.0], [98.5, 2450.0], [98.6, 2474.0], [98.7, 2478.0], [98.8, 2502.0], [98.9, 2511.0], [99.0, 2528.0], [99.1, 2563.0], [99.2, 2619.0], [99.3, 2653.0], [99.4, 2701.0], [99.5, 2741.0], [99.6, 2769.0], [99.7, 2803.0], [99.8, 2920.0], [99.9, 3045.0], [100.0, 3276.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 308.0, "series": [{"data": [[600.0, 98.0], [700.0, 203.0], [800.0, 304.0], [900.0, 308.0], [1000.0, 294.0], [1100.0, 200.0], [1200.0, 135.0], [1300.0, 113.0], [1400.0, 93.0], [1500.0, 82.0], [1600.0, 90.0], [1700.0, 62.0], [1800.0, 74.0], [1900.0, 76.0], [2000.0, 83.0], [2100.0, 43.0], [2200.0, 42.0], [2300.0, 20.0], [2400.0, 21.0], [2500.0, 9.0], [2600.0, 5.0], [2800.0, 3.0], [2700.0, 7.0], [2900.0, 1.0], [3000.0, 3.0], [3200.0, 1.0], [300.0, 3.0], [400.0, 6.0], [500.0, 31.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3200.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 9.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1781.0, "series": [{"data": [[0.0, 9.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1781.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 620.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 49.25187032418951, "minX": 1.61557254E12, "maxY": 50.0, "series": [{"data": [[1.6155726E12, 49.25187032418951], [1.61557254E12, 50.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6155726E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 376.0, "minX": 1.0, "maxY": 1404.0, "series": [{"data": [[33.0, 852.0], [32.0, 1214.0], [2.0, 376.0], [34.0, 867.0], [36.0, 797.5], [41.0, 1235.0], [40.0, 1297.25], [43.0, 1132.5], [45.0, 1250.0], [44.0, 1404.0], [47.0, 1081.0], [3.0, 441.0], [50.0, 1247.8544223444746], [4.0, 440.0], [5.0, 564.0], [7.0, 485.5], [9.0, 544.5], [10.0, 495.0], [11.0, 592.0], [13.0, 546.0], [14.0, 582.0], [1.0, 378.0], [18.0, 776.0], [19.0, 556.0], [20.0, 641.0], [21.0, 596.0], [22.0, 546.0], [25.0, 867.0], [26.0, 607.0], [28.0, 853.0], [29.0, 555.0], [30.0, 793.0], [31.0, 833.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[49.50207468879666, 1239.1165975103706]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 1585.1333333333334, "minX": 1.61557254E12, "maxY": 570462.6, "series": [{"data": [[1.6155726E12, 570462.6], [1.61557254E12, 286653.9]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6155726E12, 3154.5333333333333], [1.61557254E12, 1585.1333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6155726E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 1061.0399002493746, "minX": 1.61557254E12, "maxY": 1593.5024813895773, "series": [{"data": [[1.6155726E12, 1061.0399002493746], [1.61557254E12, 1593.5024813895773]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6155726E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 1060.5592269326676, "minX": 1.61557254E12, "maxY": 1592.9354838709676, "series": [{"data": [[1.6155726E12, 1060.5592269326676], [1.61557254E12, 1592.9354838709676]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6155726E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.61557254E12, "maxY": 23.70099255583127, "series": [{"data": [[1.6155726E12, 0.0], [1.61557254E12, 23.70099255583127]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6155726E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 365.0, "minX": 1.61557254E12, "maxY": 3276.0, "series": [{"data": [[1.6155726E12, 3276.0], [1.61557254E12, 3091.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6155726E12, 1517.5], [1.61557254E12, 2161.3]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6155726E12, 2431.8500000000004], [1.61557254E12, 2740.93]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6155726E12, 1970.25], [1.61557254E12, 2317.3]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6155726E12, 365.0], [1.61557254E12, 526.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6155726E12, 969.0], [1.61557254E12, 1584.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6155726E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 852.0, "minX": 2.0, "maxY": 2040.0, "series": [{"data": [[2.0, 1564.5], [33.0, 1620.0], [35.0, 1499.0], [37.0, 1755.0], [39.0, 2040.0], [41.0, 1931.0], [40.0, 1863.0], [42.0, 1038.0], [44.0, 1128.5], [46.0, 1256.0], [47.0, 1690.0], [49.0, 981.0], [51.0, 1003.0], [50.0, 906.5], [52.0, 931.5], [53.0, 1042.0], [55.0, 902.0], [54.0, 869.0], [57.0, 852.0], [56.0, 935.5], [59.0, 888.0], [60.0, 1080.0], [61.0, 1025.0], [9.0, 1907.0], [10.0, 1999.0], [11.0, 1628.0], [18.0, 1593.0], [19.0, 1871.0], [20.0, 1593.5], [21.0, 1869.0], [24.0, 1715.0], [25.0, 1772.0], [27.0, 1690.0], [28.0, 1620.5], [30.0, 1387.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 61.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 852.0, "minX": 2.0, "maxY": 2039.0, "series": [{"data": [[2.0, 1562.0], [33.0, 1620.0], [35.0, 1498.0], [37.0, 1754.0], [39.0, 2039.0], [41.0, 1931.0], [40.0, 1862.5], [42.0, 1037.5], [44.0, 1127.5], [46.0, 1255.5], [47.0, 1689.0], [49.0, 981.0], [51.0, 1003.0], [50.0, 906.0], [52.0, 931.5], [53.0, 1042.0], [55.0, 902.0], [54.0, 868.0], [57.0, 852.0], [56.0, 935.0], [59.0, 887.0], [60.0, 1079.0], [61.0, 1025.0], [9.0, 1906.5], [10.0, 1999.0], [11.0, 1627.0], [18.0, 1592.0], [19.0, 1870.0], [20.0, 1593.0], [21.0, 1869.0], [24.0, 1706.5], [25.0, 1771.0], [27.0, 1690.0], [28.0, 1620.0], [30.0, 1387.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 61.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 14.266666666666667, "minX": 1.61557254E12, "maxY": 25.9, "series": [{"data": [[1.6155726E12, 25.9], [1.61557254E12, 14.266666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6155726E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 13.433333333333334, "minX": 1.61557254E12, "maxY": 26.733333333333334, "series": [{"data": [[1.6155726E12, 26.733333333333334], [1.61557254E12, 13.433333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6155726E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 13.433333333333334, "minX": 1.61557254E12, "maxY": 26.733333333333334, "series": [{"data": [[1.6155726E12, 26.733333333333334], [1.61557254E12, 13.433333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6155726E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 13.433333333333334, "minX": 1.61557254E12, "maxY": 26.733333333333334, "series": [{"data": [[1.6155726E12, 26.733333333333334], [1.61557254E12, 13.433333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6155726E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

