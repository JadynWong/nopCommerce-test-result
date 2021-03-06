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
        data: {"result": {"minY": 469.0, "minX": 0.0, "maxY": 2222.0, "series": [{"data": [[0.0, 469.0], [0.1, 508.0], [0.2, 533.0], [0.3, 561.0], [0.4, 590.0], [0.5, 593.0], [0.6, 604.0], [0.7, 613.0], [0.8, 617.0], [0.9, 618.0], [1.0, 622.0], [1.1, 623.0], [1.2, 632.0], [1.3, 636.0], [1.4, 638.0], [1.5, 643.0], [1.6, 647.0], [1.7, 648.0], [1.8, 652.0], [1.9, 656.0], [2.0, 657.0], [2.1, 658.0], [2.2, 658.0], [2.3, 659.0], [2.4, 663.0], [2.5, 664.0], [2.6, 666.0], [2.7, 666.0], [2.8, 668.0], [2.9, 671.0], [3.0, 673.0], [3.1, 674.0], [3.2, 677.0], [3.3, 679.0], [3.4, 680.0], [3.5, 683.0], [3.6, 685.0], [3.7, 687.0], [3.8, 689.0], [3.9, 690.0], [4.0, 691.0], [4.1, 696.0], [4.2, 700.0], [4.3, 701.0], [4.4, 703.0], [4.5, 705.0], [4.6, 707.0], [4.7, 708.0], [4.8, 708.0], [4.9, 709.0], [5.0, 710.0], [5.1, 713.0], [5.2, 715.0], [5.3, 716.0], [5.4, 717.0], [5.5, 718.0], [5.6, 720.0], [5.7, 720.0], [5.8, 721.0], [5.9, 722.0], [6.0, 723.0], [6.1, 723.0], [6.2, 724.0], [6.3, 726.0], [6.4, 727.0], [6.5, 727.0], [6.6, 730.0], [6.7, 732.0], [6.8, 733.0], [6.9, 735.0], [7.0, 737.0], [7.1, 738.0], [7.2, 740.0], [7.3, 743.0], [7.4, 743.0], [7.5, 744.0], [7.6, 744.0], [7.7, 748.0], [7.8, 749.0], [7.9, 750.0], [8.0, 751.0], [8.1, 752.0], [8.2, 753.0], [8.3, 754.0], [8.4, 755.0], [8.5, 756.0], [8.6, 756.0], [8.7, 759.0], [8.8, 759.0], [8.9, 761.0], [9.0, 762.0], [9.1, 763.0], [9.2, 764.0], [9.3, 765.0], [9.4, 767.0], [9.5, 768.0], [9.6, 768.0], [9.7, 770.0], [9.8, 770.0], [9.9, 772.0], [10.0, 773.0], [10.1, 773.0], [10.2, 775.0], [10.3, 776.0], [10.4, 778.0], [10.5, 778.0], [10.6, 780.0], [10.7, 780.0], [10.8, 781.0], [10.9, 783.0], [11.0, 784.0], [11.1, 784.0], [11.2, 786.0], [11.3, 786.0], [11.4, 787.0], [11.5, 789.0], [11.6, 790.0], [11.7, 790.0], [11.8, 791.0], [11.9, 792.0], [12.0, 792.0], [12.1, 794.0], [12.2, 795.0], [12.3, 795.0], [12.4, 795.0], [12.5, 797.0], [12.6, 798.0], [12.7, 799.0], [12.8, 800.0], [12.9, 801.0], [13.0, 801.0], [13.1, 802.0], [13.2, 803.0], [13.3, 804.0], [13.4, 805.0], [13.5, 807.0], [13.6, 807.0], [13.7, 808.0], [13.8, 808.0], [13.9, 809.0], [14.0, 809.0], [14.1, 811.0], [14.2, 813.0], [14.3, 813.0], [14.4, 815.0], [14.5, 816.0], [14.6, 817.0], [14.7, 819.0], [14.8, 820.0], [14.9, 820.0], [15.0, 822.0], [15.1, 822.0], [15.2, 823.0], [15.3, 824.0], [15.4, 824.0], [15.5, 826.0], [15.6, 827.0], [15.7, 828.0], [15.8, 829.0], [15.9, 831.0], [16.0, 832.0], [16.1, 833.0], [16.2, 833.0], [16.3, 834.0], [16.4, 834.0], [16.5, 835.0], [16.6, 835.0], [16.7, 836.0], [16.8, 836.0], [16.9, 837.0], [17.0, 837.0], [17.1, 838.0], [17.2, 840.0], [17.3, 840.0], [17.4, 841.0], [17.5, 841.0], [17.6, 842.0], [17.7, 843.0], [17.8, 845.0], [17.9, 846.0], [18.0, 847.0], [18.1, 847.0], [18.2, 847.0], [18.3, 848.0], [18.4, 848.0], [18.5, 848.0], [18.6, 848.0], [18.7, 849.0], [18.8, 849.0], [18.9, 850.0], [19.0, 851.0], [19.1, 853.0], [19.2, 855.0], [19.3, 855.0], [19.4, 857.0], [19.5, 858.0], [19.6, 858.0], [19.7, 859.0], [19.8, 859.0], [19.9, 860.0], [20.0, 860.0], [20.1, 861.0], [20.2, 861.0], [20.3, 862.0], [20.4, 863.0], [20.5, 863.0], [20.6, 864.0], [20.7, 865.0], [20.8, 866.0], [20.9, 867.0], [21.0, 868.0], [21.1, 868.0], [21.2, 870.0], [21.3, 871.0], [21.4, 871.0], [21.5, 871.0], [21.6, 872.0], [21.7, 872.0], [21.8, 872.0], [21.9, 873.0], [22.0, 874.0], [22.1, 875.0], [22.2, 875.0], [22.3, 876.0], [22.4, 877.0], [22.5, 878.0], [22.6, 878.0], [22.7, 878.0], [22.8, 879.0], [22.9, 880.0], [23.0, 880.0], [23.1, 880.0], [23.2, 880.0], [23.3, 881.0], [23.4, 883.0], [23.5, 884.0], [23.6, 885.0], [23.7, 885.0], [23.8, 886.0], [23.9, 887.0], [24.0, 887.0], [24.1, 887.0], [24.2, 887.0], [24.3, 888.0], [24.4, 889.0], [24.5, 889.0], [24.6, 890.0], [24.7, 891.0], [24.8, 892.0], [24.9, 892.0], [25.0, 893.0], [25.1, 894.0], [25.2, 894.0], [25.3, 894.0], [25.4, 895.0], [25.5, 895.0], [25.6, 896.0], [25.7, 896.0], [25.8, 898.0], [25.9, 899.0], [26.0, 900.0], [26.1, 901.0], [26.2, 902.0], [26.3, 902.0], [26.4, 902.0], [26.5, 904.0], [26.6, 904.0], [26.7, 905.0], [26.8, 906.0], [26.9, 906.0], [27.0, 907.0], [27.1, 908.0], [27.2, 909.0], [27.3, 909.0], [27.4, 910.0], [27.5, 911.0], [27.6, 911.0], [27.7, 912.0], [27.8, 913.0], [27.9, 914.0], [28.0, 915.0], [28.1, 915.0], [28.2, 915.0], [28.3, 916.0], [28.4, 916.0], [28.5, 917.0], [28.6, 917.0], [28.7, 917.0], [28.8, 917.0], [28.9, 918.0], [29.0, 919.0], [29.1, 919.0], [29.2, 919.0], [29.3, 920.0], [29.4, 920.0], [29.5, 923.0], [29.6, 924.0], [29.7, 924.0], [29.8, 924.0], [29.9, 925.0], [30.0, 926.0], [30.1, 927.0], [30.2, 927.0], [30.3, 928.0], [30.4, 928.0], [30.5, 929.0], [30.6, 930.0], [30.7, 930.0], [30.8, 931.0], [30.9, 932.0], [31.0, 932.0], [31.1, 933.0], [31.2, 935.0], [31.3, 935.0], [31.4, 936.0], [31.5, 936.0], [31.6, 937.0], [31.7, 938.0], [31.8, 938.0], [31.9, 939.0], [32.0, 940.0], [32.1, 941.0], [32.2, 941.0], [32.3, 942.0], [32.4, 942.0], [32.5, 943.0], [32.6, 944.0], [32.7, 944.0], [32.8, 945.0], [32.9, 946.0], [33.0, 946.0], [33.1, 946.0], [33.2, 946.0], [33.3, 947.0], [33.4, 947.0], [33.5, 948.0], [33.6, 948.0], [33.7, 949.0], [33.8, 950.0], [33.9, 950.0], [34.0, 951.0], [34.1, 952.0], [34.2, 953.0], [34.3, 954.0], [34.4, 954.0], [34.5, 954.0], [34.6, 955.0], [34.7, 956.0], [34.8, 957.0], [34.9, 957.0], [35.0, 958.0], [35.1, 958.0], [35.2, 958.0], [35.3, 958.0], [35.4, 959.0], [35.5, 959.0], [35.6, 960.0], [35.7, 960.0], [35.8, 961.0], [35.9, 961.0], [36.0, 962.0], [36.1, 963.0], [36.2, 963.0], [36.3, 964.0], [36.4, 964.0], [36.5, 965.0], [36.6, 965.0], [36.7, 966.0], [36.8, 966.0], [36.9, 967.0], [37.0, 967.0], [37.1, 968.0], [37.2, 968.0], [37.3, 969.0], [37.4, 969.0], [37.5, 971.0], [37.6, 971.0], [37.7, 972.0], [37.8, 972.0], [37.9, 972.0], [38.0, 974.0], [38.1, 975.0], [38.2, 976.0], [38.3, 977.0], [38.4, 977.0], [38.5, 978.0], [38.6, 979.0], [38.7, 979.0], [38.8, 979.0], [38.9, 980.0], [39.0, 980.0], [39.1, 981.0], [39.2, 981.0], [39.3, 982.0], [39.4, 983.0], [39.5, 983.0], [39.6, 984.0], [39.7, 985.0], [39.8, 985.0], [39.9, 986.0], [40.0, 986.0], [40.1, 987.0], [40.2, 988.0], [40.3, 989.0], [40.4, 989.0], [40.5, 990.0], [40.6, 990.0], [40.7, 990.0], [40.8, 991.0], [40.9, 991.0], [41.0, 992.0], [41.1, 992.0], [41.2, 993.0], [41.3, 994.0], [41.4, 994.0], [41.5, 994.0], [41.6, 995.0], [41.7, 996.0], [41.8, 996.0], [41.9, 997.0], [42.0, 997.0], [42.1, 997.0], [42.2, 998.0], [42.3, 999.0], [42.4, 999.0], [42.5, 1000.0], [42.6, 1001.0], [42.7, 1001.0], [42.8, 1003.0], [42.9, 1003.0], [43.0, 1004.0], [43.1, 1005.0], [43.2, 1006.0], [43.3, 1006.0], [43.4, 1007.0], [43.5, 1007.0], [43.6, 1008.0], [43.7, 1008.0], [43.8, 1009.0], [43.9, 1009.0], [44.0, 1010.0], [44.1, 1010.0], [44.2, 1011.0], [44.3, 1011.0], [44.4, 1012.0], [44.5, 1013.0], [44.6, 1014.0], [44.7, 1014.0], [44.8, 1014.0], [44.9, 1015.0], [45.0, 1016.0], [45.1, 1017.0], [45.2, 1018.0], [45.3, 1019.0], [45.4, 1020.0], [45.5, 1020.0], [45.6, 1021.0], [45.7, 1022.0], [45.8, 1023.0], [45.9, 1024.0], [46.0, 1025.0], [46.1, 1025.0], [46.2, 1026.0], [46.3, 1027.0], [46.4, 1027.0], [46.5, 1028.0], [46.6, 1028.0], [46.7, 1028.0], [46.8, 1029.0], [46.9, 1029.0], [47.0, 1030.0], [47.1, 1030.0], [47.2, 1031.0], [47.3, 1031.0], [47.4, 1031.0], [47.5, 1032.0], [47.6, 1032.0], [47.7, 1032.0], [47.8, 1033.0], [47.9, 1033.0], [48.0, 1034.0], [48.1, 1034.0], [48.2, 1035.0], [48.3, 1035.0], [48.4, 1036.0], [48.5, 1036.0], [48.6, 1037.0], [48.7, 1037.0], [48.8, 1038.0], [48.9, 1039.0], [49.0, 1039.0], [49.1, 1040.0], [49.2, 1040.0], [49.3, 1040.0], [49.4, 1041.0], [49.5, 1041.0], [49.6, 1041.0], [49.7, 1042.0], [49.8, 1043.0], [49.9, 1044.0], [50.0, 1044.0], [50.1, 1044.0], [50.2, 1045.0], [50.3, 1046.0], [50.4, 1046.0], [50.5, 1047.0], [50.6, 1047.0], [50.7, 1049.0], [50.8, 1050.0], [50.9, 1050.0], [51.0, 1051.0], [51.1, 1052.0], [51.2, 1053.0], [51.3, 1054.0], [51.4, 1054.0], [51.5, 1055.0], [51.6, 1056.0], [51.7, 1056.0], [51.8, 1057.0], [51.9, 1058.0], [52.0, 1058.0], [52.1, 1059.0], [52.2, 1059.0], [52.3, 1061.0], [52.4, 1061.0], [52.5, 1062.0], [52.6, 1062.0], [52.7, 1063.0], [52.8, 1063.0], [52.9, 1064.0], [53.0, 1064.0], [53.1, 1065.0], [53.2, 1066.0], [53.3, 1067.0], [53.4, 1067.0], [53.5, 1067.0], [53.6, 1068.0], [53.7, 1068.0], [53.8, 1069.0], [53.9, 1070.0], [54.0, 1070.0], [54.1, 1071.0], [54.2, 1071.0], [54.3, 1073.0], [54.4, 1074.0], [54.5, 1075.0], [54.6, 1075.0], [54.7, 1075.0], [54.8, 1075.0], [54.9, 1076.0], [55.0, 1077.0], [55.1, 1078.0], [55.2, 1079.0], [55.3, 1080.0], [55.4, 1081.0], [55.5, 1082.0], [55.6, 1082.0], [55.7, 1083.0], [55.8, 1083.0], [55.9, 1085.0], [56.0, 1085.0], [56.1, 1087.0], [56.2, 1088.0], [56.3, 1088.0], [56.4, 1089.0], [56.5, 1090.0], [56.6, 1090.0], [56.7, 1092.0], [56.8, 1092.0], [56.9, 1093.0], [57.0, 1093.0], [57.1, 1094.0], [57.2, 1095.0], [57.3, 1095.0], [57.4, 1096.0], [57.5, 1097.0], [57.6, 1098.0], [57.7, 1098.0], [57.8, 1099.0], [57.9, 1099.0], [58.0, 1100.0], [58.1, 1100.0], [58.2, 1101.0], [58.3, 1101.0], [58.4, 1102.0], [58.5, 1103.0], [58.6, 1104.0], [58.7, 1106.0], [58.8, 1107.0], [58.9, 1108.0], [59.0, 1108.0], [59.1, 1109.0], [59.2, 1109.0], [59.3, 1109.0], [59.4, 1111.0], [59.5, 1111.0], [59.6, 1112.0], [59.7, 1113.0], [59.8, 1114.0], [59.9, 1114.0], [60.0, 1115.0], [60.1, 1116.0], [60.2, 1116.0], [60.3, 1117.0], [60.4, 1118.0], [60.5, 1118.0], [60.6, 1119.0], [60.7, 1120.0], [60.8, 1121.0], [60.9, 1121.0], [61.0, 1122.0], [61.1, 1122.0], [61.2, 1124.0], [61.3, 1124.0], [61.4, 1125.0], [61.5, 1125.0], [61.6, 1126.0], [61.7, 1126.0], [61.8, 1127.0], [61.9, 1128.0], [62.0, 1128.0], [62.1, 1129.0], [62.2, 1129.0], [62.3, 1130.0], [62.4, 1131.0], [62.5, 1131.0], [62.6, 1132.0], [62.7, 1132.0], [62.8, 1132.0], [62.9, 1133.0], [63.0, 1134.0], [63.1, 1134.0], [63.2, 1135.0], [63.3, 1137.0], [63.4, 1138.0], [63.5, 1138.0], [63.6, 1139.0], [63.7, 1139.0], [63.8, 1139.0], [63.9, 1140.0], [64.0, 1140.0], [64.1, 1141.0], [64.2, 1142.0], [64.3, 1143.0], [64.4, 1143.0], [64.5, 1144.0], [64.6, 1145.0], [64.7, 1146.0], [64.8, 1146.0], [64.9, 1147.0], [65.0, 1149.0], [65.1, 1149.0], [65.2, 1150.0], [65.3, 1150.0], [65.4, 1151.0], [65.5, 1151.0], [65.6, 1152.0], [65.7, 1154.0], [65.8, 1154.0], [65.9, 1154.0], [66.0, 1155.0], [66.1, 1155.0], [66.2, 1157.0], [66.3, 1157.0], [66.4, 1158.0], [66.5, 1158.0], [66.6, 1158.0], [66.7, 1158.0], [66.8, 1160.0], [66.9, 1160.0], [67.0, 1160.0], [67.1, 1161.0], [67.2, 1162.0], [67.3, 1162.0], [67.4, 1162.0], [67.5, 1163.0], [67.6, 1163.0], [67.7, 1164.0], [67.8, 1164.0], [67.9, 1165.0], [68.0, 1165.0], [68.1, 1165.0], [68.2, 1166.0], [68.3, 1167.0], [68.4, 1168.0], [68.5, 1169.0], [68.6, 1170.0], [68.7, 1172.0], [68.8, 1172.0], [68.9, 1173.0], [69.0, 1173.0], [69.1, 1174.0], [69.2, 1174.0], [69.3, 1175.0], [69.4, 1176.0], [69.5, 1176.0], [69.6, 1177.0], [69.7, 1178.0], [69.8, 1179.0], [69.9, 1180.0], [70.0, 1181.0], [70.1, 1182.0], [70.2, 1182.0], [70.3, 1183.0], [70.4, 1183.0], [70.5, 1184.0], [70.6, 1185.0], [70.7, 1185.0], [70.8, 1186.0], [70.9, 1187.0], [71.0, 1187.0], [71.1, 1188.0], [71.2, 1188.0], [71.3, 1189.0], [71.4, 1192.0], [71.5, 1192.0], [71.6, 1192.0], [71.7, 1194.0], [71.8, 1194.0], [71.9, 1195.0], [72.0, 1196.0], [72.1, 1197.0], [72.2, 1197.0], [72.3, 1198.0], [72.4, 1198.0], [72.5, 1200.0], [72.6, 1201.0], [72.7, 1201.0], [72.8, 1202.0], [72.9, 1203.0], [73.0, 1205.0], [73.1, 1205.0], [73.2, 1206.0], [73.3, 1207.0], [73.4, 1207.0], [73.5, 1209.0], [73.6, 1211.0], [73.7, 1211.0], [73.8, 1212.0], [73.9, 1212.0], [74.0, 1213.0], [74.1, 1214.0], [74.2, 1215.0], [74.3, 1215.0], [74.4, 1215.0], [74.5, 1216.0], [74.6, 1218.0], [74.7, 1219.0], [74.8, 1219.0], [74.9, 1220.0], [75.0, 1221.0], [75.1, 1221.0], [75.2, 1223.0], [75.3, 1223.0], [75.4, 1223.0], [75.5, 1225.0], [75.6, 1225.0], [75.7, 1225.0], [75.8, 1226.0], [75.9, 1226.0], [76.0, 1227.0], [76.1, 1227.0], [76.2, 1228.0], [76.3, 1230.0], [76.4, 1231.0], [76.5, 1232.0], [76.6, 1234.0], [76.7, 1235.0], [76.8, 1236.0], [76.9, 1237.0], [77.0, 1237.0], [77.1, 1238.0], [77.2, 1240.0], [77.3, 1241.0], [77.4, 1242.0], [77.5, 1242.0], [77.6, 1244.0], [77.7, 1246.0], [77.8, 1246.0], [77.9, 1247.0], [78.0, 1249.0], [78.1, 1250.0], [78.2, 1251.0], [78.3, 1252.0], [78.4, 1253.0], [78.5, 1254.0], [78.6, 1256.0], [78.7, 1257.0], [78.8, 1258.0], [78.9, 1259.0], [79.0, 1260.0], [79.1, 1261.0], [79.2, 1261.0], [79.3, 1263.0], [79.4, 1266.0], [79.5, 1268.0], [79.6, 1269.0], [79.7, 1270.0], [79.8, 1271.0], [79.9, 1272.0], [80.0, 1273.0], [80.1, 1274.0], [80.2, 1275.0], [80.3, 1276.0], [80.4, 1277.0], [80.5, 1277.0], [80.6, 1278.0], [80.7, 1278.0], [80.8, 1279.0], [80.9, 1279.0], [81.0, 1281.0], [81.1, 1283.0], [81.2, 1283.0], [81.3, 1284.0], [81.4, 1285.0], [81.5, 1286.0], [81.6, 1287.0], [81.7, 1287.0], [81.8, 1288.0], [81.9, 1288.0], [82.0, 1289.0], [82.1, 1290.0], [82.2, 1290.0], [82.3, 1291.0], [82.4, 1292.0], [82.5, 1294.0], [82.6, 1295.0], [82.7, 1296.0], [82.8, 1298.0], [82.9, 1299.0], [83.0, 1301.0], [83.1, 1302.0], [83.2, 1305.0], [83.3, 1306.0], [83.4, 1307.0], [83.5, 1307.0], [83.6, 1309.0], [83.7, 1310.0], [83.8, 1312.0], [83.9, 1313.0], [84.0, 1314.0], [84.1, 1314.0], [84.2, 1318.0], [84.3, 1322.0], [84.4, 1323.0], [84.5, 1324.0], [84.6, 1325.0], [84.7, 1328.0], [84.8, 1329.0], [84.9, 1330.0], [85.0, 1331.0], [85.1, 1333.0], [85.2, 1334.0], [85.3, 1336.0], [85.4, 1336.0], [85.5, 1337.0], [85.6, 1338.0], [85.7, 1338.0], [85.8, 1341.0], [85.9, 1344.0], [86.0, 1349.0], [86.1, 1351.0], [86.2, 1351.0], [86.3, 1353.0], [86.4, 1353.0], [86.5, 1355.0], [86.6, 1356.0], [86.7, 1357.0], [86.8, 1357.0], [86.9, 1359.0], [87.0, 1360.0], [87.1, 1362.0], [87.2, 1363.0], [87.3, 1364.0], [87.4, 1368.0], [87.5, 1370.0], [87.6, 1371.0], [87.7, 1373.0], [87.8, 1373.0], [87.9, 1374.0], [88.0, 1375.0], [88.1, 1377.0], [88.2, 1380.0], [88.3, 1380.0], [88.4, 1383.0], [88.5, 1384.0], [88.6, 1386.0], [88.7, 1387.0], [88.8, 1394.0], [88.9, 1395.0], [89.0, 1397.0], [89.1, 1404.0], [89.2, 1405.0], [89.3, 1406.0], [89.4, 1407.0], [89.5, 1411.0], [89.6, 1411.0], [89.7, 1415.0], [89.8, 1416.0], [89.9, 1418.0], [90.0, 1418.0], [90.1, 1419.0], [90.2, 1422.0], [90.3, 1426.0], [90.4, 1428.0], [90.5, 1432.0], [90.6, 1433.0], [90.7, 1436.0], [90.8, 1439.0], [90.9, 1441.0], [91.0, 1443.0], [91.1, 1447.0], [91.2, 1453.0], [91.3, 1456.0], [91.4, 1457.0], [91.5, 1460.0], [91.6, 1465.0], [91.7, 1466.0], [91.8, 1469.0], [91.9, 1474.0], [92.0, 1475.0], [92.1, 1477.0], [92.2, 1478.0], [92.3, 1479.0], [92.4, 1484.0], [92.5, 1488.0], [92.6, 1491.0], [92.7, 1492.0], [92.8, 1498.0], [92.9, 1501.0], [93.0, 1503.0], [93.1, 1503.0], [93.2, 1506.0], [93.3, 1509.0], [93.4, 1512.0], [93.5, 1517.0], [93.6, 1522.0], [93.7, 1532.0], [93.8, 1540.0], [93.9, 1541.0], [94.0, 1543.0], [94.1, 1547.0], [94.2, 1555.0], [94.3, 1560.0], [94.4, 1561.0], [94.5, 1563.0], [94.6, 1566.0], [94.7, 1573.0], [94.8, 1575.0], [94.9, 1577.0], [95.0, 1579.0], [95.1, 1587.0], [95.2, 1592.0], [95.3, 1597.0], [95.4, 1605.0], [95.5, 1610.0], [95.6, 1616.0], [95.7, 1619.0], [95.8, 1621.0], [95.9, 1624.0], [96.0, 1626.0], [96.1, 1631.0], [96.2, 1635.0], [96.3, 1636.0], [96.4, 1642.0], [96.5, 1657.0], [96.6, 1661.0], [96.7, 1664.0], [96.8, 1673.0], [96.9, 1680.0], [97.0, 1687.0], [97.1, 1691.0], [97.2, 1700.0], [97.3, 1704.0], [97.4, 1706.0], [97.5, 1719.0], [97.6, 1734.0], [97.7, 1747.0], [97.8, 1755.0], [97.9, 1764.0], [98.0, 1775.0], [98.1, 1800.0], [98.2, 1813.0], [98.3, 1816.0], [98.4, 1823.0], [98.5, 1832.0], [98.6, 1851.0], [98.7, 1859.0], [98.8, 1866.0], [98.9, 1898.0], [99.0, 1903.0], [99.1, 1928.0], [99.2, 1955.0], [99.3, 1987.0], [99.4, 2006.0], [99.5, 2035.0], [99.6, 2058.0], [99.7, 2076.0], [99.8, 2108.0], [99.9, 2204.0], [100.0, 2222.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 400.0, "maxY": 457.0, "series": [{"data": [[2100.0, 3.0], [2200.0, 3.0], [600.0, 100.0], [700.0, 237.0], [800.0, 365.0], [900.0, 457.0], [1000.0, 430.0], [1100.0, 403.0], [1200.0, 290.0], [1300.0, 168.0], [1400.0, 107.0], [1500.0, 68.0], [1600.0, 51.0], [400.0, 2.0], [1700.0, 25.0], [1800.0, 25.0], [1900.0, 9.0], [2000.0, 13.0], [500.0, 14.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2571.0, "series": [{"data": [[0.0, 2.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2571.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 197.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 49.38925831202045, "minX": 1.6155726E12, "maxY": 50.0, "series": [{"data": [[1.6155726E12, 50.0], [1.61557266E12, 49.38925831202045]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61557266E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 497.0, "minX": 1.0, "maxY": 1685.0, "series": [{"data": [[33.0, 1373.0], [32.0, 1418.0], [2.0, 497.0], [37.0, 1172.0], [40.0, 1461.0], [45.0, 1334.75], [44.0, 1185.0], [47.0, 1685.0], [46.0, 1386.0], [3.0, 570.0], [50.0, 1080.151303709142], [4.0, 623.0], [5.0, 519.0], [7.0, 595.5], [8.0, 522.0], [9.0, 658.0], [10.0, 1416.0], [11.0, 608.0], [12.0, 959.0], [14.0, 1017.0], [16.0, 712.0], [1.0, 697.0], [19.0, 866.3333333333334], [20.0, 1369.0], [21.0, 677.0], [22.0, 593.0], [23.0, 1503.0], [24.0, 1008.0], [25.0, 968.0], [26.0, 710.0], [29.0, 1487.6666666666667], [31.0, 1539.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[49.56895306859207, 1079.9263537906115]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1602.8333333333333, "minX": 1.6155726E12, "maxY": 695295.75, "series": [{"data": [[1.6155726E12, 289854.75], [1.61557266E12, 695295.75]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6155726E12, 1602.8333333333333], [1.61557266E12, 3844.8333333333335]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61557266E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1073.905882352941, "minX": 1.6155726E12, "maxY": 1094.368098159508, "series": [{"data": [[1.6155726E12, 1094.368098159508], [1.61557266E12, 1073.905882352941]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61557266E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1073.4240409207143, "minX": 1.6155726E12, "maxY": 1093.862576687116, "series": [{"data": [[1.6155726E12, 1093.862576687116], [1.61557266E12, 1073.4240409207143]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61557266E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.6155726E12, "maxY": 26.509202453987655, "series": [{"data": [[1.6155726E12, 26.509202453987655], [1.61557266E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61557266E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 469.0, "minX": 1.6155726E12, "maxY": 2222.0, "series": [{"data": [[1.6155726E12, 2206.0], [1.61557266E12, 2222.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6155726E12, 1441.4], [1.61557266E12, 1407.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6155726E12, 1950.360000000001], [1.61557266E12, 1866.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6155726E12, 1629.1999999999996], [1.61557266E12, 1573.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6155726E12, 561.0], [1.61557266E12, 469.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6155726E12, 1061.0], [1.61557266E12, 1040.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61557266E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 821.0, "minX": 4.0, "maxY": 1258.5, "series": [{"data": [[32.0, 1048.5], [35.0, 1052.0], [36.0, 946.0], [37.0, 1090.0], [39.0, 1201.0], [38.0, 1123.5], [43.0, 1046.0], [42.0, 1087.0], [45.0, 1063.5], [44.0, 1151.5], [46.0, 1035.0], [47.0, 847.0], [48.0, 1065.0], [49.0, 1170.0], [51.0, 1103.0], [50.0, 1150.5], [52.0, 1036.5], [53.0, 992.5], [54.0, 1080.0], [55.0, 959.0], [57.0, 997.0], [4.0, 1256.5], [67.0, 821.0], [24.0, 1258.5], [28.0, 1113.0], [29.0, 1053.0], [31.0, 1045.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 67.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 820.0, "minX": 4.0, "maxY": 1258.0, "series": [{"data": [[32.0, 1048.5], [35.0, 1051.0], [36.0, 945.5], [37.0, 1090.0], [39.0, 1200.0], [38.0, 1123.0], [43.0, 1046.0], [42.0, 1086.5], [45.0, 1063.0], [44.0, 1150.5], [46.0, 1034.5], [47.0, 847.0], [48.0, 1064.5], [49.0, 1170.0], [51.0, 1102.0], [50.0, 1150.0], [52.0, 1036.0], [53.0, 992.0], [54.0, 1080.0], [55.0, 958.0], [57.0, 996.0], [4.0, 1253.5], [67.0, 820.0], [24.0, 1258.0], [28.0, 1112.0], [29.0, 1052.0], [31.0, 1044.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 67.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 14.416666666666666, "minX": 1.6155726E12, "maxY": 31.75, "series": [{"data": [[1.6155726E12, 14.416666666666666], [1.61557266E12, 31.75]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61557266E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 13.583333333333334, "minX": 1.6155726E12, "maxY": 32.583333333333336, "series": [{"data": [[1.6155726E12, 13.583333333333334], [1.61557266E12, 32.583333333333336]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61557266E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 13.583333333333334, "minX": 1.6155726E12, "maxY": 32.583333333333336, "series": [{"data": [[1.6155726E12, 13.583333333333334], [1.61557266E12, 32.583333333333336]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61557266E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 13.583333333333334, "minX": 1.6155726E12, "maxY": 32.583333333333336, "series": [{"data": [[1.6155726E12, 13.583333333333334], [1.61557266E12, 32.583333333333336]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61557266E12, "title": "Total Transactions Per Second"}},
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

