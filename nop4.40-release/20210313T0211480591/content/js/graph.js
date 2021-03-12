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
        data: {"result": {"minY": 472.0, "minX": 0.0, "maxY": 2838.0, "series": [{"data": [[0.0, 472.0], [0.1, 530.0], [0.2, 539.0], [0.3, 546.0], [0.4, 563.0], [0.5, 567.0], [0.6, 575.0], [0.7, 577.0], [0.8, 580.0], [0.9, 583.0], [1.0, 587.0], [1.1, 588.0], [1.2, 594.0], [1.3, 598.0], [1.4, 606.0], [1.5, 613.0], [1.6, 614.0], [1.7, 618.0], [1.8, 619.0], [1.9, 622.0], [2.0, 626.0], [2.1, 626.0], [2.2, 629.0], [2.3, 632.0], [2.4, 634.0], [2.5, 636.0], [2.6, 637.0], [2.7, 639.0], [2.8, 642.0], [2.9, 642.0], [3.0, 645.0], [3.1, 646.0], [3.2, 647.0], [3.3, 649.0], [3.4, 649.0], [3.5, 650.0], [3.6, 650.0], [3.7, 652.0], [3.8, 652.0], [3.9, 654.0], [4.0, 657.0], [4.1, 659.0], [4.2, 660.0], [4.3, 661.0], [4.4, 662.0], [4.5, 664.0], [4.6, 666.0], [4.7, 667.0], [4.8, 667.0], [4.9, 670.0], [5.0, 673.0], [5.1, 675.0], [5.2, 678.0], [5.3, 681.0], [5.4, 684.0], [5.5, 684.0], [5.6, 686.0], [5.7, 688.0], [5.8, 689.0], [5.9, 690.0], [6.0, 693.0], [6.1, 694.0], [6.2, 694.0], [6.3, 695.0], [6.4, 696.0], [6.5, 698.0], [6.6, 699.0], [6.7, 700.0], [6.8, 701.0], [6.9, 702.0], [7.0, 704.0], [7.1, 706.0], [7.2, 707.0], [7.3, 709.0], [7.4, 712.0], [7.5, 714.0], [7.6, 716.0], [7.7, 718.0], [7.8, 718.0], [7.9, 719.0], [8.0, 720.0], [8.1, 720.0], [8.2, 721.0], [8.3, 722.0], [8.4, 723.0], [8.5, 725.0], [8.6, 725.0], [8.7, 725.0], [8.8, 728.0], [8.9, 730.0], [9.0, 730.0], [9.1, 731.0], [9.2, 732.0], [9.3, 732.0], [9.4, 733.0], [9.5, 734.0], [9.6, 735.0], [9.7, 735.0], [9.8, 737.0], [9.9, 741.0], [10.0, 742.0], [10.1, 742.0], [10.2, 745.0], [10.3, 746.0], [10.4, 748.0], [10.5, 748.0], [10.6, 749.0], [10.7, 750.0], [10.8, 750.0], [10.9, 751.0], [11.0, 751.0], [11.1, 752.0], [11.2, 753.0], [11.3, 754.0], [11.4, 755.0], [11.5, 756.0], [11.6, 757.0], [11.7, 757.0], [11.8, 758.0], [11.9, 759.0], [12.0, 760.0], [12.1, 760.0], [12.2, 760.0], [12.3, 761.0], [12.4, 761.0], [12.5, 762.0], [12.6, 764.0], [12.7, 764.0], [12.8, 765.0], [12.9, 766.0], [13.0, 767.0], [13.1, 769.0], [13.2, 769.0], [13.3, 769.0], [13.4, 770.0], [13.5, 771.0], [13.6, 773.0], [13.7, 774.0], [13.8, 775.0], [13.9, 776.0], [14.0, 778.0], [14.1, 778.0], [14.2, 779.0], [14.3, 780.0], [14.4, 780.0], [14.5, 781.0], [14.6, 783.0], [14.7, 784.0], [14.8, 785.0], [14.9, 786.0], [15.0, 787.0], [15.1, 787.0], [15.2, 789.0], [15.3, 790.0], [15.4, 792.0], [15.5, 792.0], [15.6, 793.0], [15.7, 794.0], [15.8, 795.0], [15.9, 796.0], [16.0, 796.0], [16.1, 797.0], [16.2, 797.0], [16.3, 798.0], [16.4, 799.0], [16.5, 800.0], [16.6, 800.0], [16.7, 801.0], [16.8, 801.0], [16.9, 802.0], [17.0, 802.0], [17.1, 803.0], [17.2, 803.0], [17.3, 804.0], [17.4, 804.0], [17.5, 805.0], [17.6, 806.0], [17.7, 807.0], [17.8, 807.0], [17.9, 807.0], [18.0, 808.0], [18.1, 809.0], [18.2, 810.0], [18.3, 810.0], [18.4, 811.0], [18.5, 811.0], [18.6, 811.0], [18.7, 812.0], [18.8, 813.0], [18.9, 814.0], [19.0, 814.0], [19.1, 815.0], [19.2, 815.0], [19.3, 816.0], [19.4, 816.0], [19.5, 816.0], [19.6, 816.0], [19.7, 817.0], [19.8, 817.0], [19.9, 817.0], [20.0, 818.0], [20.1, 819.0], [20.2, 820.0], [20.3, 820.0], [20.4, 821.0], [20.5, 822.0], [20.6, 823.0], [20.7, 823.0], [20.8, 824.0], [20.9, 825.0], [21.0, 826.0], [21.1, 827.0], [21.2, 828.0], [21.3, 829.0], [21.4, 829.0], [21.5, 830.0], [21.6, 830.0], [21.7, 831.0], [21.8, 832.0], [21.9, 833.0], [22.0, 833.0], [22.1, 835.0], [22.2, 836.0], [22.3, 836.0], [22.4, 837.0], [22.5, 838.0], [22.6, 839.0], [22.7, 840.0], [22.8, 841.0], [22.9, 842.0], [23.0, 842.0], [23.1, 843.0], [23.2, 844.0], [23.3, 845.0], [23.4, 846.0], [23.5, 846.0], [23.6, 847.0], [23.7, 849.0], [23.8, 849.0], [23.9, 850.0], [24.0, 851.0], [24.1, 851.0], [24.2, 852.0], [24.3, 852.0], [24.4, 853.0], [24.5, 854.0], [24.6, 855.0], [24.7, 855.0], [24.8, 856.0], [24.9, 857.0], [25.0, 857.0], [25.1, 857.0], [25.2, 857.0], [25.3, 859.0], [25.4, 859.0], [25.5, 860.0], [25.6, 861.0], [25.7, 862.0], [25.8, 863.0], [25.9, 864.0], [26.0, 865.0], [26.1, 865.0], [26.2, 866.0], [26.3, 866.0], [26.4, 866.0], [26.5, 867.0], [26.6, 868.0], [26.7, 868.0], [26.8, 869.0], [26.9, 869.0], [27.0, 870.0], [27.1, 870.0], [27.2, 871.0], [27.3, 872.0], [27.4, 873.0], [27.5, 873.0], [27.6, 874.0], [27.7, 875.0], [27.8, 875.0], [27.9, 876.0], [28.0, 877.0], [28.1, 878.0], [28.2, 878.0], [28.3, 879.0], [28.4, 880.0], [28.5, 881.0], [28.6, 881.0], [28.7, 882.0], [28.8, 882.0], [28.9, 883.0], [29.0, 884.0], [29.1, 884.0], [29.2, 885.0], [29.3, 885.0], [29.4, 886.0], [29.5, 887.0], [29.6, 887.0], [29.7, 888.0], [29.8, 888.0], [29.9, 888.0], [30.0, 889.0], [30.1, 890.0], [30.2, 890.0], [30.3, 890.0], [30.4, 891.0], [30.5, 891.0], [30.6, 891.0], [30.7, 893.0], [30.8, 893.0], [30.9, 893.0], [31.0, 894.0], [31.1, 895.0], [31.2, 895.0], [31.3, 896.0], [31.4, 896.0], [31.5, 897.0], [31.6, 897.0], [31.7, 898.0], [31.8, 898.0], [31.9, 899.0], [32.0, 899.0], [32.1, 901.0], [32.2, 901.0], [32.3, 902.0], [32.4, 902.0], [32.5, 902.0], [32.6, 903.0], [32.7, 904.0], [32.8, 905.0], [32.9, 905.0], [33.0, 906.0], [33.1, 906.0], [33.2, 908.0], [33.3, 908.0], [33.4, 909.0], [33.5, 910.0], [33.6, 910.0], [33.7, 911.0], [33.8, 911.0], [33.9, 912.0], [34.0, 912.0], [34.1, 914.0], [34.2, 914.0], [34.3, 915.0], [34.4, 915.0], [34.5, 916.0], [34.6, 916.0], [34.7, 917.0], [34.8, 918.0], [34.9, 919.0], [35.0, 919.0], [35.1, 920.0], [35.2, 921.0], [35.3, 921.0], [35.4, 921.0], [35.5, 922.0], [35.6, 922.0], [35.7, 923.0], [35.8, 924.0], [35.9, 924.0], [36.0, 926.0], [36.1, 926.0], [36.2, 927.0], [36.3, 928.0], [36.4, 929.0], [36.5, 930.0], [36.6, 930.0], [36.7, 930.0], [36.8, 931.0], [36.9, 931.0], [37.0, 932.0], [37.1, 933.0], [37.2, 934.0], [37.3, 935.0], [37.4, 936.0], [37.5, 936.0], [37.6, 936.0], [37.7, 937.0], [37.8, 938.0], [37.9, 938.0], [38.0, 939.0], [38.1, 940.0], [38.2, 940.0], [38.3, 941.0], [38.4, 942.0], [38.5, 942.0], [38.6, 943.0], [38.7, 943.0], [38.8, 944.0], [38.9, 945.0], [39.0, 945.0], [39.1, 946.0], [39.2, 946.0], [39.3, 947.0], [39.4, 947.0], [39.5, 948.0], [39.6, 949.0], [39.7, 950.0], [39.8, 951.0], [39.9, 952.0], [40.0, 952.0], [40.1, 953.0], [40.2, 954.0], [40.3, 954.0], [40.4, 955.0], [40.5, 955.0], [40.6, 956.0], [40.7, 956.0], [40.8, 957.0], [40.9, 957.0], [41.0, 958.0], [41.1, 959.0], [41.2, 960.0], [41.3, 960.0], [41.4, 961.0], [41.5, 961.0], [41.6, 962.0], [41.7, 962.0], [41.8, 962.0], [41.9, 963.0], [42.0, 963.0], [42.1, 965.0], [42.2, 966.0], [42.3, 966.0], [42.4, 968.0], [42.5, 968.0], [42.6, 969.0], [42.7, 969.0], [42.8, 970.0], [42.9, 970.0], [43.0, 970.0], [43.1, 971.0], [43.2, 971.0], [43.3, 971.0], [43.4, 972.0], [43.5, 972.0], [43.6, 973.0], [43.7, 974.0], [43.8, 974.0], [43.9, 974.0], [44.0, 975.0], [44.1, 975.0], [44.2, 976.0], [44.3, 977.0], [44.4, 977.0], [44.5, 977.0], [44.6, 978.0], [44.7, 980.0], [44.8, 980.0], [44.9, 981.0], [45.0, 982.0], [45.1, 984.0], [45.2, 985.0], [45.3, 985.0], [45.4, 986.0], [45.5, 986.0], [45.6, 987.0], [45.7, 988.0], [45.8, 988.0], [45.9, 989.0], [46.0, 990.0], [46.1, 991.0], [46.2, 992.0], [46.3, 993.0], [46.4, 994.0], [46.5, 995.0], [46.6, 995.0], [46.7, 996.0], [46.8, 997.0], [46.9, 998.0], [47.0, 998.0], [47.1, 998.0], [47.2, 999.0], [47.3, 999.0], [47.4, 1001.0], [47.5, 1002.0], [47.6, 1002.0], [47.7, 1003.0], [47.8, 1003.0], [47.9, 1004.0], [48.0, 1004.0], [48.1, 1005.0], [48.2, 1005.0], [48.3, 1006.0], [48.4, 1007.0], [48.5, 1007.0], [48.6, 1008.0], [48.7, 1008.0], [48.8, 1010.0], [48.9, 1010.0], [49.0, 1010.0], [49.1, 1011.0], [49.2, 1011.0], [49.3, 1012.0], [49.4, 1013.0], [49.5, 1013.0], [49.6, 1013.0], [49.7, 1015.0], [49.8, 1016.0], [49.9, 1016.0], [50.0, 1017.0], [50.1, 1017.0], [50.2, 1018.0], [50.3, 1018.0], [50.4, 1019.0], [50.5, 1021.0], [50.6, 1021.0], [50.7, 1022.0], [50.8, 1022.0], [50.9, 1024.0], [51.0, 1025.0], [51.1, 1025.0], [51.2, 1026.0], [51.3, 1026.0], [51.4, 1026.0], [51.5, 1027.0], [51.6, 1027.0], [51.7, 1028.0], [51.8, 1028.0], [51.9, 1029.0], [52.0, 1029.0], [52.1, 1030.0], [52.2, 1030.0], [52.3, 1031.0], [52.4, 1032.0], [52.5, 1032.0], [52.6, 1033.0], [52.7, 1033.0], [52.8, 1033.0], [52.9, 1034.0], [53.0, 1034.0], [53.1, 1035.0], [53.2, 1036.0], [53.3, 1038.0], [53.4, 1038.0], [53.5, 1039.0], [53.6, 1040.0], [53.7, 1041.0], [53.8, 1042.0], [53.9, 1042.0], [54.0, 1043.0], [54.1, 1044.0], [54.2, 1045.0], [54.3, 1047.0], [54.4, 1047.0], [54.5, 1047.0], [54.6, 1048.0], [54.7, 1048.0], [54.8, 1049.0], [54.9, 1050.0], [55.0, 1050.0], [55.1, 1051.0], [55.2, 1051.0], [55.3, 1052.0], [55.4, 1053.0], [55.5, 1054.0], [55.6, 1055.0], [55.7, 1055.0], [55.8, 1056.0], [55.9, 1057.0], [56.0, 1057.0], [56.1, 1058.0], [56.2, 1059.0], [56.3, 1060.0], [56.4, 1061.0], [56.5, 1061.0], [56.6, 1062.0], [56.7, 1063.0], [56.8, 1064.0], [56.9, 1064.0], [57.0, 1065.0], [57.1, 1065.0], [57.2, 1066.0], [57.3, 1066.0], [57.4, 1067.0], [57.5, 1068.0], [57.6, 1069.0], [57.7, 1070.0], [57.8, 1071.0], [57.9, 1071.0], [58.0, 1072.0], [58.1, 1073.0], [58.2, 1074.0], [58.3, 1074.0], [58.4, 1075.0], [58.5, 1076.0], [58.6, 1076.0], [58.7, 1078.0], [58.8, 1078.0], [58.9, 1079.0], [59.0, 1080.0], [59.1, 1080.0], [59.2, 1081.0], [59.3, 1082.0], [59.4, 1082.0], [59.5, 1083.0], [59.6, 1083.0], [59.7, 1084.0], [59.8, 1085.0], [59.9, 1086.0], [60.0, 1087.0], [60.1, 1087.0], [60.2, 1089.0], [60.3, 1089.0], [60.4, 1090.0], [60.5, 1091.0], [60.6, 1092.0], [60.7, 1093.0], [60.8, 1093.0], [60.9, 1094.0], [61.0, 1094.0], [61.1, 1097.0], [61.2, 1098.0], [61.3, 1099.0], [61.4, 1099.0], [61.5, 1099.0], [61.6, 1100.0], [61.7, 1101.0], [61.8, 1101.0], [61.9, 1102.0], [62.0, 1103.0], [62.1, 1105.0], [62.2, 1107.0], [62.3, 1107.0], [62.4, 1108.0], [62.5, 1111.0], [62.6, 1111.0], [62.7, 1112.0], [62.8, 1114.0], [62.9, 1116.0], [63.0, 1117.0], [63.1, 1118.0], [63.2, 1119.0], [63.3, 1120.0], [63.4, 1120.0], [63.5, 1121.0], [63.6, 1121.0], [63.7, 1122.0], [63.8, 1123.0], [63.9, 1125.0], [64.0, 1127.0], [64.1, 1127.0], [64.2, 1129.0], [64.3, 1129.0], [64.4, 1130.0], [64.5, 1131.0], [64.6, 1132.0], [64.7, 1134.0], [64.8, 1137.0], [64.9, 1137.0], [65.0, 1138.0], [65.1, 1139.0], [65.2, 1140.0], [65.3, 1143.0], [65.4, 1144.0], [65.5, 1145.0], [65.6, 1145.0], [65.7, 1146.0], [65.8, 1147.0], [65.9, 1148.0], [66.0, 1149.0], [66.1, 1151.0], [66.2, 1152.0], [66.3, 1153.0], [66.4, 1154.0], [66.5, 1155.0], [66.6, 1156.0], [66.7, 1158.0], [66.8, 1158.0], [66.9, 1159.0], [67.0, 1160.0], [67.1, 1163.0], [67.2, 1163.0], [67.3, 1164.0], [67.4, 1166.0], [67.5, 1167.0], [67.6, 1168.0], [67.7, 1169.0], [67.8, 1171.0], [67.9, 1171.0], [68.0, 1172.0], [68.1, 1173.0], [68.2, 1173.0], [68.3, 1174.0], [68.4, 1176.0], [68.5, 1176.0], [68.6, 1176.0], [68.7, 1178.0], [68.8, 1180.0], [68.9, 1181.0], [69.0, 1182.0], [69.1, 1183.0], [69.2, 1183.0], [69.3, 1184.0], [69.4, 1185.0], [69.5, 1185.0], [69.6, 1187.0], [69.7, 1188.0], [69.8, 1189.0], [69.9, 1190.0], [70.0, 1191.0], [70.1, 1193.0], [70.2, 1193.0], [70.3, 1194.0], [70.4, 1194.0], [70.5, 1195.0], [70.6, 1196.0], [70.7, 1197.0], [70.8, 1199.0], [70.9, 1200.0], [71.0, 1202.0], [71.1, 1205.0], [71.2, 1206.0], [71.3, 1209.0], [71.4, 1210.0], [71.5, 1212.0], [71.6, 1213.0], [71.7, 1215.0], [71.8, 1215.0], [71.9, 1216.0], [72.0, 1217.0], [72.1, 1220.0], [72.2, 1221.0], [72.3, 1221.0], [72.4, 1222.0], [72.5, 1223.0], [72.6, 1224.0], [72.7, 1225.0], [72.8, 1226.0], [72.9, 1229.0], [73.0, 1230.0], [73.1, 1231.0], [73.2, 1233.0], [73.3, 1234.0], [73.4, 1237.0], [73.5, 1238.0], [73.6, 1239.0], [73.7, 1239.0], [73.8, 1241.0], [73.9, 1242.0], [74.0, 1243.0], [74.1, 1245.0], [74.2, 1245.0], [74.3, 1246.0], [74.4, 1246.0], [74.5, 1248.0], [74.6, 1251.0], [74.7, 1252.0], [74.8, 1253.0], [74.9, 1255.0], [75.0, 1257.0], [75.1, 1260.0], [75.2, 1261.0], [75.3, 1261.0], [75.4, 1262.0], [75.5, 1265.0], [75.6, 1267.0], [75.7, 1270.0], [75.8, 1274.0], [75.9, 1276.0], [76.0, 1279.0], [76.1, 1280.0], [76.2, 1282.0], [76.3, 1285.0], [76.4, 1286.0], [76.5, 1290.0], [76.6, 1292.0], [76.7, 1293.0], [76.8, 1293.0], [76.9, 1297.0], [77.0, 1299.0], [77.1, 1300.0], [77.2, 1304.0], [77.3, 1306.0], [77.4, 1307.0], [77.5, 1310.0], [77.6, 1312.0], [77.7, 1314.0], [77.8, 1315.0], [77.9, 1316.0], [78.0, 1318.0], [78.1, 1323.0], [78.2, 1324.0], [78.3, 1327.0], [78.4, 1329.0], [78.5, 1331.0], [78.6, 1331.0], [78.7, 1334.0], [78.8, 1336.0], [78.9, 1336.0], [79.0, 1339.0], [79.1, 1341.0], [79.2, 1341.0], [79.3, 1342.0], [79.4, 1346.0], [79.5, 1347.0], [79.6, 1351.0], [79.7, 1353.0], [79.8, 1353.0], [79.9, 1355.0], [80.0, 1358.0], [80.1, 1364.0], [80.2, 1365.0], [80.3, 1367.0], [80.4, 1368.0], [80.5, 1369.0], [80.6, 1372.0], [80.7, 1374.0], [80.8, 1376.0], [80.9, 1379.0], [81.0, 1381.0], [81.1, 1382.0], [81.2, 1385.0], [81.3, 1389.0], [81.4, 1393.0], [81.5, 1395.0], [81.6, 1396.0], [81.7, 1398.0], [81.8, 1400.0], [81.9, 1404.0], [82.0, 1405.0], [82.1, 1407.0], [82.2, 1409.0], [82.3, 1413.0], [82.4, 1414.0], [82.5, 1417.0], [82.6, 1417.0], [82.7, 1418.0], [82.8, 1419.0], [82.9, 1424.0], [83.0, 1426.0], [83.1, 1427.0], [83.2, 1428.0], [83.3, 1429.0], [83.4, 1430.0], [83.5, 1436.0], [83.6, 1438.0], [83.7, 1443.0], [83.8, 1448.0], [83.9, 1450.0], [84.0, 1451.0], [84.1, 1455.0], [84.2, 1462.0], [84.3, 1464.0], [84.4, 1466.0], [84.5, 1470.0], [84.6, 1470.0], [84.7, 1480.0], [84.8, 1486.0], [84.9, 1489.0], [85.0, 1491.0], [85.1, 1493.0], [85.2, 1497.0], [85.3, 1498.0], [85.4, 1505.0], [85.5, 1509.0], [85.6, 1510.0], [85.7, 1513.0], [85.8, 1517.0], [85.9, 1517.0], [86.0, 1518.0], [86.1, 1521.0], [86.2, 1526.0], [86.3, 1527.0], [86.4, 1532.0], [86.5, 1533.0], [86.6, 1541.0], [86.7, 1548.0], [86.8, 1553.0], [86.9, 1557.0], [87.0, 1558.0], [87.1, 1560.0], [87.2, 1560.0], [87.3, 1561.0], [87.4, 1565.0], [87.5, 1567.0], [87.6, 1569.0], [87.7, 1572.0], [87.8, 1573.0], [87.9, 1577.0], [88.0, 1582.0], [88.1, 1585.0], [88.2, 1591.0], [88.3, 1595.0], [88.4, 1601.0], [88.5, 1604.0], [88.6, 1608.0], [88.7, 1619.0], [88.8, 1622.0], [88.9, 1627.0], [89.0, 1630.0], [89.1, 1636.0], [89.2, 1640.0], [89.3, 1645.0], [89.4, 1651.0], [89.5, 1654.0], [89.6, 1657.0], [89.7, 1665.0], [89.8, 1669.0], [89.9, 1672.0], [90.0, 1675.0], [90.1, 1681.0], [90.2, 1685.0], [90.3, 1692.0], [90.4, 1694.0], [90.5, 1701.0], [90.6, 1705.0], [90.7, 1714.0], [90.8, 1716.0], [90.9, 1720.0], [91.0, 1729.0], [91.1, 1734.0], [91.2, 1741.0], [91.3, 1744.0], [91.4, 1750.0], [91.5, 1751.0], [91.6, 1756.0], [91.7, 1766.0], [91.8, 1768.0], [91.9, 1776.0], [92.0, 1779.0], [92.1, 1788.0], [92.2, 1792.0], [92.3, 1799.0], [92.4, 1801.0], [92.5, 1806.0], [92.6, 1809.0], [92.7, 1816.0], [92.8, 1824.0], [92.9, 1825.0], [93.0, 1839.0], [93.1, 1842.0], [93.2, 1843.0], [93.3, 1847.0], [93.4, 1849.0], [93.5, 1851.0], [93.6, 1858.0], [93.7, 1858.0], [93.8, 1865.0], [93.9, 1870.0], [94.0, 1872.0], [94.1, 1878.0], [94.2, 1881.0], [94.3, 1882.0], [94.4, 1887.0], [94.5, 1892.0], [94.6, 1898.0], [94.7, 1899.0], [94.8, 1910.0], [94.9, 1911.0], [95.0, 1919.0], [95.1, 1928.0], [95.2, 1935.0], [95.3, 1939.0], [95.4, 1943.0], [95.5, 1950.0], [95.6, 1964.0], [95.7, 1970.0], [95.8, 1977.0], [95.9, 1978.0], [96.0, 1979.0], [96.1, 1989.0], [96.2, 2009.0], [96.3, 2014.0], [96.4, 2017.0], [96.5, 2024.0], [96.6, 2028.0], [96.7, 2033.0], [96.8, 2041.0], [96.9, 2045.0], [97.0, 2056.0], [97.1, 2071.0], [97.2, 2076.0], [97.3, 2079.0], [97.4, 2090.0], [97.5, 2096.0], [97.6, 2113.0], [97.7, 2119.0], [97.8, 2135.0], [97.9, 2146.0], [98.0, 2162.0], [98.1, 2174.0], [98.2, 2190.0], [98.3, 2205.0], [98.4, 2213.0], [98.5, 2230.0], [98.6, 2264.0], [98.7, 2279.0], [98.8, 2292.0], [98.9, 2324.0], [99.0, 2360.0], [99.1, 2378.0], [99.2, 2385.0], [99.3, 2428.0], [99.4, 2459.0], [99.5, 2477.0], [99.6, 2524.0], [99.7, 2556.0], [99.8, 2631.0], [99.9, 2746.0], [100.0, 2838.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 400.0, "maxY": 422.0, "series": [{"data": [[600.0, 145.0], [700.0, 265.0], [800.0, 422.0], [900.0, 413.0], [1000.0, 385.0], [1100.0, 253.0], [1200.0, 168.0], [1300.0, 127.0], [1400.0, 96.0], [1500.0, 83.0], [1600.0, 57.0], [1700.0, 51.0], [1800.0, 64.0], [1900.0, 38.0], [2000.0, 39.0], [2100.0, 19.0], [2200.0, 16.0], [2300.0, 10.0], [2400.0, 8.0], [2500.0, 6.0], [2600.0, 3.0], [2700.0, 3.0], [2800.0, 1.0], [400.0, 1.0], [500.0, 35.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2310.0, "series": [{"data": [[0.0, 1.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2310.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 397.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 49.467734757454394, "minX": 1.61557266E12, "maxY": 50.0, "series": [{"data": [[1.61557272E12, 49.467734757454394], [1.61557266E12, 50.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61557272E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1106.825874388871, "minX": 2.0, "maxY": 2746.0, "series": [{"data": [[33.0, 1865.0], [32.0, 1910.0], [2.0, 1368.5], [35.0, 1908.0], [34.0, 1332.0], [41.0, 1906.0], [40.0, 1944.4], [43.0, 1194.0], [42.0, 1898.0], [45.0, 2191.0], [44.0, 2746.0], [49.0, 2123.0], [48.0, 1537.3333333333333], [3.0, 1313.0], [50.0, 1106.825874388871], [4.0, 1385.0], [6.0, 1271.5], [7.0, 1384.0], [8.0, 1317.0], [9.0, 1366.0], [10.0, 1371.0], [11.0, 1316.0], [12.0, 1398.0], [13.0, 1407.0], [14.0, 1314.0], [15.0, 1237.0], [18.0, 1271.0], [19.0, 1312.0], [24.0, 1438.2], [26.0, 1354.5], [27.0, 1341.0], [28.0, 1466.0], [29.0, 1253.0], [30.0, 1334.0], [31.0, 1328.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[49.55834564254063, 1114.5834564254083]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 906.6333333333333, "minX": 1.61557266E12, "maxY": 799145.55, "series": [{"data": [[1.61557272E12, 799145.55], [1.61557266E12, 163954.65]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.61557272E12, 4419.1], [1.61557266E12, 906.6333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61557272E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1061.8156182212592, "minX": 1.61557266E12, "maxY": 1125.4094348019573, "series": [{"data": [[1.61557272E12, 1125.4094348019573], [1.61557266E12, 1061.8156182212592]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61557272E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1061.2451193058562, "minX": 1.61557266E12, "maxY": 1124.9759679572774, "series": [{"data": [[1.61557272E12, 1124.9759679572774], [1.61557266E12, 1061.2451193058562]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61557272E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.61557266E12, "maxY": 46.65292841648588, "series": [{"data": [[1.61557272E12, 0.0], [1.61557266E12, 46.65292841648588]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61557272E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 472.0, "minX": 1.61557266E12, "maxY": 2838.0, "series": [{"data": [[1.61557272E12, 2838.0], [1.61557266E12, 2576.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.61557272E12, 1720.6000000000001], [1.61557266E12, 1406.4]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.61557272E12, 2378.52], [1.61557266E12, 2219.08]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.61557272E12, 1940.1999999999998], [1.61557266E12, 1715.8999999999996]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.61557272E12, 528.0], [1.61557266E12, 472.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.61557272E12, 1018.0], [1.61557266E12, 1013.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61557272E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 865.5, "minX": 14.0, "maxY": 1816.0, "series": [{"data": [[33.0, 1342.0], [32.0, 1613.0], [34.0, 1816.0], [35.0, 1651.0], [37.0, 1720.0], [39.0, 1032.0], [40.0, 1765.0], [43.0, 971.0], [42.0, 1519.5], [44.0, 1280.5], [45.0, 1353.0], [46.0, 939.5], [47.0, 942.0], [48.0, 957.5], [49.0, 887.0], [51.0, 1031.5], [50.0, 952.0], [53.0, 1011.0], [52.0, 865.5], [54.0, 938.0], [55.0, 909.5], [56.0, 930.5], [57.0, 971.0], [58.0, 907.5], [61.0, 953.0], [60.0, 897.5], [62.0, 901.5], [14.0, 1659.0], [21.0, 1512.0], [22.0, 1407.5], [23.0, 1464.0], [24.0, 1779.0], [25.0, 1517.0], [27.0, 1340.0], [31.0, 1690.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 62.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 865.5, "minX": 14.0, "maxY": 1815.5, "series": [{"data": [[33.0, 1341.0], [32.0, 1612.5], [34.0, 1815.5], [35.0, 1651.0], [37.0, 1720.0], [39.0, 1032.0], [40.0, 1765.0], [43.0, 970.0], [42.0, 1519.0], [44.0, 1279.5], [45.0, 1352.0], [46.0, 939.0], [47.0, 941.0], [48.0, 956.5], [49.0, 887.0], [51.0, 1031.0], [50.0, 951.5], [53.0, 1010.5], [52.0, 865.5], [54.0, 937.5], [55.0, 909.0], [56.0, 930.0], [57.0, 971.0], [58.0, 906.5], [61.0, 952.0], [60.0, 897.0], [62.0, 901.0], [14.0, 1658.0], [21.0, 1512.0], [22.0, 1406.5], [23.0, 1463.0], [24.0, 1778.5], [25.0, 1516.0], [27.0, 1340.0], [31.0, 1689.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 62.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 8.516666666666667, "minX": 1.61557266E12, "maxY": 36.61666666666667, "series": [{"data": [[1.61557272E12, 36.61666666666667], [1.61557266E12, 8.516666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61557272E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 7.683333333333334, "minX": 1.61557266E12, "maxY": 37.45, "series": [{"data": [[1.61557272E12, 37.45], [1.61557266E12, 7.683333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61557272E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 7.683333333333334, "minX": 1.61557266E12, "maxY": 37.45, "series": [{"data": [[1.61557272E12, 37.45], [1.61557266E12, 7.683333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61557272E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 7.683333333333334, "minX": 1.61557266E12, "maxY": 37.45, "series": [{"data": [[1.61557272E12, 37.45], [1.61557266E12, 7.683333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61557272E12, "title": "Total Transactions Per Second"}},
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

