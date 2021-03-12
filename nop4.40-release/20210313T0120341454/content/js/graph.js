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
        data: {"result": {"minY": 541.0, "minX": 0.0, "maxY": 3272.0, "series": [{"data": [[0.0, 541.0], [0.1, 569.0], [0.2, 591.0], [0.3, 704.0], [0.4, 709.0], [0.5, 731.0], [0.6, 734.0], [0.7, 738.0], [0.8, 751.0], [0.9, 755.0], [1.0, 758.0], [1.1, 765.0], [1.2, 768.0], [1.3, 768.0], [1.4, 780.0], [1.5, 782.0], [1.6, 802.0], [1.7, 807.0], [1.8, 821.0], [1.9, 828.0], [2.0, 832.0], [2.1, 835.0], [2.2, 835.0], [2.3, 844.0], [2.4, 852.0], [2.5, 852.0], [2.6, 869.0], [2.7, 880.0], [2.8, 881.0], [2.9, 889.0], [3.0, 891.0], [3.1, 897.0], [3.2, 900.0], [3.3, 912.0], [3.4, 918.0], [3.5, 922.0], [3.6, 932.0], [3.7, 934.0], [3.8, 938.0], [3.9, 940.0], [4.0, 942.0], [4.1, 944.0], [4.2, 945.0], [4.3, 946.0], [4.4, 951.0], [4.5, 962.0], [4.6, 969.0], [4.7, 974.0], [4.8, 984.0], [4.9, 987.0], [5.0, 988.0], [5.1, 992.0], [5.2, 1002.0], [5.3, 1004.0], [5.4, 1005.0], [5.5, 1014.0], [5.6, 1019.0], [5.7, 1020.0], [5.8, 1027.0], [5.9, 1029.0], [6.0, 1029.0], [6.1, 1032.0], [6.2, 1033.0], [6.3, 1035.0], [6.4, 1035.0], [6.5, 1036.0], [6.6, 1038.0], [6.7, 1040.0], [6.8, 1045.0], [6.9, 1047.0], [7.0, 1048.0], [7.1, 1053.0], [7.2, 1063.0], [7.3, 1064.0], [7.4, 1065.0], [7.5, 1066.0], [7.6, 1068.0], [7.7, 1073.0], [7.8, 1074.0], [7.9, 1075.0], [8.0, 1079.0], [8.1, 1081.0], [8.2, 1082.0], [8.3, 1083.0], [8.4, 1083.0], [8.5, 1084.0], [8.6, 1085.0], [8.7, 1086.0], [8.8, 1088.0], [8.9, 1090.0], [9.0, 1093.0], [9.1, 1096.0], [9.2, 1096.0], [9.3, 1098.0], [9.4, 1098.0], [9.5, 1101.0], [9.6, 1104.0], [9.7, 1105.0], [9.8, 1113.0], [9.9, 1115.0], [10.0, 1117.0], [10.1, 1119.0], [10.2, 1121.0], [10.3, 1123.0], [10.4, 1126.0], [10.5, 1128.0], [10.6, 1128.0], [10.7, 1131.0], [10.8, 1134.0], [10.9, 1135.0], [11.0, 1136.0], [11.1, 1141.0], [11.2, 1141.0], [11.3, 1143.0], [11.4, 1148.0], [11.5, 1152.0], [11.6, 1153.0], [11.7, 1156.0], [11.8, 1159.0], [11.9, 1160.0], [12.0, 1160.0], [12.1, 1162.0], [12.2, 1162.0], [12.3, 1164.0], [12.4, 1166.0], [12.5, 1166.0], [12.6, 1168.0], [12.7, 1168.0], [12.8, 1173.0], [12.9, 1175.0], [13.0, 1175.0], [13.1, 1176.0], [13.2, 1181.0], [13.3, 1184.0], [13.4, 1190.0], [13.5, 1192.0], [13.6, 1193.0], [13.7, 1196.0], [13.8, 1197.0], [13.9, 1200.0], [14.0, 1201.0], [14.1, 1201.0], [14.2, 1202.0], [14.3, 1202.0], [14.4, 1207.0], [14.5, 1208.0], [14.6, 1212.0], [14.7, 1213.0], [14.8, 1213.0], [14.9, 1214.0], [15.0, 1217.0], [15.1, 1218.0], [15.2, 1218.0], [15.3, 1220.0], [15.4, 1221.0], [15.5, 1221.0], [15.6, 1222.0], [15.7, 1223.0], [15.8, 1225.0], [15.9, 1225.0], [16.0, 1227.0], [16.1, 1228.0], [16.2, 1228.0], [16.3, 1228.0], [16.4, 1233.0], [16.5, 1234.0], [16.6, 1235.0], [16.7, 1239.0], [16.8, 1240.0], [16.9, 1244.0], [17.0, 1245.0], [17.1, 1245.0], [17.2, 1246.0], [17.3, 1248.0], [17.4, 1251.0], [17.5, 1252.0], [17.6, 1254.0], [17.7, 1254.0], [17.8, 1257.0], [17.9, 1259.0], [18.0, 1260.0], [18.1, 1260.0], [18.2, 1264.0], [18.3, 1271.0], [18.4, 1272.0], [18.5, 1272.0], [18.6, 1282.0], [18.7, 1283.0], [18.8, 1285.0], [18.9, 1287.0], [19.0, 1289.0], [19.1, 1291.0], [19.2, 1291.0], [19.3, 1292.0], [19.4, 1294.0], [19.5, 1294.0], [19.6, 1295.0], [19.7, 1296.0], [19.8, 1296.0], [19.9, 1297.0], [20.0, 1297.0], [20.1, 1299.0], [20.2, 1301.0], [20.3, 1301.0], [20.4, 1302.0], [20.5, 1302.0], [20.6, 1303.0], [20.7, 1305.0], [20.8, 1306.0], [20.9, 1306.0], [21.0, 1311.0], [21.1, 1312.0], [21.2, 1313.0], [21.3, 1315.0], [21.4, 1316.0], [21.5, 1318.0], [21.6, 1321.0], [21.7, 1324.0], [21.8, 1326.0], [21.9, 1326.0], [22.0, 1326.0], [22.1, 1328.0], [22.2, 1330.0], [22.3, 1333.0], [22.4, 1335.0], [22.5, 1338.0], [22.6, 1338.0], [22.7, 1338.0], [22.8, 1340.0], [22.9, 1341.0], [23.0, 1343.0], [23.1, 1345.0], [23.2, 1345.0], [23.3, 1346.0], [23.4, 1349.0], [23.5, 1350.0], [23.6, 1351.0], [23.7, 1352.0], [23.8, 1354.0], [23.9, 1355.0], [24.0, 1356.0], [24.1, 1356.0], [24.2, 1357.0], [24.3, 1360.0], [24.4, 1362.0], [24.5, 1363.0], [24.6, 1365.0], [24.7, 1367.0], [24.8, 1368.0], [24.9, 1368.0], [25.0, 1368.0], [25.1, 1369.0], [25.2, 1370.0], [25.3, 1370.0], [25.4, 1371.0], [25.5, 1373.0], [25.6, 1374.0], [25.7, 1376.0], [25.8, 1376.0], [25.9, 1381.0], [26.0, 1381.0], [26.1, 1381.0], [26.2, 1385.0], [26.3, 1387.0], [26.4, 1389.0], [26.5, 1390.0], [26.6, 1391.0], [26.7, 1392.0], [26.8, 1393.0], [26.9, 1396.0], [27.0, 1397.0], [27.1, 1398.0], [27.2, 1399.0], [27.3, 1401.0], [27.4, 1402.0], [27.5, 1403.0], [27.6, 1405.0], [27.7, 1406.0], [27.8, 1407.0], [27.9, 1409.0], [28.0, 1410.0], [28.1, 1411.0], [28.2, 1412.0], [28.3, 1415.0], [28.4, 1416.0], [28.5, 1418.0], [28.6, 1418.0], [28.7, 1419.0], [28.8, 1420.0], [28.9, 1420.0], [29.0, 1421.0], [29.1, 1422.0], [29.2, 1424.0], [29.3, 1424.0], [29.4, 1426.0], [29.5, 1427.0], [29.6, 1427.0], [29.7, 1428.0], [29.8, 1429.0], [29.9, 1429.0], [30.0, 1430.0], [30.1, 1430.0], [30.2, 1432.0], [30.3, 1432.0], [30.4, 1434.0], [30.5, 1434.0], [30.6, 1435.0], [30.7, 1435.0], [30.8, 1436.0], [30.9, 1437.0], [31.0, 1437.0], [31.1, 1437.0], [31.2, 1438.0], [31.3, 1439.0], [31.4, 1440.0], [31.5, 1441.0], [31.6, 1443.0], [31.7, 1444.0], [31.8, 1446.0], [31.9, 1447.0], [32.0, 1447.0], [32.1, 1449.0], [32.2, 1449.0], [32.3, 1450.0], [32.4, 1450.0], [32.5, 1451.0], [32.6, 1452.0], [32.7, 1454.0], [32.8, 1456.0], [32.9, 1457.0], [33.0, 1458.0], [33.1, 1459.0], [33.2, 1459.0], [33.3, 1463.0], [33.4, 1465.0], [33.5, 1467.0], [33.6, 1468.0], [33.7, 1469.0], [33.8, 1470.0], [33.9, 1470.0], [34.0, 1470.0], [34.1, 1472.0], [34.2, 1472.0], [34.3, 1474.0], [34.4, 1474.0], [34.5, 1476.0], [34.6, 1477.0], [34.7, 1478.0], [34.8, 1481.0], [34.9, 1481.0], [35.0, 1482.0], [35.1, 1483.0], [35.2, 1484.0], [35.3, 1484.0], [35.4, 1487.0], [35.5, 1488.0], [35.6, 1490.0], [35.7, 1491.0], [35.8, 1492.0], [35.9, 1493.0], [36.0, 1493.0], [36.1, 1494.0], [36.2, 1495.0], [36.3, 1497.0], [36.4, 1499.0], [36.5, 1501.0], [36.6, 1502.0], [36.7, 1502.0], [36.8, 1503.0], [36.9, 1504.0], [37.0, 1505.0], [37.1, 1507.0], [37.2, 1509.0], [37.3, 1509.0], [37.4, 1510.0], [37.5, 1510.0], [37.6, 1511.0], [37.7, 1512.0], [37.8, 1513.0], [37.9, 1514.0], [38.0, 1516.0], [38.1, 1516.0], [38.2, 1518.0], [38.3, 1519.0], [38.4, 1520.0], [38.5, 1521.0], [38.6, 1521.0], [38.7, 1525.0], [38.8, 1525.0], [38.9, 1526.0], [39.0, 1526.0], [39.1, 1526.0], [39.2, 1527.0], [39.3, 1528.0], [39.4, 1529.0], [39.5, 1529.0], [39.6, 1529.0], [39.7, 1532.0], [39.8, 1532.0], [39.9, 1533.0], [40.0, 1535.0], [40.1, 1535.0], [40.2, 1535.0], [40.3, 1536.0], [40.4, 1536.0], [40.5, 1537.0], [40.6, 1538.0], [40.7, 1539.0], [40.8, 1539.0], [40.9, 1539.0], [41.0, 1539.0], [41.1, 1540.0], [41.2, 1540.0], [41.3, 1542.0], [41.4, 1544.0], [41.5, 1545.0], [41.6, 1545.0], [41.7, 1547.0], [41.8, 1549.0], [41.9, 1550.0], [42.0, 1551.0], [42.1, 1552.0], [42.2, 1552.0], [42.3, 1553.0], [42.4, 1554.0], [42.5, 1555.0], [42.6, 1555.0], [42.7, 1555.0], [42.8, 1556.0], [42.9, 1556.0], [43.0, 1557.0], [43.1, 1557.0], [43.2, 1558.0], [43.3, 1559.0], [43.4, 1561.0], [43.5, 1562.0], [43.6, 1562.0], [43.7, 1562.0], [43.8, 1563.0], [43.9, 1563.0], [44.0, 1563.0], [44.1, 1565.0], [44.2, 1567.0], [44.3, 1567.0], [44.4, 1567.0], [44.5, 1568.0], [44.6, 1569.0], [44.7, 1570.0], [44.8, 1572.0], [44.9, 1573.0], [45.0, 1573.0], [45.1, 1573.0], [45.2, 1574.0], [45.3, 1576.0], [45.4, 1576.0], [45.5, 1578.0], [45.6, 1579.0], [45.7, 1579.0], [45.8, 1580.0], [45.9, 1581.0], [46.0, 1582.0], [46.1, 1583.0], [46.2, 1584.0], [46.3, 1585.0], [46.4, 1586.0], [46.5, 1586.0], [46.6, 1587.0], [46.7, 1587.0], [46.8, 1588.0], [46.9, 1589.0], [47.0, 1589.0], [47.1, 1590.0], [47.2, 1590.0], [47.3, 1593.0], [47.4, 1593.0], [47.5, 1594.0], [47.6, 1594.0], [47.7, 1595.0], [47.8, 1595.0], [47.9, 1597.0], [48.0, 1598.0], [48.1, 1598.0], [48.2, 1599.0], [48.3, 1599.0], [48.4, 1601.0], [48.5, 1601.0], [48.6, 1601.0], [48.7, 1601.0], [48.8, 1602.0], [48.9, 1603.0], [49.0, 1604.0], [49.1, 1605.0], [49.2, 1605.0], [49.3, 1606.0], [49.4, 1606.0], [49.5, 1607.0], [49.6, 1608.0], [49.7, 1609.0], [49.8, 1610.0], [49.9, 1610.0], [50.0, 1611.0], [50.1, 1611.0], [50.2, 1613.0], [50.3, 1613.0], [50.4, 1613.0], [50.5, 1614.0], [50.6, 1616.0], [50.7, 1617.0], [50.8, 1617.0], [50.9, 1618.0], [51.0, 1618.0], [51.1, 1619.0], [51.2, 1620.0], [51.3, 1622.0], [51.4, 1622.0], [51.5, 1622.0], [51.6, 1623.0], [51.7, 1624.0], [51.8, 1625.0], [51.9, 1626.0], [52.0, 1627.0], [52.1, 1628.0], [52.2, 1628.0], [52.3, 1629.0], [52.4, 1630.0], [52.5, 1631.0], [52.6, 1632.0], [52.7, 1633.0], [52.8, 1634.0], [52.9, 1634.0], [53.0, 1635.0], [53.1, 1636.0], [53.2, 1637.0], [53.3, 1638.0], [53.4, 1638.0], [53.5, 1638.0], [53.6, 1639.0], [53.7, 1639.0], [53.8, 1640.0], [53.9, 1641.0], [54.0, 1642.0], [54.1, 1644.0], [54.2, 1645.0], [54.3, 1645.0], [54.4, 1648.0], [54.5, 1648.0], [54.6, 1649.0], [54.7, 1649.0], [54.8, 1650.0], [54.9, 1650.0], [55.0, 1650.0], [55.1, 1651.0], [55.2, 1652.0], [55.3, 1654.0], [55.4, 1660.0], [55.5, 1660.0], [55.6, 1661.0], [55.7, 1661.0], [55.8, 1662.0], [55.9, 1662.0], [56.0, 1663.0], [56.1, 1664.0], [56.2, 1664.0], [56.3, 1665.0], [56.4, 1665.0], [56.5, 1666.0], [56.6, 1667.0], [56.7, 1667.0], [56.8, 1670.0], [56.9, 1671.0], [57.0, 1671.0], [57.1, 1672.0], [57.2, 1672.0], [57.3, 1673.0], [57.4, 1674.0], [57.5, 1676.0], [57.6, 1677.0], [57.7, 1678.0], [57.8, 1678.0], [57.9, 1678.0], [58.0, 1682.0], [58.1, 1682.0], [58.2, 1684.0], [58.3, 1684.0], [58.4, 1685.0], [58.5, 1685.0], [58.6, 1685.0], [58.7, 1686.0], [58.8, 1687.0], [58.9, 1688.0], [59.0, 1688.0], [59.1, 1690.0], [59.2, 1691.0], [59.3, 1692.0], [59.4, 1693.0], [59.5, 1694.0], [59.6, 1695.0], [59.7, 1695.0], [59.8, 1696.0], [59.9, 1699.0], [60.0, 1699.0], [60.1, 1700.0], [60.2, 1700.0], [60.3, 1701.0], [60.4, 1703.0], [60.5, 1703.0], [60.6, 1704.0], [60.7, 1704.0], [60.8, 1705.0], [60.9, 1707.0], [61.0, 1709.0], [61.1, 1710.0], [61.2, 1710.0], [61.3, 1712.0], [61.4, 1712.0], [61.5, 1715.0], [61.6, 1715.0], [61.7, 1715.0], [61.8, 1716.0], [61.9, 1716.0], [62.0, 1719.0], [62.1, 1719.0], [62.2, 1719.0], [62.3, 1720.0], [62.4, 1724.0], [62.5, 1726.0], [62.6, 1727.0], [62.7, 1728.0], [62.8, 1729.0], [62.9, 1730.0], [63.0, 1731.0], [63.1, 1732.0], [63.2, 1733.0], [63.3, 1734.0], [63.4, 1734.0], [63.5, 1734.0], [63.6, 1735.0], [63.7, 1738.0], [63.8, 1739.0], [63.9, 1740.0], [64.0, 1741.0], [64.1, 1741.0], [64.2, 1742.0], [64.3, 1743.0], [64.4, 1744.0], [64.5, 1744.0], [64.6, 1747.0], [64.7, 1748.0], [64.8, 1748.0], [64.9, 1749.0], [65.0, 1752.0], [65.1, 1753.0], [65.2, 1754.0], [65.3, 1755.0], [65.4, 1756.0], [65.5, 1756.0], [65.6, 1758.0], [65.7, 1758.0], [65.8, 1759.0], [65.9, 1759.0], [66.0, 1760.0], [66.1, 1760.0], [66.2, 1760.0], [66.3, 1762.0], [66.4, 1762.0], [66.5, 1764.0], [66.6, 1764.0], [66.7, 1767.0], [66.8, 1769.0], [66.9, 1771.0], [67.0, 1771.0], [67.1, 1772.0], [67.2, 1774.0], [67.3, 1775.0], [67.4, 1776.0], [67.5, 1777.0], [67.6, 1777.0], [67.7, 1778.0], [67.8, 1779.0], [67.9, 1779.0], [68.0, 1779.0], [68.1, 1780.0], [68.2, 1782.0], [68.3, 1784.0], [68.4, 1784.0], [68.5, 1785.0], [68.6, 1787.0], [68.7, 1789.0], [68.8, 1790.0], [68.9, 1791.0], [69.0, 1792.0], [69.1, 1792.0], [69.2, 1793.0], [69.3, 1794.0], [69.4, 1795.0], [69.5, 1796.0], [69.6, 1798.0], [69.7, 1799.0], [69.8, 1799.0], [69.9, 1800.0], [70.0, 1802.0], [70.1, 1804.0], [70.2, 1805.0], [70.3, 1806.0], [70.4, 1807.0], [70.5, 1807.0], [70.6, 1808.0], [70.7, 1809.0], [70.8, 1810.0], [70.9, 1812.0], [71.0, 1812.0], [71.1, 1814.0], [71.2, 1815.0], [71.3, 1815.0], [71.4, 1818.0], [71.5, 1818.0], [71.6, 1820.0], [71.7, 1821.0], [71.8, 1822.0], [71.9, 1822.0], [72.0, 1823.0], [72.1, 1826.0], [72.2, 1826.0], [72.3, 1827.0], [72.4, 1828.0], [72.5, 1829.0], [72.6, 1830.0], [72.7, 1831.0], [72.8, 1834.0], [72.9, 1836.0], [73.0, 1838.0], [73.1, 1839.0], [73.2, 1841.0], [73.3, 1842.0], [73.4, 1844.0], [73.5, 1844.0], [73.6, 1844.0], [73.7, 1845.0], [73.8, 1846.0], [73.9, 1848.0], [74.0, 1849.0], [74.1, 1851.0], [74.2, 1852.0], [74.3, 1854.0], [74.4, 1855.0], [74.5, 1856.0], [74.6, 1859.0], [74.7, 1860.0], [74.8, 1865.0], [74.9, 1868.0], [75.0, 1868.0], [75.1, 1869.0], [75.2, 1870.0], [75.3, 1871.0], [75.4, 1872.0], [75.5, 1875.0], [75.6, 1875.0], [75.7, 1875.0], [75.8, 1877.0], [75.9, 1880.0], [76.0, 1882.0], [76.1, 1882.0], [76.2, 1883.0], [76.3, 1886.0], [76.4, 1888.0], [76.5, 1891.0], [76.6, 1892.0], [76.7, 1892.0], [76.8, 1893.0], [76.9, 1895.0], [77.0, 1896.0], [77.1, 1897.0], [77.2, 1899.0], [77.3, 1903.0], [77.4, 1905.0], [77.5, 1905.0], [77.6, 1909.0], [77.7, 1911.0], [77.8, 1912.0], [77.9, 1914.0], [78.0, 1914.0], [78.1, 1915.0], [78.2, 1915.0], [78.3, 1916.0], [78.4, 1917.0], [78.5, 1918.0], [78.6, 1920.0], [78.7, 1921.0], [78.8, 1922.0], [78.9, 1923.0], [79.0, 1926.0], [79.1, 1927.0], [79.2, 1928.0], [79.3, 1929.0], [79.4, 1930.0], [79.5, 1931.0], [79.6, 1935.0], [79.7, 1936.0], [79.8, 1938.0], [79.9, 1939.0], [80.0, 1939.0], [80.1, 1940.0], [80.2, 1940.0], [80.3, 1941.0], [80.4, 1941.0], [80.5, 1943.0], [80.6, 1945.0], [80.7, 1946.0], [80.8, 1948.0], [80.9, 1949.0], [81.0, 1949.0], [81.1, 1951.0], [81.2, 1952.0], [81.3, 1953.0], [81.4, 1959.0], [81.5, 1959.0], [81.6, 1963.0], [81.7, 1963.0], [81.8, 1966.0], [81.9, 1967.0], [82.0, 1970.0], [82.1, 1972.0], [82.2, 1972.0], [82.3, 1974.0], [82.4, 1975.0], [82.5, 1976.0], [82.6, 1977.0], [82.7, 1978.0], [82.8, 1981.0], [82.9, 1982.0], [83.0, 1983.0], [83.1, 1983.0], [83.2, 1985.0], [83.3, 1986.0], [83.4, 1988.0], [83.5, 1988.0], [83.6, 1990.0], [83.7, 1992.0], [83.8, 1994.0], [83.9, 1995.0], [84.0, 1997.0], [84.1, 1999.0], [84.2, 2002.0], [84.3, 2006.0], [84.4, 2010.0], [84.5, 2010.0], [84.6, 2011.0], [84.7, 2013.0], [84.8, 2014.0], [84.9, 2016.0], [85.0, 2019.0], [85.1, 2020.0], [85.2, 2023.0], [85.3, 2027.0], [85.4, 2028.0], [85.5, 2028.0], [85.6, 2029.0], [85.7, 2029.0], [85.8, 2032.0], [85.9, 2034.0], [86.0, 2036.0], [86.1, 2037.0], [86.2, 2039.0], [86.3, 2042.0], [86.4, 2044.0], [86.5, 2044.0], [86.6, 2047.0], [86.7, 2047.0], [86.8, 2049.0], [86.9, 2050.0], [87.0, 2050.0], [87.1, 2052.0], [87.2, 2053.0], [87.3, 2058.0], [87.4, 2058.0], [87.5, 2062.0], [87.6, 2067.0], [87.7, 2070.0], [87.8, 2074.0], [87.9, 2077.0], [88.0, 2078.0], [88.1, 2078.0], [88.2, 2081.0], [88.3, 2084.0], [88.4, 2086.0], [88.5, 2088.0], [88.6, 2089.0], [88.7, 2090.0], [88.8, 2090.0], [88.9, 2091.0], [89.0, 2097.0], [89.1, 2099.0], [89.2, 2104.0], [89.3, 2106.0], [89.4, 2107.0], [89.5, 2109.0], [89.6, 2112.0], [89.7, 2115.0], [89.8, 2116.0], [89.9, 2118.0], [90.0, 2120.0], [90.1, 2123.0], [90.2, 2123.0], [90.3, 2126.0], [90.4, 2128.0], [90.5, 2133.0], [90.6, 2134.0], [90.7, 2134.0], [90.8, 2140.0], [90.9, 2140.0], [91.0, 2146.0], [91.1, 2147.0], [91.2, 2154.0], [91.3, 2160.0], [91.4, 2166.0], [91.5, 2168.0], [91.6, 2169.0], [91.7, 2173.0], [91.8, 2175.0], [91.9, 2176.0], [92.0, 2176.0], [92.1, 2177.0], [92.2, 2180.0], [92.3, 2183.0], [92.4, 2183.0], [92.5, 2185.0], [92.6, 2190.0], [92.7, 2199.0], [92.8, 2201.0], [92.9, 2206.0], [93.0, 2207.0], [93.1, 2211.0], [93.2, 2217.0], [93.3, 2222.0], [93.4, 2225.0], [93.5, 2229.0], [93.6, 2239.0], [93.7, 2239.0], [93.8, 2245.0], [93.9, 2246.0], [94.0, 2249.0], [94.1, 2256.0], [94.2, 2257.0], [94.3, 2273.0], [94.4, 2275.0], [94.5, 2281.0], [94.6, 2284.0], [94.7, 2286.0], [94.8, 2290.0], [94.9, 2292.0], [95.0, 2297.0], [95.1, 2298.0], [95.2, 2302.0], [95.3, 2303.0], [95.4, 2304.0], [95.5, 2314.0], [95.6, 2319.0], [95.7, 2325.0], [95.8, 2329.0], [95.9, 2333.0], [96.0, 2336.0], [96.1, 2341.0], [96.2, 2350.0], [96.3, 2352.0], [96.4, 2360.0], [96.5, 2360.0], [96.6, 2367.0], [96.7, 2372.0], [96.8, 2379.0], [96.9, 2380.0], [97.0, 2382.0], [97.1, 2387.0], [97.2, 2392.0], [97.3, 2397.0], [97.4, 2400.0], [97.5, 2402.0], [97.6, 2409.0], [97.7, 2414.0], [97.8, 2419.0], [97.9, 2419.0], [98.0, 2428.0], [98.1, 2435.0], [98.2, 2440.0], [98.3, 2444.0], [98.4, 2461.0], [98.5, 2477.0], [98.6, 2487.0], [98.7, 2516.0], [98.8, 2532.0], [98.9, 2551.0], [99.0, 2580.0], [99.1, 2638.0], [99.2, 2671.0], [99.3, 2692.0], [99.4, 2790.0], [99.5, 2807.0], [99.6, 2861.0], [99.7, 2894.0], [99.8, 2930.0], [99.9, 3035.0], [100.0, 3272.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 221.0, "series": [{"data": [[600.0, 1.0], [700.0, 24.0], [800.0, 30.0], [900.0, 37.0], [1000.0, 79.0], [1100.0, 82.0], [1200.0, 117.0], [1300.0, 132.0], [1400.0, 171.0], [1500.0, 221.0], [1600.0, 217.0], [1700.0, 182.0], [1800.0, 138.0], [1900.0, 128.0], [2000.0, 93.0], [2100.0, 67.0], [2200.0, 45.0], [2300.0, 41.0], [2400.0, 23.0], [2500.0, 8.0], [2600.0, 5.0], [2800.0, 6.0], [2700.0, 2.0], [2900.0, 2.0], [3000.0, 2.0], [3200.0, 1.0], [500.0, 4.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 677.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1181.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 677.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1181.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 48.91967509025272, "minX": 1.6155696E12, "maxY": 50.0, "series": [{"data": [[1.6155696E12, 50.0], [1.61556966E12, 48.91967509025272]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61556966E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 996.0, "minX": 1.0, "maxY": 2319.0, "series": [{"data": [[2.0, 1115.0], [35.0, 1070.0], [34.0, 1194.2], [37.0, 1883.0], [39.0, 2319.0], [38.0, 1126.0], [41.0, 1135.0], [40.0, 1477.0], [42.0, 1328.0], [45.0, 1844.0], [44.0, 1639.5], [48.0, 1960.6666666666667], [3.0, 1065.0], [50.0, 1630.1839779005538], [4.0, 1096.0], [5.0, 1004.0], [6.0, 1010.0], [7.0, 1123.0], [8.0, 1086.0], [10.0, 1165.0], [11.0, 1098.0], [12.0, 996.0], [16.0, 1099.75], [1.0, 1038.0], [18.0, 1128.0], [19.0, 1284.0], [20.0, 1529.0], [21.0, 1343.0], [22.0, 1274.0], [24.0, 1182.0], [27.0, 1283.3333333333333], [28.0, 1260.0], [29.0, 1100.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[49.3557588805167, 1621.8783638320788]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1475.0, "minX": 1.6155696E12, "maxY": 394060.2, "series": [{"data": [[1.6155696E12, 266737.5], [1.61556966E12, 394060.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6155696E12, 1475.0], [1.61556966E12, 2179.0666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61556966E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1539.2346666666672, "minX": 1.6155696E12, "maxY": 1677.8194945848384, "series": [{"data": [[1.6155696E12, 1539.2346666666672], [1.61556966E12, 1677.8194945848384]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61556966E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1538.6386666666658, "minX": 1.6155696E12, "maxY": 1677.392599277977, "series": [{"data": [[1.6155696E12, 1538.6386666666658], [1.61556966E12, 1677.392599277977]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61556966E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.6155696E12, "maxY": 26.458666666666694, "series": [{"data": [[1.6155696E12, 26.458666666666694], [1.61556966E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61556966E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 541.0, "minX": 1.6155696E12, "maxY": 3272.0, "series": [{"data": [[1.6155696E12, 2915.0], [1.61556966E12, 3272.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6155696E12, 2027.9], [1.61556966E12, 2183.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6155696E12, 2532.49], [1.61556966E12, 2639.82]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6155696E12, 2151.7], [1.61556966E12, 2335.55]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6155696E12, 541.0], [1.61556966E12, 731.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6155696E12, 1563.0], [1.61556966E12, 1665.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61556966E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 893.5, "minX": 2.0, "maxY": 2261.0, "series": [{"data": [[2.0, 2061.5], [32.0, 1669.5], [34.0, 1664.5], [35.0, 1591.0], [39.0, 1657.0], [38.0, 1801.5], [40.0, 1610.5], [41.0, 1565.0], [43.0, 1807.0], [44.0, 1811.5], [47.0, 1509.0], [46.0, 1724.0], [49.0, 1514.0], [48.0, 1275.5], [51.0, 1526.0], [56.0, 979.0], [60.0, 893.5], [6.0, 2261.0], [7.0, 1988.0], [8.0, 1872.0], [9.0, 1498.0], [11.0, 1229.0], [12.0, 1756.5], [14.0, 1963.0], [15.0, 1833.0], [16.0, 1782.0], [18.0, 1609.5], [21.0, 1794.0], [24.0, 1687.5], [26.0, 1551.0], [27.0, 1709.0], [28.0, 1388.5], [29.0, 1664.0], [30.0, 1783.5], [31.0, 1761.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 60.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 893.0, "minX": 2.0, "maxY": 2261.0, "series": [{"data": [[2.0, 2060.5], [32.0, 1669.0], [34.0, 1664.5], [35.0, 1591.0], [39.0, 1656.5], [38.0, 1801.0], [40.0, 1609.5], [41.0, 1565.0], [43.0, 1807.0], [44.0, 1810.5], [47.0, 1508.0], [46.0, 1723.5], [49.0, 1514.0], [48.0, 1275.0], [51.0, 1526.0], [56.0, 979.0], [60.0, 893.0], [6.0, 2261.0], [7.0, 1988.0], [8.0, 1872.0], [9.0, 1498.0], [11.0, 1229.0], [12.0, 1756.5], [14.0, 1962.5], [15.0, 1832.0], [16.0, 1781.5], [18.0, 1609.0], [21.0, 1793.5], [24.0, 1687.0], [26.0, 1550.5], [27.0, 1708.0], [28.0, 1388.0], [29.0, 1663.0], [30.0, 1783.0], [31.0, 1760.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 60.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 13.333333333333334, "minX": 1.6155696E12, "maxY": 17.633333333333333, "series": [{"data": [[1.6155696E12, 13.333333333333334], [1.61556966E12, 17.633333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61556966E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 12.5, "minX": 1.6155696E12, "maxY": 18.466666666666665, "series": [{"data": [[1.6155696E12, 12.5], [1.61556966E12, 18.466666666666665]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61556966E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 12.5, "minX": 1.6155696E12, "maxY": 18.466666666666665, "series": [{"data": [[1.6155696E12, 12.5], [1.61556966E12, 18.466666666666665]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61556966E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 12.5, "minX": 1.6155696E12, "maxY": 18.466666666666665, "series": [{"data": [[1.6155696E12, 12.5], [1.61556966E12, 18.466666666666665]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61556966E12, "title": "Total Transactions Per Second"}},
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

