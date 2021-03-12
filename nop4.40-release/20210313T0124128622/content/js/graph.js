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
        data: {"result": {"minY": 478.0, "minX": 0.0, "maxY": 2894.0, "series": [{"data": [[0.0, 478.0], [0.1, 523.0], [0.2, 542.0], [0.3, 544.0], [0.4, 571.0], [0.5, 635.0], [0.6, 690.0], [0.7, 697.0], [0.8, 719.0], [0.9, 722.0], [1.0, 740.0], [1.1, 744.0], [1.2, 757.0], [1.3, 765.0], [1.4, 770.0], [1.5, 789.0], [1.6, 789.0], [1.7, 792.0], [1.8, 796.0], [1.9, 815.0], [2.0, 818.0], [2.1, 819.0], [2.2, 825.0], [2.3, 827.0], [2.4, 834.0], [2.5, 839.0], [2.6, 842.0], [2.7, 843.0], [2.8, 849.0], [2.9, 862.0], [3.0, 873.0], [3.1, 885.0], [3.2, 896.0], [3.3, 904.0], [3.4, 906.0], [3.5, 909.0], [3.6, 911.0], [3.7, 917.0], [3.8, 921.0], [3.9, 921.0], [4.0, 926.0], [4.1, 931.0], [4.2, 936.0], [4.3, 936.0], [4.4, 937.0], [4.5, 943.0], [4.6, 947.0], [4.7, 949.0], [4.8, 951.0], [4.9, 958.0], [5.0, 960.0], [5.1, 962.0], [5.2, 962.0], [5.3, 964.0], [5.4, 968.0], [5.5, 970.0], [5.6, 971.0], [5.7, 972.0], [5.8, 973.0], [5.9, 974.0], [6.0, 976.0], [6.1, 981.0], [6.2, 981.0], [6.3, 985.0], [6.4, 987.0], [6.5, 988.0], [6.6, 990.0], [6.7, 990.0], [6.8, 990.0], [6.9, 992.0], [7.0, 998.0], [7.1, 1000.0], [7.2, 1002.0], [7.3, 1003.0], [7.4, 1005.0], [7.5, 1007.0], [7.6, 1012.0], [7.7, 1014.0], [7.8, 1016.0], [7.9, 1017.0], [8.0, 1017.0], [8.1, 1020.0], [8.2, 1023.0], [8.3, 1026.0], [8.4, 1036.0], [8.5, 1038.0], [8.6, 1039.0], [8.7, 1040.0], [8.8, 1040.0], [8.9, 1042.0], [9.0, 1047.0], [9.1, 1047.0], [9.2, 1049.0], [9.3, 1051.0], [9.4, 1052.0], [9.5, 1052.0], [9.6, 1053.0], [9.7, 1053.0], [9.8, 1054.0], [9.9, 1054.0], [10.0, 1055.0], [10.1, 1058.0], [10.2, 1058.0], [10.3, 1059.0], [10.4, 1059.0], [10.5, 1060.0], [10.6, 1061.0], [10.7, 1062.0], [10.8, 1063.0], [10.9, 1063.0], [11.0, 1065.0], [11.1, 1065.0], [11.2, 1066.0], [11.3, 1066.0], [11.4, 1067.0], [11.5, 1068.0], [11.6, 1070.0], [11.7, 1071.0], [11.8, 1073.0], [11.9, 1074.0], [12.0, 1074.0], [12.1, 1076.0], [12.2, 1076.0], [12.3, 1077.0], [12.4, 1077.0], [12.5, 1079.0], [12.6, 1079.0], [12.7, 1079.0], [12.8, 1081.0], [12.9, 1081.0], [13.0, 1083.0], [13.1, 1084.0], [13.2, 1085.0], [13.3, 1086.0], [13.4, 1088.0], [13.5, 1089.0], [13.6, 1089.0], [13.7, 1091.0], [13.8, 1092.0], [13.9, 1092.0], [14.0, 1093.0], [14.1, 1094.0], [14.2, 1094.0], [14.3, 1094.0], [14.4, 1095.0], [14.5, 1096.0], [14.6, 1097.0], [14.7, 1097.0], [14.8, 1098.0], [14.9, 1100.0], [15.0, 1100.0], [15.1, 1101.0], [15.2, 1102.0], [15.3, 1103.0], [15.4, 1104.0], [15.5, 1104.0], [15.6, 1105.0], [15.7, 1107.0], [15.8, 1108.0], [15.9, 1109.0], [16.0, 1110.0], [16.1, 1111.0], [16.2, 1112.0], [16.3, 1114.0], [16.4, 1115.0], [16.5, 1117.0], [16.6, 1117.0], [16.7, 1117.0], [16.8, 1118.0], [16.9, 1119.0], [17.0, 1120.0], [17.1, 1121.0], [17.2, 1122.0], [17.3, 1123.0], [17.4, 1124.0], [17.5, 1125.0], [17.6, 1125.0], [17.7, 1126.0], [17.8, 1128.0], [17.9, 1128.0], [18.0, 1128.0], [18.1, 1129.0], [18.2, 1130.0], [18.3, 1130.0], [18.4, 1131.0], [18.5, 1131.0], [18.6, 1131.0], [18.7, 1132.0], [18.8, 1134.0], [18.9, 1134.0], [19.0, 1135.0], [19.1, 1135.0], [19.2, 1136.0], [19.3, 1137.0], [19.4, 1138.0], [19.5, 1139.0], [19.6, 1139.0], [19.7, 1139.0], [19.8, 1140.0], [19.9, 1141.0], [20.0, 1141.0], [20.1, 1142.0], [20.2, 1142.0], [20.3, 1143.0], [20.4, 1143.0], [20.5, 1143.0], [20.6, 1145.0], [20.7, 1145.0], [20.8, 1146.0], [20.9, 1146.0], [21.0, 1147.0], [21.1, 1147.0], [21.2, 1148.0], [21.3, 1148.0], [21.4, 1149.0], [21.5, 1149.0], [21.6, 1150.0], [21.7, 1150.0], [21.8, 1151.0], [21.9, 1151.0], [22.0, 1152.0], [22.1, 1153.0], [22.2, 1154.0], [22.3, 1155.0], [22.4, 1156.0], [22.5, 1157.0], [22.6, 1157.0], [22.7, 1158.0], [22.8, 1158.0], [22.9, 1159.0], [23.0, 1159.0], [23.1, 1160.0], [23.2, 1161.0], [23.3, 1161.0], [23.4, 1163.0], [23.5, 1163.0], [23.6, 1164.0], [23.7, 1164.0], [23.8, 1165.0], [23.9, 1165.0], [24.0, 1166.0], [24.1, 1167.0], [24.2, 1168.0], [24.3, 1169.0], [24.4, 1171.0], [24.5, 1171.0], [24.6, 1172.0], [24.7, 1173.0], [24.8, 1174.0], [24.9, 1174.0], [25.0, 1174.0], [25.1, 1175.0], [25.2, 1175.0], [25.3, 1176.0], [25.4, 1176.0], [25.5, 1176.0], [25.6, 1177.0], [25.7, 1178.0], [25.8, 1178.0], [25.9, 1178.0], [26.0, 1180.0], [26.1, 1181.0], [26.2, 1183.0], [26.3, 1184.0], [26.4, 1185.0], [26.5, 1187.0], [26.6, 1187.0], [26.7, 1188.0], [26.8, 1193.0], [26.9, 1193.0], [27.0, 1195.0], [27.1, 1195.0], [27.2, 1196.0], [27.3, 1197.0], [27.4, 1197.0], [27.5, 1199.0], [27.6, 1200.0], [27.7, 1200.0], [27.8, 1201.0], [27.9, 1201.0], [28.0, 1202.0], [28.1, 1204.0], [28.2, 1204.0], [28.3, 1205.0], [28.4, 1205.0], [28.5, 1206.0], [28.6, 1207.0], [28.7, 1208.0], [28.8, 1209.0], [28.9, 1210.0], [29.0, 1210.0], [29.1, 1210.0], [29.2, 1212.0], [29.3, 1213.0], [29.4, 1214.0], [29.5, 1214.0], [29.6, 1217.0], [29.7, 1218.0], [29.8, 1219.0], [29.9, 1220.0], [30.0, 1220.0], [30.1, 1221.0], [30.2, 1221.0], [30.3, 1222.0], [30.4, 1223.0], [30.5, 1223.0], [30.6, 1224.0], [30.7, 1225.0], [30.8, 1225.0], [30.9, 1226.0], [31.0, 1226.0], [31.1, 1228.0], [31.2, 1229.0], [31.3, 1230.0], [31.4, 1233.0], [31.5, 1234.0], [31.6, 1236.0], [31.7, 1236.0], [31.8, 1237.0], [31.9, 1237.0], [32.0, 1239.0], [32.1, 1239.0], [32.2, 1240.0], [32.3, 1241.0], [32.4, 1242.0], [32.5, 1243.0], [32.6, 1243.0], [32.7, 1245.0], [32.8, 1247.0], [32.9, 1247.0], [33.0, 1248.0], [33.1, 1249.0], [33.2, 1250.0], [33.3, 1250.0], [33.4, 1251.0], [33.5, 1252.0], [33.6, 1253.0], [33.7, 1253.0], [33.8, 1253.0], [33.9, 1255.0], [34.0, 1256.0], [34.1, 1257.0], [34.2, 1258.0], [34.3, 1258.0], [34.4, 1258.0], [34.5, 1259.0], [34.6, 1259.0], [34.7, 1260.0], [34.8, 1260.0], [34.9, 1260.0], [35.0, 1261.0], [35.1, 1261.0], [35.2, 1261.0], [35.3, 1262.0], [35.4, 1262.0], [35.5, 1263.0], [35.6, 1263.0], [35.7, 1263.0], [35.8, 1264.0], [35.9, 1265.0], [36.0, 1267.0], [36.1, 1268.0], [36.2, 1268.0], [36.3, 1270.0], [36.4, 1271.0], [36.5, 1271.0], [36.6, 1273.0], [36.7, 1275.0], [36.8, 1276.0], [36.9, 1278.0], [37.0, 1279.0], [37.1, 1280.0], [37.2, 1280.0], [37.3, 1281.0], [37.4, 1281.0], [37.5, 1282.0], [37.6, 1284.0], [37.7, 1287.0], [37.8, 1288.0], [37.9, 1289.0], [38.0, 1289.0], [38.1, 1290.0], [38.2, 1292.0], [38.3, 1293.0], [38.4, 1293.0], [38.5, 1293.0], [38.6, 1297.0], [38.7, 1298.0], [38.8, 1300.0], [38.9, 1301.0], [39.0, 1302.0], [39.1, 1302.0], [39.2, 1303.0], [39.3, 1303.0], [39.4, 1303.0], [39.5, 1304.0], [39.6, 1305.0], [39.7, 1306.0], [39.8, 1306.0], [39.9, 1307.0], [40.0, 1307.0], [40.1, 1308.0], [40.2, 1308.0], [40.3, 1308.0], [40.4, 1309.0], [40.5, 1309.0], [40.6, 1309.0], [40.7, 1310.0], [40.8, 1310.0], [40.9, 1310.0], [41.0, 1313.0], [41.1, 1314.0], [41.2, 1315.0], [41.3, 1315.0], [41.4, 1316.0], [41.5, 1316.0], [41.6, 1317.0], [41.7, 1320.0], [41.8, 1320.0], [41.9, 1321.0], [42.0, 1321.0], [42.1, 1323.0], [42.2, 1323.0], [42.3, 1323.0], [42.4, 1324.0], [42.5, 1324.0], [42.6, 1324.0], [42.7, 1325.0], [42.8, 1325.0], [42.9, 1327.0], [43.0, 1327.0], [43.1, 1328.0], [43.2, 1328.0], [43.3, 1328.0], [43.4, 1329.0], [43.5, 1329.0], [43.6, 1329.0], [43.7, 1330.0], [43.8, 1330.0], [43.9, 1331.0], [44.0, 1332.0], [44.1, 1332.0], [44.2, 1334.0], [44.3, 1335.0], [44.4, 1336.0], [44.5, 1337.0], [44.6, 1339.0], [44.7, 1340.0], [44.8, 1341.0], [44.9, 1341.0], [45.0, 1341.0], [45.1, 1342.0], [45.2, 1342.0], [45.3, 1342.0], [45.4, 1344.0], [45.5, 1345.0], [45.6, 1345.0], [45.7, 1348.0], [45.8, 1349.0], [45.9, 1350.0], [46.0, 1351.0], [46.1, 1351.0], [46.2, 1354.0], [46.3, 1356.0], [46.4, 1358.0], [46.5, 1362.0], [46.6, 1364.0], [46.7, 1367.0], [46.8, 1367.0], [46.9, 1368.0], [47.0, 1369.0], [47.1, 1371.0], [47.2, 1372.0], [47.3, 1375.0], [47.4, 1375.0], [47.5, 1376.0], [47.6, 1377.0], [47.7, 1378.0], [47.8, 1379.0], [47.9, 1381.0], [48.0, 1383.0], [48.1, 1383.0], [48.2, 1384.0], [48.3, 1386.0], [48.4, 1387.0], [48.5, 1388.0], [48.6, 1390.0], [48.7, 1392.0], [48.8, 1392.0], [48.9, 1393.0], [49.0, 1394.0], [49.1, 1394.0], [49.2, 1395.0], [49.3, 1396.0], [49.4, 1397.0], [49.5, 1400.0], [49.6, 1401.0], [49.7, 1402.0], [49.8, 1403.0], [49.9, 1403.0], [50.0, 1403.0], [50.1, 1405.0], [50.2, 1406.0], [50.3, 1406.0], [50.4, 1407.0], [50.5, 1409.0], [50.6, 1410.0], [50.7, 1410.0], [50.8, 1411.0], [50.9, 1411.0], [51.0, 1412.0], [51.1, 1412.0], [51.2, 1413.0], [51.3, 1414.0], [51.4, 1414.0], [51.5, 1416.0], [51.6, 1417.0], [51.7, 1418.0], [51.8, 1418.0], [51.9, 1420.0], [52.0, 1421.0], [52.1, 1422.0], [52.2, 1422.0], [52.3, 1422.0], [52.4, 1424.0], [52.5, 1424.0], [52.6, 1425.0], [52.7, 1426.0], [52.8, 1426.0], [52.9, 1428.0], [53.0, 1429.0], [53.1, 1429.0], [53.2, 1429.0], [53.3, 1430.0], [53.4, 1431.0], [53.5, 1431.0], [53.6, 1433.0], [53.7, 1434.0], [53.8, 1435.0], [53.9, 1435.0], [54.0, 1436.0], [54.1, 1437.0], [54.2, 1438.0], [54.3, 1439.0], [54.4, 1441.0], [54.5, 1441.0], [54.6, 1445.0], [54.7, 1446.0], [54.8, 1447.0], [54.9, 1448.0], [55.0, 1449.0], [55.1, 1450.0], [55.2, 1452.0], [55.3, 1453.0], [55.4, 1453.0], [55.5, 1454.0], [55.6, 1455.0], [55.7, 1455.0], [55.8, 1455.0], [55.9, 1459.0], [56.0, 1463.0], [56.1, 1464.0], [56.2, 1464.0], [56.3, 1465.0], [56.4, 1465.0], [56.5, 1466.0], [56.6, 1467.0], [56.7, 1467.0], [56.8, 1468.0], [56.9, 1469.0], [57.0, 1470.0], [57.1, 1472.0], [57.2, 1474.0], [57.3, 1475.0], [57.4, 1476.0], [57.5, 1478.0], [57.6, 1478.0], [57.7, 1478.0], [57.8, 1479.0], [57.9, 1480.0], [58.0, 1483.0], [58.1, 1485.0], [58.2, 1486.0], [58.3, 1486.0], [58.4, 1487.0], [58.5, 1488.0], [58.6, 1490.0], [58.7, 1491.0], [58.8, 1492.0], [58.9, 1493.0], [59.0, 1494.0], [59.1, 1496.0], [59.2, 1497.0], [59.3, 1498.0], [59.4, 1499.0], [59.5, 1500.0], [59.6, 1501.0], [59.7, 1501.0], [59.8, 1501.0], [59.9, 1504.0], [60.0, 1504.0], [60.1, 1505.0], [60.2, 1506.0], [60.3, 1508.0], [60.4, 1508.0], [60.5, 1510.0], [60.6, 1511.0], [60.7, 1513.0], [60.8, 1513.0], [60.9, 1517.0], [61.0, 1517.0], [61.1, 1519.0], [61.2, 1521.0], [61.3, 1526.0], [61.4, 1526.0], [61.5, 1527.0], [61.6, 1527.0], [61.7, 1528.0], [61.8, 1529.0], [61.9, 1531.0], [62.0, 1531.0], [62.1, 1533.0], [62.2, 1534.0], [62.3, 1535.0], [62.4, 1536.0], [62.5, 1537.0], [62.6, 1539.0], [62.7, 1541.0], [62.8, 1541.0], [62.9, 1543.0], [63.0, 1547.0], [63.1, 1548.0], [63.2, 1550.0], [63.3, 1550.0], [63.4, 1552.0], [63.5, 1553.0], [63.6, 1553.0], [63.7, 1559.0], [63.8, 1561.0], [63.9, 1563.0], [64.0, 1564.0], [64.1, 1564.0], [64.2, 1565.0], [64.3, 1568.0], [64.4, 1568.0], [64.5, 1569.0], [64.6, 1570.0], [64.7, 1571.0], [64.8, 1573.0], [64.9, 1575.0], [65.0, 1578.0], [65.1, 1578.0], [65.2, 1579.0], [65.3, 1581.0], [65.4, 1583.0], [65.5, 1583.0], [65.6, 1583.0], [65.7, 1584.0], [65.8, 1585.0], [65.9, 1586.0], [66.0, 1587.0], [66.1, 1587.0], [66.2, 1588.0], [66.3, 1589.0], [66.4, 1590.0], [66.5, 1591.0], [66.6, 1592.0], [66.7, 1593.0], [66.8, 1593.0], [66.9, 1593.0], [67.0, 1595.0], [67.1, 1595.0], [67.2, 1596.0], [67.3, 1597.0], [67.4, 1597.0], [67.5, 1599.0], [67.6, 1599.0], [67.7, 1600.0], [67.8, 1600.0], [67.9, 1601.0], [68.0, 1602.0], [68.1, 1603.0], [68.2, 1604.0], [68.3, 1605.0], [68.4, 1606.0], [68.5, 1607.0], [68.6, 1607.0], [68.7, 1607.0], [68.8, 1608.0], [68.9, 1609.0], [69.0, 1611.0], [69.1, 1611.0], [69.2, 1612.0], [69.3, 1612.0], [69.4, 1613.0], [69.5, 1615.0], [69.6, 1616.0], [69.7, 1617.0], [69.8, 1617.0], [69.9, 1618.0], [70.0, 1619.0], [70.1, 1620.0], [70.2, 1621.0], [70.3, 1621.0], [70.4, 1622.0], [70.5, 1624.0], [70.6, 1625.0], [70.7, 1627.0], [70.8, 1628.0], [70.9, 1628.0], [71.0, 1629.0], [71.1, 1629.0], [71.2, 1630.0], [71.3, 1631.0], [71.4, 1634.0], [71.5, 1636.0], [71.6, 1638.0], [71.7, 1639.0], [71.8, 1644.0], [71.9, 1647.0], [72.0, 1648.0], [72.1, 1651.0], [72.2, 1652.0], [72.3, 1653.0], [72.4, 1655.0], [72.5, 1656.0], [72.6, 1659.0], [72.7, 1660.0], [72.8, 1661.0], [72.9, 1663.0], [73.0, 1664.0], [73.1, 1665.0], [73.2, 1666.0], [73.3, 1670.0], [73.4, 1671.0], [73.5, 1672.0], [73.6, 1673.0], [73.7, 1674.0], [73.8, 1674.0], [73.9, 1675.0], [74.0, 1677.0], [74.1, 1678.0], [74.2, 1679.0], [74.3, 1681.0], [74.4, 1682.0], [74.5, 1683.0], [74.6, 1684.0], [74.7, 1684.0], [74.8, 1687.0], [74.9, 1694.0], [75.0, 1694.0], [75.1, 1695.0], [75.2, 1696.0], [75.3, 1696.0], [75.4, 1697.0], [75.5, 1698.0], [75.6, 1700.0], [75.7, 1702.0], [75.8, 1706.0], [75.9, 1708.0], [76.0, 1710.0], [76.1, 1710.0], [76.2, 1712.0], [76.3, 1714.0], [76.4, 1717.0], [76.5, 1721.0], [76.6, 1721.0], [76.7, 1723.0], [76.8, 1725.0], [76.9, 1725.0], [77.0, 1727.0], [77.1, 1731.0], [77.2, 1732.0], [77.3, 1734.0], [77.4, 1735.0], [77.5, 1736.0], [77.6, 1737.0], [77.7, 1742.0], [77.8, 1744.0], [77.9, 1747.0], [78.0, 1750.0], [78.1, 1752.0], [78.2, 1753.0], [78.3, 1755.0], [78.4, 1758.0], [78.5, 1758.0], [78.6, 1761.0], [78.7, 1761.0], [78.8, 1762.0], [78.9, 1763.0], [79.0, 1763.0], [79.1, 1764.0], [79.2, 1767.0], [79.3, 1767.0], [79.4, 1767.0], [79.5, 1768.0], [79.6, 1771.0], [79.7, 1772.0], [79.8, 1773.0], [79.9, 1774.0], [80.0, 1775.0], [80.1, 1776.0], [80.2, 1778.0], [80.3, 1780.0], [80.4, 1781.0], [80.5, 1782.0], [80.6, 1783.0], [80.7, 1783.0], [80.8, 1783.0], [80.9, 1784.0], [81.0, 1786.0], [81.1, 1791.0], [81.2, 1792.0], [81.3, 1796.0], [81.4, 1803.0], [81.5, 1810.0], [81.6, 1811.0], [81.7, 1815.0], [81.8, 1816.0], [81.9, 1817.0], [82.0, 1821.0], [82.1, 1822.0], [82.2, 1823.0], [82.3, 1825.0], [82.4, 1826.0], [82.5, 1829.0], [82.6, 1830.0], [82.7, 1833.0], [82.8, 1837.0], [82.9, 1837.0], [83.0, 1840.0], [83.1, 1841.0], [83.2, 1843.0], [83.3, 1844.0], [83.4, 1848.0], [83.5, 1849.0], [83.6, 1851.0], [83.7, 1852.0], [83.8, 1854.0], [83.9, 1856.0], [84.0, 1857.0], [84.1, 1859.0], [84.2, 1862.0], [84.3, 1865.0], [84.4, 1868.0], [84.5, 1873.0], [84.6, 1875.0], [84.7, 1875.0], [84.8, 1877.0], [84.9, 1883.0], [85.0, 1885.0], [85.1, 1898.0], [85.2, 1904.0], [85.3, 1909.0], [85.4, 1911.0], [85.5, 1915.0], [85.6, 1918.0], [85.7, 1920.0], [85.8, 1921.0], [85.9, 1929.0], [86.0, 1932.0], [86.1, 1935.0], [86.2, 1938.0], [86.3, 1941.0], [86.4, 1944.0], [86.5, 1951.0], [86.6, 1952.0], [86.7, 1956.0], [86.8, 1959.0], [86.9, 1966.0], [87.0, 1970.0], [87.1, 1972.0], [87.2, 1976.0], [87.3, 1978.0], [87.4, 1980.0], [87.5, 1981.0], [87.6, 1982.0], [87.7, 1988.0], [87.8, 1988.0], [87.9, 1992.0], [88.0, 1996.0], [88.1, 2000.0], [88.2, 2002.0], [88.3, 2004.0], [88.4, 2005.0], [88.5, 2006.0], [88.6, 2013.0], [88.7, 2016.0], [88.8, 2017.0], [88.9, 2020.0], [89.0, 2024.0], [89.1, 2027.0], [89.2, 2032.0], [89.3, 2036.0], [89.4, 2046.0], [89.5, 2048.0], [89.6, 2053.0], [89.7, 2060.0], [89.8, 2062.0], [89.9, 2069.0], [90.0, 2069.0], [90.1, 2071.0], [90.2, 2077.0], [90.3, 2080.0], [90.4, 2088.0], [90.5, 2092.0], [90.6, 2093.0], [90.7, 2097.0], [90.8, 2099.0], [90.9, 2102.0], [91.0, 2103.0], [91.1, 2110.0], [91.2, 2113.0], [91.3, 2113.0], [91.4, 2117.0], [91.5, 2123.0], [91.6, 2124.0], [91.7, 2128.0], [91.8, 2130.0], [91.9, 2133.0], [92.0, 2136.0], [92.1, 2136.0], [92.2, 2137.0], [92.3, 2140.0], [92.4, 2143.0], [92.5, 2143.0], [92.6, 2146.0], [92.7, 2147.0], [92.8, 2153.0], [92.9, 2161.0], [93.0, 2170.0], [93.1, 2173.0], [93.2, 2173.0], [93.3, 2175.0], [93.4, 2179.0], [93.5, 2186.0], [93.6, 2187.0], [93.7, 2190.0], [93.8, 2192.0], [93.9, 2197.0], [94.0, 2198.0], [94.1, 2204.0], [94.2, 2206.0], [94.3, 2209.0], [94.4, 2211.0], [94.5, 2214.0], [94.6, 2218.0], [94.7, 2223.0], [94.8, 2225.0], [94.9, 2228.0], [95.0, 2228.0], [95.1, 2236.0], [95.2, 2239.0], [95.3, 2244.0], [95.4, 2247.0], [95.5, 2247.0], [95.6, 2249.0], [95.7, 2253.0], [95.8, 2256.0], [95.9, 2260.0], [96.0, 2263.0], [96.1, 2270.0], [96.2, 2270.0], [96.3, 2277.0], [96.4, 2278.0], [96.5, 2282.0], [96.6, 2283.0], [96.7, 2285.0], [96.8, 2294.0], [96.9, 2307.0], [97.0, 2313.0], [97.1, 2321.0], [97.2, 2325.0], [97.3, 2330.0], [97.4, 2336.0], [97.5, 2361.0], [97.6, 2364.0], [97.7, 2367.0], [97.8, 2370.0], [97.9, 2376.0], [98.0, 2384.0], [98.1, 2386.0], [98.2, 2393.0], [98.3, 2402.0], [98.4, 2409.0], [98.5, 2412.0], [98.6, 2412.0], [98.7, 2425.0], [98.8, 2430.0], [98.9, 2434.0], [99.0, 2439.0], [99.1, 2447.0], [99.2, 2449.0], [99.3, 2457.0], [99.4, 2463.0], [99.5, 2495.0], [99.6, 2500.0], [99.7, 2526.0], [99.8, 2561.0], [99.9, 2647.0], [100.0, 2894.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 400.0, "maxY": 258.0, "series": [{"data": [[2100.0, 65.0], [2200.0, 58.0], [2300.0, 29.0], [2400.0, 26.0], [600.0, 5.0], [2500.0, 5.0], [2600.0, 3.0], [700.0, 22.0], [2800.0, 1.0], [800.0, 30.0], [900.0, 77.0], [1000.0, 158.0], [1100.0, 258.0], [1200.0, 229.0], [1300.0, 217.0], [1400.0, 204.0], [1500.0, 167.0], [1600.0, 159.0], [400.0, 1.0], [1700.0, 119.0], [1800.0, 76.0], [1900.0, 60.0], [2000.0, 56.0], [500.0, 9.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1211.0, "series": [{"data": [[0.0, 1.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1211.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 822.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 47.81066176470587, "minX": 1.61556984E12, "maxY": 50.0, "series": [{"data": [[1.61556984E12, 50.0], [1.6155699E12, 47.81066176470587]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6155699E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 478.0, "minX": 2.0, "maxY": 1479.9622356495458, "series": [{"data": [[32.0, 1187.0], [2.0, 632.0], [36.0, 1089.25], [38.0, 1109.5], [41.0, 1397.0], [43.0, 1061.0], [44.0, 1172.5], [47.0, 1166.3333333333333], [48.0, 1236.0], [3.0, 571.0], [50.0, 1479.9622356495458], [4.0, 541.0], [5.0, 842.0], [6.0, 981.0], [7.0, 523.0], [8.0, 544.0], [10.0, 543.5], [11.0, 542.0], [12.0, 828.0], [13.0, 825.0], [14.0, 478.0], [15.0, 915.0], [16.0, 815.0], [17.0, 705.0], [18.0, 885.0], [19.0, 949.0], [20.0, 1142.0], [26.0, 1096.8333333333333], [28.0, 1064.0], [29.0, 1145.0], [30.0, 960.0], [31.0, 1112.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[49.414454277286154, 1467.8775811209432]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1069.8666666666666, "minX": 1.61556984E12, "maxY": 529918.5, "series": [{"data": [[1.61556984E12, 529918.5], [1.6155699E12, 193473.6]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.61556984E12, 2930.3333333333335], [1.6155699E12, 1069.8666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6155699E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1373.2499999999998, "minX": 1.61556984E12, "maxY": 1502.4261744966452, "series": [{"data": [[1.61556984E12, 1502.4261744966452], [1.6155699E12, 1373.2499999999998]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6155699E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1372.7867647058836, "minX": 1.61556984E12, "maxY": 1501.8731543624144, "series": [{"data": [[1.61556984E12, 1501.8731543624144], [1.6155699E12, 1372.7867647058836]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6155699E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.61556984E12, "maxY": 15.000000000000014, "series": [{"data": [[1.61556984E12, 15.000000000000014], [1.6155699E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6155699E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 478.0, "minX": 1.61556984E12, "maxY": 2894.0, "series": [{"data": [[1.61556984E12, 2894.0], [1.6155699E12, 2361.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.61556984E12, 2129.4000000000005], [1.6155699E12, 1865.5]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.61556984E12, 2457.2699999999995], [1.6155699E12, 2260.5499999999993]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.61556984E12, 2275.9], [1.6155699E12, 2092.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.61556984E12, 595.0], [1.6155699E12, 478.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.61556984E12, 1432.0], [1.6155699E12, 1262.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6155699E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 988.0, "minX": 1.0, "maxY": 1806.0, "series": [{"data": [[33.0, 1426.0], [32.0, 1126.0], [35.0, 1383.0], [34.0, 1196.0], [36.0, 1279.5], [37.0, 1426.0], [38.0, 1525.0], [39.0, 1430.0], [40.0, 1473.5], [41.0, 1511.0], [42.0, 1704.0], [43.0, 1390.0], [44.0, 1149.0], [47.0, 1533.0], [51.0, 1407.0], [54.0, 1724.0], [57.0, 990.0], [59.0, 1112.0], [10.0, 1775.5], [11.0, 1493.0], [13.0, 1806.0], [14.0, 1537.5], [15.0, 988.0], [1.0, 1040.0], [17.0, 1223.0], [18.0, 1473.5], [29.0, 994.0], [30.0, 1612.5], [31.0, 1314.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 59.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 988.0, "minX": 1.0, "maxY": 1806.0, "series": [{"data": [[33.0, 1426.0], [32.0, 1125.0], [35.0, 1382.5], [34.0, 1195.5], [36.0, 1279.0], [37.0, 1426.0], [38.0, 1524.0], [39.0, 1429.5], [40.0, 1473.0], [41.0, 1511.0], [42.0, 1703.5], [43.0, 1390.0], [44.0, 1148.5], [47.0, 1533.0], [51.0, 1407.0], [54.0, 1724.0], [57.0, 989.0], [59.0, 1112.0], [10.0, 1775.0], [11.0, 1493.0], [13.0, 1806.0], [14.0, 1536.5], [15.0, 988.0], [1.0, 1039.0], [17.0, 1223.0], [18.0, 1473.0], [29.0, 994.0], [30.0, 1612.0], [31.0, 1314.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 59.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 8.233333333333333, "minX": 1.61556984E12, "maxY": 25.666666666666668, "series": [{"data": [[1.61556984E12, 25.666666666666668], [1.6155699E12, 8.233333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6155699E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 9.066666666666666, "minX": 1.61556984E12, "maxY": 24.833333333333332, "series": [{"data": [[1.61556984E12, 24.833333333333332], [1.6155699E12, 9.066666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6155699E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 9.066666666666666, "minX": 1.61556984E12, "maxY": 24.833333333333332, "series": [{"data": [[1.61556984E12, 24.833333333333332], [1.6155699E12, 9.066666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6155699E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 9.066666666666666, "minX": 1.61556984E12, "maxY": 24.833333333333332, "series": [{"data": [[1.61556984E12, 24.833333333333332], [1.6155699E12, 9.066666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6155699E12, "title": "Total Transactions Per Second"}},
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
