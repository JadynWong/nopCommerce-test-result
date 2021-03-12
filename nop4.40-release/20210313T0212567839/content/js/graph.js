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
        data: {"result": {"minY": 573.0, "minX": 0.0, "maxY": 3112.0, "series": [{"data": [[0.0, 573.0], [0.1, 578.0], [0.2, 648.0], [0.3, 715.0], [0.4, 737.0], [0.5, 744.0], [0.6, 763.0], [0.7, 767.0], [0.8, 768.0], [0.9, 779.0], [1.0, 787.0], [1.1, 796.0], [1.2, 804.0], [1.3, 816.0], [1.4, 825.0], [1.5, 830.0], [1.6, 832.0], [1.7, 832.0], [1.8, 836.0], [1.9, 854.0], [2.0, 860.0], [2.1, 866.0], [2.2, 867.0], [2.3, 870.0], [2.4, 878.0], [2.5, 883.0], [2.6, 885.0], [2.7, 889.0], [2.8, 891.0], [2.9, 903.0], [3.0, 904.0], [3.1, 908.0], [3.2, 913.0], [3.3, 917.0], [3.4, 919.0], [3.5, 925.0], [3.6, 927.0], [3.7, 931.0], [3.8, 933.0], [3.9, 936.0], [4.0, 941.0], [4.1, 947.0], [4.2, 953.0], [4.3, 954.0], [4.4, 956.0], [4.5, 964.0], [4.6, 969.0], [4.7, 973.0], [4.8, 978.0], [4.9, 979.0], [5.0, 980.0], [5.1, 993.0], [5.2, 995.0], [5.3, 999.0], [5.4, 1007.0], [5.5, 1008.0], [5.6, 1012.0], [5.7, 1012.0], [5.8, 1016.0], [5.9, 1023.0], [6.0, 1026.0], [6.1, 1032.0], [6.2, 1033.0], [6.3, 1037.0], [6.4, 1037.0], [6.5, 1041.0], [6.6, 1046.0], [6.7, 1051.0], [6.8, 1053.0], [6.9, 1061.0], [7.0, 1062.0], [7.1, 1063.0], [7.2, 1064.0], [7.3, 1069.0], [7.4, 1074.0], [7.5, 1078.0], [7.6, 1080.0], [7.7, 1081.0], [7.8, 1084.0], [7.9, 1085.0], [8.0, 1088.0], [8.1, 1091.0], [8.2, 1096.0], [8.3, 1097.0], [8.4, 1098.0], [8.5, 1098.0], [8.6, 1099.0], [8.7, 1104.0], [8.8, 1106.0], [8.9, 1107.0], [9.0, 1109.0], [9.1, 1111.0], [9.2, 1114.0], [9.3, 1114.0], [9.4, 1121.0], [9.5, 1123.0], [9.6, 1124.0], [9.7, 1125.0], [9.8, 1128.0], [9.9, 1130.0], [10.0, 1131.0], [10.1, 1137.0], [10.2, 1148.0], [10.3, 1148.0], [10.4, 1151.0], [10.5, 1153.0], [10.6, 1154.0], [10.7, 1156.0], [10.8, 1158.0], [10.9, 1160.0], [11.0, 1162.0], [11.1, 1163.0], [11.2, 1165.0], [11.3, 1165.0], [11.4, 1166.0], [11.5, 1168.0], [11.6, 1169.0], [11.7, 1171.0], [11.8, 1171.0], [11.9, 1171.0], [12.0, 1172.0], [12.1, 1173.0], [12.2, 1177.0], [12.3, 1178.0], [12.4, 1178.0], [12.5, 1180.0], [12.6, 1183.0], [12.7, 1189.0], [12.8, 1192.0], [12.9, 1193.0], [13.0, 1197.0], [13.1, 1197.0], [13.2, 1198.0], [13.3, 1201.0], [13.4, 1201.0], [13.5, 1202.0], [13.6, 1202.0], [13.7, 1204.0], [13.8, 1204.0], [13.9, 1211.0], [14.0, 1212.0], [14.1, 1218.0], [14.2, 1219.0], [14.3, 1220.0], [14.4, 1221.0], [14.5, 1222.0], [14.6, 1222.0], [14.7, 1225.0], [14.8, 1226.0], [14.9, 1227.0], [15.0, 1227.0], [15.1, 1228.0], [15.2, 1228.0], [15.3, 1229.0], [15.4, 1234.0], [15.5, 1236.0], [15.6, 1238.0], [15.7, 1239.0], [15.8, 1242.0], [15.9, 1243.0], [16.0, 1245.0], [16.1, 1247.0], [16.2, 1248.0], [16.3, 1249.0], [16.4, 1249.0], [16.5, 1250.0], [16.6, 1252.0], [16.7, 1252.0], [16.8, 1253.0], [16.9, 1253.0], [17.0, 1254.0], [17.1, 1256.0], [17.2, 1258.0], [17.3, 1259.0], [17.4, 1259.0], [17.5, 1262.0], [17.6, 1264.0], [17.7, 1265.0], [17.8, 1266.0], [17.9, 1266.0], [18.0, 1267.0], [18.1, 1268.0], [18.2, 1269.0], [18.3, 1269.0], [18.4, 1272.0], [18.5, 1273.0], [18.6, 1274.0], [18.7, 1277.0], [18.8, 1278.0], [18.9, 1279.0], [19.0, 1279.0], [19.1, 1281.0], [19.2, 1281.0], [19.3, 1283.0], [19.4, 1284.0], [19.5, 1287.0], [19.6, 1289.0], [19.7, 1289.0], [19.8, 1289.0], [19.9, 1289.0], [20.0, 1292.0], [20.1, 1293.0], [20.2, 1295.0], [20.3, 1297.0], [20.4, 1298.0], [20.5, 1298.0], [20.6, 1298.0], [20.7, 1299.0], [20.8, 1299.0], [20.9, 1300.0], [21.0, 1302.0], [21.1, 1304.0], [21.2, 1304.0], [21.3, 1306.0], [21.4, 1307.0], [21.5, 1309.0], [21.6, 1310.0], [21.7, 1311.0], [21.8, 1311.0], [21.9, 1314.0], [22.0, 1316.0], [22.1, 1317.0], [22.2, 1319.0], [22.3, 1320.0], [22.4, 1321.0], [22.5, 1323.0], [22.6, 1324.0], [22.7, 1326.0], [22.8, 1326.0], [22.9, 1327.0], [23.0, 1330.0], [23.1, 1331.0], [23.2, 1332.0], [23.3, 1334.0], [23.4, 1335.0], [23.5, 1335.0], [23.6, 1336.0], [23.7, 1337.0], [23.8, 1338.0], [23.9, 1339.0], [24.0, 1343.0], [24.1, 1343.0], [24.2, 1343.0], [24.3, 1344.0], [24.4, 1344.0], [24.5, 1345.0], [24.6, 1345.0], [24.7, 1347.0], [24.8, 1348.0], [24.9, 1348.0], [25.0, 1349.0], [25.1, 1350.0], [25.2, 1351.0], [25.3, 1352.0], [25.4, 1354.0], [25.5, 1355.0], [25.6, 1355.0], [25.7, 1355.0], [25.8, 1357.0], [25.9, 1357.0], [26.0, 1359.0], [26.1, 1360.0], [26.2, 1361.0], [26.3, 1361.0], [26.4, 1362.0], [26.5, 1363.0], [26.6, 1364.0], [26.7, 1364.0], [26.8, 1365.0], [26.9, 1366.0], [27.0, 1366.0], [27.1, 1367.0], [27.2, 1370.0], [27.3, 1371.0], [27.4, 1371.0], [27.5, 1373.0], [27.6, 1373.0], [27.7, 1373.0], [27.8, 1374.0], [27.9, 1375.0], [28.0, 1378.0], [28.1, 1379.0], [28.2, 1379.0], [28.3, 1381.0], [28.4, 1383.0], [28.5, 1384.0], [28.6, 1387.0], [28.7, 1388.0], [28.8, 1390.0], [28.9, 1391.0], [29.0, 1393.0], [29.1, 1393.0], [29.2, 1394.0], [29.3, 1395.0], [29.4, 1396.0], [29.5, 1397.0], [29.6, 1397.0], [29.7, 1398.0], [29.8, 1398.0], [29.9, 1399.0], [30.0, 1400.0], [30.1, 1400.0], [30.2, 1401.0], [30.3, 1401.0], [30.4, 1402.0], [30.5, 1405.0], [30.6, 1405.0], [30.7, 1406.0], [30.8, 1406.0], [30.9, 1407.0], [31.0, 1407.0], [31.1, 1408.0], [31.2, 1408.0], [31.3, 1408.0], [31.4, 1410.0], [31.5, 1411.0], [31.6, 1413.0], [31.7, 1413.0], [31.8, 1416.0], [31.9, 1418.0], [32.0, 1418.0], [32.1, 1420.0], [32.2, 1421.0], [32.3, 1422.0], [32.4, 1422.0], [32.5, 1424.0], [32.6, 1424.0], [32.7, 1424.0], [32.8, 1425.0], [32.9, 1427.0], [33.0, 1428.0], [33.1, 1429.0], [33.2, 1429.0], [33.3, 1431.0], [33.4, 1431.0], [33.5, 1432.0], [33.6, 1433.0], [33.7, 1435.0], [33.8, 1435.0], [33.9, 1438.0], [34.0, 1439.0], [34.1, 1440.0], [34.2, 1442.0], [34.3, 1445.0], [34.4, 1446.0], [34.5, 1447.0], [34.6, 1447.0], [34.7, 1448.0], [34.8, 1448.0], [34.9, 1450.0], [35.0, 1450.0], [35.1, 1451.0], [35.2, 1452.0], [35.3, 1453.0], [35.4, 1454.0], [35.5, 1454.0], [35.6, 1455.0], [35.7, 1455.0], [35.8, 1456.0], [35.9, 1457.0], [36.0, 1457.0], [36.1, 1458.0], [36.2, 1459.0], [36.3, 1459.0], [36.4, 1462.0], [36.5, 1464.0], [36.6, 1464.0], [36.7, 1465.0], [36.8, 1466.0], [36.9, 1468.0], [37.0, 1468.0], [37.1, 1470.0], [37.2, 1471.0], [37.3, 1472.0], [37.4, 1473.0], [37.5, 1473.0], [37.6, 1474.0], [37.7, 1474.0], [37.8, 1475.0], [37.9, 1476.0], [38.0, 1477.0], [38.1, 1479.0], [38.2, 1480.0], [38.3, 1480.0], [38.4, 1482.0], [38.5, 1483.0], [38.6, 1484.0], [38.7, 1488.0], [38.8, 1489.0], [38.9, 1490.0], [39.0, 1491.0], [39.1, 1491.0], [39.2, 1491.0], [39.3, 1493.0], [39.4, 1494.0], [39.5, 1496.0], [39.6, 1497.0], [39.7, 1497.0], [39.8, 1497.0], [39.9, 1498.0], [40.0, 1499.0], [40.1, 1499.0], [40.2, 1501.0], [40.3, 1502.0], [40.4, 1502.0], [40.5, 1503.0], [40.6, 1504.0], [40.7, 1506.0], [40.8, 1507.0], [40.9, 1508.0], [41.0, 1509.0], [41.1, 1511.0], [41.2, 1512.0], [41.3, 1513.0], [41.4, 1513.0], [41.5, 1516.0], [41.6, 1516.0], [41.7, 1516.0], [41.8, 1517.0], [41.9, 1517.0], [42.0, 1519.0], [42.1, 1520.0], [42.2, 1520.0], [42.3, 1521.0], [42.4, 1522.0], [42.5, 1522.0], [42.6, 1523.0], [42.7, 1525.0], [42.8, 1526.0], [42.9, 1527.0], [43.0, 1530.0], [43.1, 1531.0], [43.2, 1532.0], [43.3, 1532.0], [43.4, 1533.0], [43.5, 1535.0], [43.6, 1536.0], [43.7, 1537.0], [43.8, 1538.0], [43.9, 1540.0], [44.0, 1540.0], [44.1, 1541.0], [44.2, 1541.0], [44.3, 1541.0], [44.4, 1542.0], [44.5, 1542.0], [44.6, 1543.0], [44.7, 1544.0], [44.8, 1544.0], [44.9, 1546.0], [45.0, 1547.0], [45.1, 1548.0], [45.2, 1549.0], [45.3, 1550.0], [45.4, 1551.0], [45.5, 1551.0], [45.6, 1552.0], [45.7, 1554.0], [45.8, 1555.0], [45.9, 1555.0], [46.0, 1556.0], [46.1, 1557.0], [46.2, 1558.0], [46.3, 1559.0], [46.4, 1560.0], [46.5, 1561.0], [46.6, 1563.0], [46.7, 1566.0], [46.8, 1567.0], [46.9, 1568.0], [47.0, 1568.0], [47.1, 1569.0], [47.2, 1569.0], [47.3, 1570.0], [47.4, 1571.0], [47.5, 1571.0], [47.6, 1571.0], [47.7, 1571.0], [47.8, 1572.0], [47.9, 1572.0], [48.0, 1573.0], [48.1, 1573.0], [48.2, 1573.0], [48.3, 1575.0], [48.4, 1577.0], [48.5, 1579.0], [48.6, 1582.0], [48.7, 1583.0], [48.8, 1585.0], [48.9, 1587.0], [49.0, 1587.0], [49.1, 1589.0], [49.2, 1591.0], [49.3, 1592.0], [49.4, 1593.0], [49.5, 1595.0], [49.6, 1595.0], [49.7, 1596.0], [49.8, 1598.0], [49.9, 1599.0], [50.0, 1601.0], [50.1, 1601.0], [50.2, 1603.0], [50.3, 1603.0], [50.4, 1604.0], [50.5, 1605.0], [50.6, 1606.0], [50.7, 1606.0], [50.8, 1609.0], [50.9, 1610.0], [51.0, 1612.0], [51.1, 1612.0], [51.2, 1613.0], [51.3, 1614.0], [51.4, 1615.0], [51.5, 1616.0], [51.6, 1616.0], [51.7, 1618.0], [51.8, 1618.0], [51.9, 1619.0], [52.0, 1621.0], [52.1, 1622.0], [52.2, 1624.0], [52.3, 1625.0], [52.4, 1626.0], [52.5, 1626.0], [52.6, 1627.0], [52.7, 1630.0], [52.8, 1632.0], [52.9, 1636.0], [53.0, 1636.0], [53.1, 1636.0], [53.2, 1637.0], [53.3, 1639.0], [53.4, 1639.0], [53.5, 1639.0], [53.6, 1639.0], [53.7, 1641.0], [53.8, 1642.0], [53.9, 1643.0], [54.0, 1644.0], [54.1, 1645.0], [54.2, 1646.0], [54.3, 1647.0], [54.4, 1648.0], [54.5, 1649.0], [54.6, 1651.0], [54.7, 1651.0], [54.8, 1652.0], [54.9, 1653.0], [55.0, 1655.0], [55.1, 1656.0], [55.2, 1658.0], [55.3, 1660.0], [55.4, 1661.0], [55.5, 1661.0], [55.6, 1662.0], [55.7, 1663.0], [55.8, 1663.0], [55.9, 1664.0], [56.0, 1664.0], [56.1, 1664.0], [56.2, 1664.0], [56.3, 1665.0], [56.4, 1668.0], [56.5, 1669.0], [56.6, 1672.0], [56.7, 1673.0], [56.8, 1673.0], [56.9, 1673.0], [57.0, 1676.0], [57.1, 1676.0], [57.2, 1678.0], [57.3, 1679.0], [57.4, 1680.0], [57.5, 1680.0], [57.6, 1680.0], [57.7, 1682.0], [57.8, 1683.0], [57.9, 1683.0], [58.0, 1684.0], [58.1, 1685.0], [58.2, 1685.0], [58.3, 1685.0], [58.4, 1686.0], [58.5, 1686.0], [58.6, 1687.0], [58.7, 1688.0], [58.8, 1690.0], [58.9, 1690.0], [59.0, 1691.0], [59.1, 1691.0], [59.2, 1691.0], [59.3, 1693.0], [59.4, 1693.0], [59.5, 1695.0], [59.6, 1695.0], [59.7, 1696.0], [59.8, 1697.0], [59.9, 1698.0], [60.0, 1700.0], [60.1, 1701.0], [60.2, 1702.0], [60.3, 1702.0], [60.4, 1703.0], [60.5, 1704.0], [60.6, 1704.0], [60.7, 1705.0], [60.8, 1706.0], [60.9, 1707.0], [61.0, 1707.0], [61.1, 1708.0], [61.2, 1708.0], [61.3, 1710.0], [61.4, 1711.0], [61.5, 1712.0], [61.6, 1712.0], [61.7, 1713.0], [61.8, 1713.0], [61.9, 1714.0], [62.0, 1715.0], [62.1, 1715.0], [62.2, 1718.0], [62.3, 1718.0], [62.4, 1720.0], [62.5, 1721.0], [62.6, 1721.0], [62.7, 1723.0], [62.8, 1726.0], [62.9, 1727.0], [63.0, 1727.0], [63.1, 1727.0], [63.2, 1729.0], [63.3, 1729.0], [63.4, 1732.0], [63.5, 1734.0], [63.6, 1734.0], [63.7, 1734.0], [63.8, 1735.0], [63.9, 1735.0], [64.0, 1736.0], [64.1, 1739.0], [64.2, 1742.0], [64.3, 1743.0], [64.4, 1745.0], [64.5, 1747.0], [64.6, 1747.0], [64.7, 1748.0], [64.8, 1749.0], [64.9, 1750.0], [65.0, 1750.0], [65.1, 1751.0], [65.2, 1752.0], [65.3, 1753.0], [65.4, 1753.0], [65.5, 1754.0], [65.6, 1754.0], [65.7, 1755.0], [65.8, 1756.0], [65.9, 1757.0], [66.0, 1757.0], [66.1, 1758.0], [66.2, 1759.0], [66.3, 1760.0], [66.4, 1761.0], [66.5, 1762.0], [66.6, 1764.0], [66.7, 1764.0], [66.8, 1768.0], [66.9, 1770.0], [67.0, 1772.0], [67.1, 1774.0], [67.2, 1775.0], [67.3, 1776.0], [67.4, 1776.0], [67.5, 1777.0], [67.6, 1778.0], [67.7, 1779.0], [67.8, 1780.0], [67.9, 1782.0], [68.0, 1782.0], [68.1, 1782.0], [68.2, 1783.0], [68.3, 1785.0], [68.4, 1787.0], [68.5, 1788.0], [68.6, 1789.0], [68.7, 1789.0], [68.8, 1790.0], [68.9, 1791.0], [69.0, 1791.0], [69.1, 1793.0], [69.2, 1794.0], [69.3, 1794.0], [69.4, 1795.0], [69.5, 1796.0], [69.6, 1797.0], [69.7, 1799.0], [69.8, 1801.0], [69.9, 1803.0], [70.0, 1804.0], [70.1, 1804.0], [70.2, 1805.0], [70.3, 1805.0], [70.4, 1807.0], [70.5, 1809.0], [70.6, 1811.0], [70.7, 1812.0], [70.8, 1812.0], [70.9, 1813.0], [71.0, 1814.0], [71.1, 1818.0], [71.2, 1819.0], [71.3, 1821.0], [71.4, 1827.0], [71.5, 1828.0], [71.6, 1828.0], [71.7, 1829.0], [71.8, 1830.0], [71.9, 1832.0], [72.0, 1833.0], [72.1, 1835.0], [72.2, 1836.0], [72.3, 1838.0], [72.4, 1838.0], [72.5, 1839.0], [72.6, 1840.0], [72.7, 1841.0], [72.8, 1841.0], [72.9, 1842.0], [73.0, 1844.0], [73.1, 1845.0], [73.2, 1847.0], [73.3, 1849.0], [73.4, 1853.0], [73.5, 1853.0], [73.6, 1854.0], [73.7, 1856.0], [73.8, 1857.0], [73.9, 1857.0], [74.0, 1858.0], [74.1, 1860.0], [74.2, 1862.0], [74.3, 1863.0], [74.4, 1864.0], [74.5, 1864.0], [74.6, 1864.0], [74.7, 1866.0], [74.8, 1867.0], [74.9, 1868.0], [75.0, 1869.0], [75.1, 1870.0], [75.2, 1870.0], [75.3, 1870.0], [75.4, 1873.0], [75.5, 1874.0], [75.6, 1875.0], [75.7, 1876.0], [75.8, 1876.0], [75.9, 1879.0], [76.0, 1882.0], [76.1, 1883.0], [76.2, 1884.0], [76.3, 1884.0], [76.4, 1885.0], [76.5, 1886.0], [76.6, 1888.0], [76.7, 1890.0], [76.8, 1890.0], [76.9, 1892.0], [77.0, 1893.0], [77.1, 1895.0], [77.2, 1896.0], [77.3, 1897.0], [77.4, 1898.0], [77.5, 1900.0], [77.6, 1902.0], [77.7, 1903.0], [77.8, 1904.0], [77.9, 1904.0], [78.0, 1905.0], [78.1, 1905.0], [78.2, 1907.0], [78.3, 1911.0], [78.4, 1915.0], [78.5, 1916.0], [78.6, 1917.0], [78.7, 1918.0], [78.8, 1918.0], [78.9, 1920.0], [79.0, 1922.0], [79.1, 1924.0], [79.2, 1924.0], [79.3, 1926.0], [79.4, 1929.0], [79.5, 1929.0], [79.6, 1930.0], [79.7, 1934.0], [79.8, 1935.0], [79.9, 1937.0], [80.0, 1938.0], [80.1, 1938.0], [80.2, 1938.0], [80.3, 1940.0], [80.4, 1941.0], [80.5, 1944.0], [80.6, 1945.0], [80.7, 1946.0], [80.8, 1947.0], [80.9, 1947.0], [81.0, 1948.0], [81.1, 1950.0], [81.2, 1951.0], [81.3, 1953.0], [81.4, 1954.0], [81.5, 1955.0], [81.6, 1955.0], [81.7, 1958.0], [81.8, 1960.0], [81.9, 1962.0], [82.0, 1965.0], [82.1, 1966.0], [82.2, 1971.0], [82.3, 1973.0], [82.4, 1973.0], [82.5, 1976.0], [82.6, 1977.0], [82.7, 1978.0], [82.8, 1981.0], [82.9, 1982.0], [83.0, 1984.0], [83.1, 1985.0], [83.2, 1986.0], [83.3, 1987.0], [83.4, 1991.0], [83.5, 1993.0], [83.6, 1997.0], [83.7, 1998.0], [83.8, 1999.0], [83.9, 2001.0], [84.0, 2003.0], [84.1, 2003.0], [84.2, 2005.0], [84.3, 2009.0], [84.4, 2010.0], [84.5, 2011.0], [84.6, 2011.0], [84.7, 2014.0], [84.8, 2017.0], [84.9, 2022.0], [85.0, 2027.0], [85.1, 2029.0], [85.2, 2030.0], [85.3, 2031.0], [85.4, 2035.0], [85.5, 2036.0], [85.6, 2037.0], [85.7, 2039.0], [85.8, 2047.0], [85.9, 2050.0], [86.0, 2050.0], [86.1, 2053.0], [86.2, 2056.0], [86.3, 2059.0], [86.4, 2062.0], [86.5, 2064.0], [86.6, 2065.0], [86.7, 2070.0], [86.8, 2074.0], [86.9, 2082.0], [87.0, 2086.0], [87.1, 2091.0], [87.2, 2092.0], [87.3, 2094.0], [87.4, 2095.0], [87.5, 2095.0], [87.6, 2100.0], [87.7, 2102.0], [87.8, 2102.0], [87.9, 2105.0], [88.0, 2105.0], [88.1, 2108.0], [88.2, 2111.0], [88.3, 2112.0], [88.4, 2115.0], [88.5, 2118.0], [88.6, 2121.0], [88.7, 2123.0], [88.8, 2124.0], [88.9, 2126.0], [89.0, 2128.0], [89.1, 2129.0], [89.2, 2130.0], [89.3, 2132.0], [89.4, 2133.0], [89.5, 2137.0], [89.6, 2141.0], [89.7, 2142.0], [89.8, 2145.0], [89.9, 2149.0], [90.0, 2150.0], [90.1, 2151.0], [90.2, 2154.0], [90.3, 2164.0], [90.4, 2168.0], [90.5, 2168.0], [90.6, 2173.0], [90.7, 2179.0], [90.8, 2182.0], [90.9, 2185.0], [91.0, 2187.0], [91.1, 2191.0], [91.2, 2193.0], [91.3, 2195.0], [91.4, 2196.0], [91.5, 2197.0], [91.6, 2200.0], [91.7, 2207.0], [91.8, 2209.0], [91.9, 2210.0], [92.0, 2215.0], [92.1, 2216.0], [92.2, 2219.0], [92.3, 2220.0], [92.4, 2227.0], [92.5, 2236.0], [92.6, 2238.0], [92.7, 2239.0], [92.8, 2240.0], [92.9, 2243.0], [93.0, 2246.0], [93.1, 2258.0], [93.2, 2258.0], [93.3, 2262.0], [93.4, 2262.0], [93.5, 2266.0], [93.6, 2268.0], [93.7, 2268.0], [93.8, 2270.0], [93.9, 2271.0], [94.0, 2272.0], [94.1, 2273.0], [94.2, 2286.0], [94.3, 2288.0], [94.4, 2289.0], [94.5, 2292.0], [94.6, 2305.0], [94.7, 2310.0], [94.8, 2320.0], [94.9, 2322.0], [95.0, 2324.0], [95.1, 2324.0], [95.2, 2331.0], [95.3, 2338.0], [95.4, 2342.0], [95.5, 2346.0], [95.6, 2353.0], [95.7, 2359.0], [95.8, 2359.0], [95.9, 2372.0], [96.0, 2377.0], [96.1, 2379.0], [96.2, 2381.0], [96.3, 2391.0], [96.4, 2411.0], [96.5, 2414.0], [96.6, 2424.0], [96.7, 2426.0], [96.8, 2428.0], [96.9, 2455.0], [97.0, 2459.0], [97.1, 2475.0], [97.2, 2481.0], [97.3, 2490.0], [97.4, 2497.0], [97.5, 2502.0], [97.6, 2507.0], [97.7, 2527.0], [97.8, 2544.0], [97.9, 2546.0], [98.0, 2556.0], [98.1, 2567.0], [98.2, 2580.0], [98.3, 2598.0], [98.4, 2608.0], [98.5, 2630.0], [98.6, 2631.0], [98.7, 2649.0], [98.8, 2655.0], [98.9, 2660.0], [99.0, 2674.0], [99.1, 2693.0], [99.2, 2716.0], [99.3, 2721.0], [99.4, 2743.0], [99.5, 2801.0], [99.6, 2807.0], [99.7, 2891.0], [99.8, 2910.0], [99.9, 2956.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 189.0, "series": [{"data": [[600.0, 3.0], [700.0, 16.0], [800.0, 32.0], [900.0, 46.0], [1000.0, 61.0], [1100.0, 86.0], [1200.0, 142.0], [1300.0, 169.0], [1400.0, 189.0], [1500.0, 183.0], [1600.0, 186.0], [1700.0, 181.0], [1800.0, 144.0], [1900.0, 118.0], [2000.0, 70.0], [2100.0, 74.0], [2200.0, 56.0], [2300.0, 33.0], [2400.0, 20.0], [2500.0, 17.0], [2600.0, 15.0], [2800.0, 5.0], [2700.0, 6.0], [2900.0, 4.0], [3100.0, 1.0], [500.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 746.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1113.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 746.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1113.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 49.34876210979545, "minX": 1.61557272E12, "maxY": 50.0, "series": [{"data": [[1.61557278E12, 49.34876210979545], [1.61557272E12, 50.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61557278E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1019.0, "minX": 1.0, "maxY": 2289.0, "series": [{"data": [[33.0, 1130.0], [2.0, 1502.0], [34.0, 1250.0], [37.0, 1606.0], [36.0, 1620.0], [41.0, 1259.0], [40.0, 1810.3333333333333], [43.0, 1721.0], [42.0, 1687.0], [45.0, 1625.0], [44.0, 1019.0], [47.0, 1347.0], [46.0, 1479.0], [49.0, 2289.0], [48.0, 1408.0], [3.0, 1165.0], [50.0, 1629.2850828729263], [4.0, 1159.0], [6.0, 1247.5], [7.0, 1106.0], [8.0, 1104.0], [9.0, 1074.0], [10.0, 1303.0], [11.0, 1234.0], [12.0, 1171.0], [13.0, 1226.0], [14.0, 1274.0], [15.0, 1151.0], [16.0, 1307.0], [1.0, 1197.0], [17.0, 1309.0], [18.0, 1081.0], [19.0, 1148.0], [20.0, 1156.0], [21.0, 1253.0], [23.0, 1222.0], [25.0, 1504.5], [27.0, 1768.5], [31.0, 1265.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[49.3491124260355, 1622.4281871974158]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1.9666666666666666, "minX": 1.61557272E12, "maxY": 660797.7, "series": [{"data": [[1.61557278E12, 660797.7], [1.61557272E12, 355.65]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.61557278E12, 3654.0666666666666], [1.61557272E12, 1.9666666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61557278E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1252.0, "minX": 1.61557272E12, "maxY": 1622.627556512379, "series": [{"data": [[1.61557278E12, 1622.627556512379], [1.61557272E12, 1252.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61557278E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1248.0, "minX": 1.61557272E12, "maxY": 1622.1001076426257, "series": [{"data": [[1.61557278E12, 1622.1001076426257], [1.61557272E12, 1248.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61557278E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 10.257265877287413, "minX": 1.61557272E12, "maxY": 253.0, "series": [{"data": [[1.61557278E12, 10.257265877287413], [1.61557272E12, 253.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61557278E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 573.0, "minX": 1.61557272E12, "maxY": 3112.0, "series": [{"data": [[1.61557278E12, 3112.0], [1.61557272E12, 1252.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.61557278E12, 2150.1000000000004], [1.61557272E12, 1252.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.61557278E12, 2680.970000000001], [1.61557272E12, 1252.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.61557278E12, 2324.0], [1.61557272E12, 1252.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.61557278E12, 573.0], [1.61557272E12, 1252.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.61557278E12, 1601.0], [1.61557272E12, 1252.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61557278E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 973.5, "minX": 1.0, "maxY": 2211.0, "series": [{"data": [[32.0, 1624.5], [35.0, 1572.0], [34.0, 1665.5], [36.0, 1672.5], [37.0, 1604.0], [39.0, 1773.5], [38.0, 1628.5], [40.0, 1616.0], [41.0, 1647.0], [42.0, 1705.5], [43.0, 1465.0], [44.0, 973.5], [47.0, 1344.0], [3.0, 1727.0], [53.0, 1603.0], [57.0, 1096.0], [7.0, 2211.0], [9.0, 1718.0], [11.0, 1945.0], [13.0, 1364.0], [14.0, 1519.5], [1.0, 1252.0], [18.0, 1215.0], [19.0, 1171.0], [20.0, 1709.0], [22.0, 1556.5], [23.0, 1493.0], [24.0, 1670.0], [25.0, 1721.0], [27.0, 1670.5], [30.0, 1756.0], [31.0, 1537.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 57.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 973.0, "minX": 1.0, "maxY": 2211.0, "series": [{"data": [[32.0, 1623.5], [35.0, 1571.5], [34.0, 1665.5], [36.0, 1672.0], [37.0, 1604.0], [39.0, 1773.5], [38.0, 1628.0], [40.0, 1615.5], [41.0, 1646.5], [42.0, 1705.5], [43.0, 1464.0], [44.0, 973.0], [47.0, 1343.5], [3.0, 1726.0], [53.0, 1603.0], [57.0, 1095.0], [7.0, 2211.0], [9.0, 1712.0], [11.0, 1945.0], [13.0, 1364.0], [14.0, 1519.0], [1.0, 1248.0], [18.0, 1214.5], [19.0, 1171.0], [20.0, 1709.0], [22.0, 1556.0], [23.0, 1492.0], [24.0, 1669.5], [25.0, 1721.0], [27.0, 1670.5], [30.0, 1755.5], [31.0, 1537.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 57.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.85, "minX": 1.61557272E12, "maxY": 30.133333333333333, "series": [{"data": [[1.61557278E12, 30.133333333333333], [1.61557272E12, 0.85]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61557278E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.61557272E12, "maxY": 30.966666666666665, "series": [{"data": [[1.61557278E12, 30.966666666666665], [1.61557272E12, 0.016666666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61557278E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.61557272E12, "maxY": 30.966666666666665, "series": [{"data": [[1.61557278E12, 30.966666666666665], [1.61557272E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61557278E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.61557272E12, "maxY": 30.966666666666665, "series": [{"data": [[1.61557278E12, 30.966666666666665], [1.61557272E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61557278E12, "title": "Total Transactions Per Second"}},
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

