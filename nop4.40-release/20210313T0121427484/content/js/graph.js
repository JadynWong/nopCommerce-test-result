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
        data: {"result": {"minY": 540.0, "minX": 0.0, "maxY": 3330.0, "series": [{"data": [[0.0, 540.0], [0.1, 548.0], [0.2, 565.0], [0.3, 616.0], [0.4, 634.0], [0.5, 643.0], [0.6, 647.0], [0.7, 663.0], [0.8, 668.0], [0.9, 690.0], [1.0, 721.0], [1.1, 732.0], [1.2, 732.0], [1.3, 756.0], [1.4, 790.0], [1.5, 795.0], [1.6, 796.0], [1.7, 802.0], [1.8, 813.0], [1.9, 822.0], [2.0, 825.0], [2.1, 835.0], [2.2, 841.0], [2.3, 847.0], [2.4, 847.0], [2.5, 857.0], [2.6, 866.0], [2.7, 867.0], [2.8, 867.0], [2.9, 871.0], [3.0, 882.0], [3.1, 886.0], [3.2, 899.0], [3.3, 902.0], [3.4, 903.0], [3.5, 913.0], [3.6, 920.0], [3.7, 929.0], [3.8, 940.0], [3.9, 947.0], [4.0, 951.0], [4.1, 961.0], [4.2, 965.0], [4.3, 968.0], [4.4, 973.0], [4.5, 979.0], [4.6, 992.0], [4.7, 994.0], [4.8, 998.0], [4.9, 1005.0], [5.0, 1015.0], [5.1, 1021.0], [5.2, 1025.0], [5.3, 1030.0], [5.4, 1030.0], [5.5, 1030.0], [5.6, 1037.0], [5.7, 1039.0], [5.8, 1042.0], [5.9, 1050.0], [6.0, 1060.0], [6.1, 1060.0], [6.2, 1068.0], [6.3, 1075.0], [6.4, 1083.0], [6.5, 1088.0], [6.6, 1088.0], [6.7, 1092.0], [6.8, 1095.0], [6.9, 1100.0], [7.0, 1101.0], [7.1, 1107.0], [7.2, 1108.0], [7.3, 1112.0], [7.4, 1114.0], [7.5, 1121.0], [7.6, 1130.0], [7.7, 1132.0], [7.8, 1133.0], [7.9, 1135.0], [8.0, 1135.0], [8.1, 1140.0], [8.2, 1142.0], [8.3, 1149.0], [8.4, 1152.0], [8.5, 1153.0], [8.6, 1154.0], [8.7, 1155.0], [8.8, 1163.0], [8.9, 1169.0], [9.0, 1171.0], [9.1, 1175.0], [9.2, 1176.0], [9.3, 1177.0], [9.4, 1178.0], [9.5, 1181.0], [9.6, 1185.0], [9.7, 1185.0], [9.8, 1188.0], [9.9, 1193.0], [10.0, 1194.0], [10.1, 1195.0], [10.2, 1196.0], [10.3, 1201.0], [10.4, 1203.0], [10.5, 1208.0], [10.6, 1212.0], [10.7, 1218.0], [10.8, 1220.0], [10.9, 1223.0], [11.0, 1226.0], [11.1, 1228.0], [11.2, 1232.0], [11.3, 1233.0], [11.4, 1234.0], [11.5, 1237.0], [11.6, 1239.0], [11.7, 1243.0], [11.8, 1243.0], [11.9, 1246.0], [12.0, 1249.0], [12.1, 1251.0], [12.2, 1254.0], [12.3, 1258.0], [12.4, 1259.0], [12.5, 1261.0], [12.6, 1264.0], [12.7, 1268.0], [12.8, 1270.0], [12.9, 1271.0], [13.0, 1273.0], [13.1, 1281.0], [13.2, 1283.0], [13.3, 1284.0], [13.4, 1287.0], [13.5, 1290.0], [13.6, 1290.0], [13.7, 1293.0], [13.8, 1295.0], [13.9, 1297.0], [14.0, 1298.0], [14.1, 1302.0], [14.2, 1304.0], [14.3, 1309.0], [14.4, 1311.0], [14.5, 1314.0], [14.6, 1317.0], [14.7, 1318.0], [14.8, 1318.0], [14.9, 1320.0], [15.0, 1320.0], [15.1, 1324.0], [15.2, 1324.0], [15.3, 1326.0], [15.4, 1330.0], [15.5, 1333.0], [15.6, 1333.0], [15.7, 1334.0], [15.8, 1336.0], [15.9, 1337.0], [16.0, 1338.0], [16.1, 1340.0], [16.2, 1341.0], [16.3, 1342.0], [16.4, 1344.0], [16.5, 1346.0], [16.6, 1347.0], [16.7, 1347.0], [16.8, 1354.0], [16.9, 1355.0], [17.0, 1356.0], [17.1, 1356.0], [17.2, 1357.0], [17.3, 1358.0], [17.4, 1360.0], [17.5, 1361.0], [17.6, 1362.0], [17.7, 1363.0], [17.8, 1366.0], [17.9, 1366.0], [18.0, 1371.0], [18.1, 1372.0], [18.2, 1375.0], [18.3, 1376.0], [18.4, 1379.0], [18.5, 1381.0], [18.6, 1381.0], [18.7, 1381.0], [18.8, 1382.0], [18.9, 1382.0], [19.0, 1383.0], [19.1, 1387.0], [19.2, 1389.0], [19.3, 1390.0], [19.4, 1393.0], [19.5, 1395.0], [19.6, 1397.0], [19.7, 1398.0], [19.8, 1399.0], [19.9, 1402.0], [20.0, 1404.0], [20.1, 1406.0], [20.2, 1406.0], [20.3, 1407.0], [20.4, 1409.0], [20.5, 1410.0], [20.6, 1410.0], [20.7, 1413.0], [20.8, 1415.0], [20.9, 1416.0], [21.0, 1416.0], [21.1, 1419.0], [21.2, 1419.0], [21.3, 1422.0], [21.4, 1423.0], [21.5, 1423.0], [21.6, 1425.0], [21.7, 1426.0], [21.8, 1426.0], [21.9, 1428.0], [22.0, 1428.0], [22.1, 1429.0], [22.2, 1429.0], [22.3, 1430.0], [22.4, 1432.0], [22.5, 1433.0], [22.6, 1434.0], [22.7, 1435.0], [22.8, 1438.0], [22.9, 1439.0], [23.0, 1440.0], [23.1, 1441.0], [23.2, 1442.0], [23.3, 1443.0], [23.4, 1444.0], [23.5, 1445.0], [23.6, 1449.0], [23.7, 1449.0], [23.8, 1450.0], [23.9, 1453.0], [24.0, 1455.0], [24.1, 1456.0], [24.2, 1458.0], [24.3, 1460.0], [24.4, 1462.0], [24.5, 1463.0], [24.6, 1466.0], [24.7, 1469.0], [24.8, 1470.0], [24.9, 1472.0], [25.0, 1473.0], [25.1, 1476.0], [25.2, 1476.0], [25.3, 1478.0], [25.4, 1480.0], [25.5, 1480.0], [25.6, 1481.0], [25.7, 1482.0], [25.8, 1484.0], [25.9, 1486.0], [26.0, 1486.0], [26.1, 1489.0], [26.2, 1490.0], [26.3, 1490.0], [26.4, 1491.0], [26.5, 1491.0], [26.6, 1493.0], [26.7, 1494.0], [26.8, 1494.0], [26.9, 1495.0], [27.0, 1496.0], [27.1, 1497.0], [27.2, 1497.0], [27.3, 1498.0], [27.4, 1499.0], [27.5, 1501.0], [27.6, 1502.0], [27.7, 1504.0], [27.8, 1505.0], [27.9, 1506.0], [28.0, 1506.0], [28.1, 1510.0], [28.2, 1510.0], [28.3, 1511.0], [28.4, 1513.0], [28.5, 1513.0], [28.6, 1513.0], [28.7, 1514.0], [28.8, 1515.0], [28.9, 1517.0], [29.0, 1518.0], [29.1, 1519.0], [29.2, 1520.0], [29.3, 1521.0], [29.4, 1524.0], [29.5, 1526.0], [29.6, 1526.0], [29.7, 1528.0], [29.8, 1529.0], [29.9, 1530.0], [30.0, 1531.0], [30.1, 1532.0], [30.2, 1532.0], [30.3, 1534.0], [30.4, 1535.0], [30.5, 1537.0], [30.6, 1537.0], [30.7, 1538.0], [30.8, 1539.0], [30.9, 1544.0], [31.0, 1544.0], [31.1, 1545.0], [31.2, 1546.0], [31.3, 1547.0], [31.4, 1547.0], [31.5, 1548.0], [31.6, 1550.0], [31.7, 1552.0], [31.8, 1552.0], [31.9, 1555.0], [32.0, 1556.0], [32.1, 1559.0], [32.2, 1559.0], [32.3, 1561.0], [32.4, 1562.0], [32.5, 1564.0], [32.6, 1564.0], [32.7, 1566.0], [32.8, 1568.0], [32.9, 1568.0], [33.0, 1569.0], [33.1, 1569.0], [33.2, 1570.0], [33.3, 1573.0], [33.4, 1573.0], [33.5, 1574.0], [33.6, 1575.0], [33.7, 1577.0], [33.8, 1577.0], [33.9, 1577.0], [34.0, 1577.0], [34.1, 1578.0], [34.2, 1578.0], [34.3, 1579.0], [34.4, 1579.0], [34.5, 1579.0], [34.6, 1580.0], [34.7, 1580.0], [34.8, 1581.0], [34.9, 1582.0], [35.0, 1583.0], [35.1, 1583.0], [35.2, 1585.0], [35.3, 1585.0], [35.4, 1588.0], [35.5, 1590.0], [35.6, 1591.0], [35.7, 1592.0], [35.8, 1593.0], [35.9, 1594.0], [36.0, 1595.0], [36.1, 1595.0], [36.2, 1595.0], [36.3, 1597.0], [36.4, 1599.0], [36.5, 1600.0], [36.6, 1601.0], [36.7, 1601.0], [36.8, 1602.0], [36.9, 1602.0], [37.0, 1603.0], [37.1, 1604.0], [37.2, 1604.0], [37.3, 1605.0], [37.4, 1607.0], [37.5, 1607.0], [37.6, 1608.0], [37.7, 1609.0], [37.8, 1609.0], [37.9, 1610.0], [38.0, 1611.0], [38.1, 1613.0], [38.2, 1615.0], [38.3, 1615.0], [38.4, 1616.0], [38.5, 1618.0], [38.6, 1618.0], [38.7, 1620.0], [38.8, 1621.0], [38.9, 1623.0], [39.0, 1623.0], [39.1, 1625.0], [39.2, 1625.0], [39.3, 1626.0], [39.4, 1627.0], [39.5, 1629.0], [39.6, 1629.0], [39.7, 1630.0], [39.8, 1630.0], [39.9, 1631.0], [40.0, 1631.0], [40.1, 1632.0], [40.2, 1632.0], [40.3, 1633.0], [40.4, 1634.0], [40.5, 1634.0], [40.6, 1635.0], [40.7, 1636.0], [40.8, 1638.0], [40.9, 1638.0], [41.0, 1639.0], [41.1, 1639.0], [41.2, 1639.0], [41.3, 1640.0], [41.4, 1642.0], [41.5, 1642.0], [41.6, 1645.0], [41.7, 1645.0], [41.8, 1647.0], [41.9, 1647.0], [42.0, 1648.0], [42.1, 1649.0], [42.2, 1651.0], [42.3, 1652.0], [42.4, 1653.0], [42.5, 1655.0], [42.6, 1656.0], [42.7, 1656.0], [42.8, 1657.0], [42.9, 1658.0], [43.0, 1659.0], [43.1, 1659.0], [43.2, 1660.0], [43.3, 1660.0], [43.4, 1662.0], [43.5, 1662.0], [43.6, 1664.0], [43.7, 1666.0], [43.8, 1667.0], [43.9, 1668.0], [44.0, 1671.0], [44.1, 1671.0], [44.2, 1673.0], [44.3, 1674.0], [44.4, 1674.0], [44.5, 1676.0], [44.6, 1677.0], [44.7, 1677.0], [44.8, 1679.0], [44.9, 1680.0], [45.0, 1681.0], [45.1, 1682.0], [45.2, 1683.0], [45.3, 1684.0], [45.4, 1684.0], [45.5, 1685.0], [45.6, 1685.0], [45.7, 1686.0], [45.8, 1686.0], [45.9, 1688.0], [46.0, 1688.0], [46.1, 1689.0], [46.2, 1689.0], [46.3, 1691.0], [46.4, 1691.0], [46.5, 1692.0], [46.6, 1693.0], [46.7, 1694.0], [46.8, 1696.0], [46.9, 1697.0], [47.0, 1699.0], [47.1, 1701.0], [47.2, 1702.0], [47.3, 1702.0], [47.4, 1702.0], [47.5, 1703.0], [47.6, 1704.0], [47.7, 1704.0], [47.8, 1706.0], [47.9, 1706.0], [48.0, 1707.0], [48.1, 1707.0], [48.2, 1709.0], [48.3, 1710.0], [48.4, 1711.0], [48.5, 1712.0], [48.6, 1713.0], [48.7, 1713.0], [48.8, 1715.0], [48.9, 1715.0], [49.0, 1716.0], [49.1, 1716.0], [49.2, 1718.0], [49.3, 1718.0], [49.4, 1719.0], [49.5, 1721.0], [49.6, 1722.0], [49.7, 1723.0], [49.8, 1723.0], [49.9, 1725.0], [50.0, 1725.0], [50.1, 1726.0], [50.2, 1729.0], [50.3, 1730.0], [50.4, 1730.0], [50.5, 1731.0], [50.6, 1732.0], [50.7, 1734.0], [50.8, 1734.0], [50.9, 1736.0], [51.0, 1738.0], [51.1, 1739.0], [51.2, 1740.0], [51.3, 1741.0], [51.4, 1742.0], [51.5, 1743.0], [51.6, 1743.0], [51.7, 1744.0], [51.8, 1744.0], [51.9, 1745.0], [52.0, 1746.0], [52.1, 1746.0], [52.2, 1747.0], [52.3, 1747.0], [52.4, 1747.0], [52.5, 1749.0], [52.6, 1750.0], [52.7, 1751.0], [52.8, 1751.0], [52.9, 1752.0], [53.0, 1754.0], [53.1, 1757.0], [53.2, 1757.0], [53.3, 1760.0], [53.4, 1760.0], [53.5, 1762.0], [53.6, 1765.0], [53.7, 1766.0], [53.8, 1768.0], [53.9, 1768.0], [54.0, 1768.0], [54.1, 1769.0], [54.2, 1769.0], [54.3, 1770.0], [54.4, 1770.0], [54.5, 1771.0], [54.6, 1772.0], [54.7, 1772.0], [54.8, 1772.0], [54.9, 1773.0], [55.0, 1775.0], [55.1, 1777.0], [55.2, 1780.0], [55.3, 1780.0], [55.4, 1781.0], [55.5, 1781.0], [55.6, 1781.0], [55.7, 1781.0], [55.8, 1782.0], [55.9, 1782.0], [56.0, 1784.0], [56.1, 1784.0], [56.2, 1785.0], [56.3, 1785.0], [56.4, 1786.0], [56.5, 1787.0], [56.6, 1790.0], [56.7, 1790.0], [56.8, 1792.0], [56.9, 1793.0], [57.0, 1794.0], [57.1, 1794.0], [57.2, 1795.0], [57.3, 1795.0], [57.4, 1796.0], [57.5, 1797.0], [57.6, 1797.0], [57.7, 1799.0], [57.8, 1799.0], [57.9, 1800.0], [58.0, 1802.0], [58.1, 1804.0], [58.2, 1804.0], [58.3, 1805.0], [58.4, 1806.0], [58.5, 1806.0], [58.6, 1806.0], [58.7, 1808.0], [58.8, 1808.0], [58.9, 1809.0], [59.0, 1809.0], [59.1, 1810.0], [59.2, 1811.0], [59.3, 1812.0], [59.4, 1813.0], [59.5, 1815.0], [59.6, 1815.0], [59.7, 1816.0], [59.8, 1816.0], [59.9, 1819.0], [60.0, 1819.0], [60.1, 1820.0], [60.2, 1821.0], [60.3, 1821.0], [60.4, 1823.0], [60.5, 1824.0], [60.6, 1825.0], [60.7, 1827.0], [60.8, 1829.0], [60.9, 1830.0], [61.0, 1831.0], [61.1, 1834.0], [61.2, 1834.0], [61.3, 1836.0], [61.4, 1836.0], [61.5, 1837.0], [61.6, 1838.0], [61.7, 1838.0], [61.8, 1838.0], [61.9, 1841.0], [62.0, 1841.0], [62.1, 1841.0], [62.2, 1841.0], [62.3, 1842.0], [62.4, 1843.0], [62.5, 1843.0], [62.6, 1844.0], [62.7, 1845.0], [62.8, 1845.0], [62.9, 1845.0], [63.0, 1847.0], [63.1, 1849.0], [63.2, 1850.0], [63.3, 1850.0], [63.4, 1851.0], [63.5, 1851.0], [63.6, 1851.0], [63.7, 1853.0], [63.8, 1853.0], [63.9, 1853.0], [64.0, 1854.0], [64.1, 1856.0], [64.2, 1857.0], [64.3, 1858.0], [64.4, 1859.0], [64.5, 1859.0], [64.6, 1860.0], [64.7, 1861.0], [64.8, 1861.0], [64.9, 1861.0], [65.0, 1862.0], [65.1, 1864.0], [65.2, 1866.0], [65.3, 1867.0], [65.4, 1868.0], [65.5, 1870.0], [65.6, 1872.0], [65.7, 1872.0], [65.8, 1874.0], [65.9, 1874.0], [66.0, 1875.0], [66.1, 1875.0], [66.2, 1875.0], [66.3, 1876.0], [66.4, 1879.0], [66.5, 1879.0], [66.6, 1880.0], [66.7, 1881.0], [66.8, 1882.0], [66.9, 1884.0], [67.0, 1885.0], [67.1, 1886.0], [67.2, 1887.0], [67.3, 1888.0], [67.4, 1888.0], [67.5, 1889.0], [67.6, 1889.0], [67.7, 1891.0], [67.8, 1892.0], [67.9, 1892.0], [68.0, 1893.0], [68.1, 1893.0], [68.2, 1894.0], [68.3, 1894.0], [68.4, 1895.0], [68.5, 1896.0], [68.6, 1897.0], [68.7, 1899.0], [68.8, 1900.0], [68.9, 1901.0], [69.0, 1901.0], [69.1, 1902.0], [69.2, 1902.0], [69.3, 1903.0], [69.4, 1903.0], [69.5, 1905.0], [69.6, 1906.0], [69.7, 1907.0], [69.8, 1907.0], [69.9, 1909.0], [70.0, 1915.0], [70.1, 1915.0], [70.2, 1915.0], [70.3, 1918.0], [70.4, 1918.0], [70.5, 1919.0], [70.6, 1919.0], [70.7, 1920.0], [70.8, 1921.0], [70.9, 1924.0], [71.0, 1924.0], [71.1, 1926.0], [71.2, 1927.0], [71.3, 1929.0], [71.4, 1930.0], [71.5, 1932.0], [71.6, 1934.0], [71.7, 1937.0], [71.8, 1938.0], [71.9, 1938.0], [72.0, 1939.0], [72.1, 1939.0], [72.2, 1940.0], [72.3, 1942.0], [72.4, 1942.0], [72.5, 1942.0], [72.6, 1944.0], [72.7, 1945.0], [72.8, 1946.0], [72.9, 1946.0], [73.0, 1947.0], [73.1, 1948.0], [73.2, 1948.0], [73.3, 1948.0], [73.4, 1949.0], [73.5, 1951.0], [73.6, 1953.0], [73.7, 1953.0], [73.8, 1954.0], [73.9, 1955.0], [74.0, 1960.0], [74.1, 1960.0], [74.2, 1961.0], [74.3, 1963.0], [74.4, 1963.0], [74.5, 1963.0], [74.6, 1964.0], [74.7, 1964.0], [74.8, 1967.0], [74.9, 1967.0], [75.0, 1967.0], [75.1, 1969.0], [75.2, 1969.0], [75.3, 1969.0], [75.4, 1970.0], [75.5, 1971.0], [75.6, 1971.0], [75.7, 1972.0], [75.8, 1973.0], [75.9, 1975.0], [76.0, 1975.0], [76.1, 1977.0], [76.2, 1981.0], [76.3, 1982.0], [76.4, 1982.0], [76.5, 1982.0], [76.6, 1984.0], [76.7, 1985.0], [76.8, 1986.0], [76.9, 1986.0], [77.0, 1988.0], [77.1, 1988.0], [77.2, 1988.0], [77.3, 1989.0], [77.4, 1990.0], [77.5, 1992.0], [77.6, 1994.0], [77.7, 1995.0], [77.8, 1999.0], [77.9, 2001.0], [78.0, 2002.0], [78.1, 2005.0], [78.2, 2007.0], [78.3, 2008.0], [78.4, 2008.0], [78.5, 2011.0], [78.6, 2016.0], [78.7, 2016.0], [78.8, 2017.0], [78.9, 2018.0], [79.0, 2020.0], [79.1, 2020.0], [79.2, 2021.0], [79.3, 2021.0], [79.4, 2023.0], [79.5, 2023.0], [79.6, 2026.0], [79.7, 2027.0], [79.8, 2030.0], [79.9, 2031.0], [80.0, 2032.0], [80.1, 2032.0], [80.2, 2034.0], [80.3, 2034.0], [80.4, 2035.0], [80.5, 2035.0], [80.6, 2040.0], [80.7, 2040.0], [80.8, 2043.0], [80.9, 2044.0], [81.0, 2046.0], [81.1, 2047.0], [81.2, 2048.0], [81.3, 2049.0], [81.4, 2050.0], [81.5, 2053.0], [81.6, 2055.0], [81.7, 2056.0], [81.8, 2056.0], [81.9, 2057.0], [82.0, 2059.0], [82.1, 2061.0], [82.2, 2061.0], [82.3, 2063.0], [82.4, 2065.0], [82.5, 2067.0], [82.6, 2068.0], [82.7, 2069.0], [82.8, 2071.0], [82.9, 2072.0], [83.0, 2073.0], [83.1, 2074.0], [83.2, 2075.0], [83.3, 2077.0], [83.4, 2078.0], [83.5, 2079.0], [83.6, 2080.0], [83.7, 2081.0], [83.8, 2082.0], [83.9, 2083.0], [84.0, 2085.0], [84.1, 2086.0], [84.2, 2087.0], [84.3, 2089.0], [84.4, 2091.0], [84.5, 2092.0], [84.6, 2093.0], [84.7, 2094.0], [84.8, 2095.0], [84.9, 2097.0], [85.0, 2100.0], [85.1, 2104.0], [85.2, 2105.0], [85.3, 2105.0], [85.4, 2110.0], [85.5, 2111.0], [85.6, 2112.0], [85.7, 2112.0], [85.8, 2113.0], [85.9, 2114.0], [86.0, 2114.0], [86.1, 2115.0], [86.2, 2117.0], [86.3, 2118.0], [86.4, 2121.0], [86.5, 2122.0], [86.6, 2126.0], [86.7, 2127.0], [86.8, 2129.0], [86.9, 2129.0], [87.0, 2130.0], [87.1, 2134.0], [87.2, 2135.0], [87.3, 2136.0], [87.4, 2139.0], [87.5, 2140.0], [87.6, 2140.0], [87.7, 2141.0], [87.8, 2142.0], [87.9, 2143.0], [88.0, 2143.0], [88.1, 2150.0], [88.2, 2152.0], [88.3, 2156.0], [88.4, 2157.0], [88.5, 2159.0], [88.6, 2164.0], [88.7, 2167.0], [88.8, 2169.0], [88.9, 2171.0], [89.0, 2173.0], [89.1, 2174.0], [89.2, 2174.0], [89.3, 2175.0], [89.4, 2177.0], [89.5, 2183.0], [89.6, 2185.0], [89.7, 2186.0], [89.8, 2189.0], [89.9, 2191.0], [90.0, 2192.0], [90.1, 2193.0], [90.2, 2195.0], [90.3, 2198.0], [90.4, 2198.0], [90.5, 2199.0], [90.6, 2200.0], [90.7, 2204.0], [90.8, 2206.0], [90.9, 2208.0], [91.0, 2212.0], [91.1, 2213.0], [91.2, 2219.0], [91.3, 2222.0], [91.4, 2230.0], [91.5, 2230.0], [91.6, 2233.0], [91.7, 2241.0], [91.8, 2243.0], [91.9, 2245.0], [92.0, 2249.0], [92.1, 2251.0], [92.2, 2257.0], [92.3, 2257.0], [92.4, 2265.0], [92.5, 2274.0], [92.6, 2278.0], [92.7, 2282.0], [92.8, 2282.0], [92.9, 2288.0], [93.0, 2292.0], [93.1, 2296.0], [93.2, 2306.0], [93.3, 2312.0], [93.4, 2320.0], [93.5, 2323.0], [93.6, 2328.0], [93.7, 2332.0], [93.8, 2333.0], [93.9, 2336.0], [94.0, 2343.0], [94.1, 2345.0], [94.2, 2346.0], [94.3, 2348.0], [94.4, 2353.0], [94.5, 2360.0], [94.6, 2367.0], [94.7, 2380.0], [94.8, 2385.0], [94.9, 2392.0], [95.0, 2396.0], [95.1, 2398.0], [95.2, 2399.0], [95.3, 2405.0], [95.4, 2433.0], [95.5, 2443.0], [95.6, 2448.0], [95.7, 2455.0], [95.8, 2456.0], [95.9, 2487.0], [96.0, 2500.0], [96.1, 2509.0], [96.2, 2511.0], [96.3, 2527.0], [96.4, 2537.0], [96.5, 2545.0], [96.6, 2546.0], [96.7, 2551.0], [96.8, 2560.0], [96.9, 2561.0], [97.0, 2566.0], [97.1, 2571.0], [97.2, 2572.0], [97.3, 2573.0], [97.4, 2577.0], [97.5, 2602.0], [97.6, 2614.0], [97.7, 2616.0], [97.8, 2625.0], [97.9, 2637.0], [98.0, 2643.0], [98.1, 2648.0], [98.2, 2664.0], [98.3, 2667.0], [98.4, 2686.0], [98.5, 2686.0], [98.6, 2720.0], [98.7, 2746.0], [98.8, 2764.0], [98.9, 2779.0], [99.0, 2800.0], [99.1, 2811.0], [99.2, 2822.0], [99.3, 2827.0], [99.4, 2828.0], [99.5, 2852.0], [99.6, 2874.0], [99.7, 2906.0], [99.8, 2926.0], [99.9, 3005.0], [100.0, 3330.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 190.0, "series": [{"data": [[600.0, 12.0], [700.0, 11.0], [800.0, 28.0], [900.0, 28.0], [1000.0, 35.0], [1100.0, 60.0], [1200.0, 65.0], [1300.0, 102.0], [1400.0, 132.0], [1500.0, 157.0], [1600.0, 184.0], [1700.0, 189.0], [1800.0, 190.0], [1900.0, 158.0], [2000.0, 124.0], [2100.0, 98.0], [2200.0, 44.0], [2300.0, 37.0], [2400.0, 13.0], [2500.0, 26.0], [2600.0, 18.0], [2800.0, 12.0], [2700.0, 8.0], [2900.0, 4.0], [3000.0, 1.0], [3300.0, 1.0], [500.0, 5.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 479.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1263.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 479.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1263.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 49.047281323877066, "minX": 1.61556966E12, "maxY": 50.0, "series": [{"data": [[1.61556966E12, 50.0], [1.61556972E12, 49.047281323877066]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61556972E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 557.0, "minX": 1.0, "maxY": 2380.0, "series": [{"data": [[32.0, 1042.0], [34.0, 1537.0], [37.0, 2380.0], [36.0, 1246.5], [39.0, 1184.0], [38.0, 1268.0], [41.0, 1224.0], [40.0, 1213.0], [42.0, 1212.0], [47.0, 2125.0], [46.0, 2033.75], [48.0, 1638.0], [3.0, 686.0], [50.0, 1729.800472255017], [5.0, 839.0], [6.0, 1409.0], [7.0, 557.0], [8.0, 1355.0], [9.0, 1040.0], [11.0, 996.0], [12.0, 1185.0], [13.0, 1155.0], [14.0, 1149.0], [15.0, 1313.0], [1.0, 647.0], [17.0, 1347.0], [18.0, 1232.0], [20.0, 1378.0], [21.0, 1294.0], [23.0, 1257.5], [24.0, 1415.0], [25.0, 1363.0], [26.0, 1444.0], [27.0, 1481.0], [28.0, 1264.0], [30.0, 1395.0], [31.0, 1368.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[49.30597014925373, 1718.563719862227]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 930.2333333333333, "minX": 1.61556966E12, "maxY": 451319.85, "series": [{"data": [[1.61556966E12, 168222.45], [1.61556972E12, 451319.85]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.61556966E12, 930.2333333333333], [1.61556972E12, 2495.7]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61556972E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1555.2367864693435, "minX": 1.61556966E12, "maxY": 1779.4412923561865, "series": [{"data": [[1.61556966E12, 1555.2367864693435], [1.61556972E12, 1779.4412923561865]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61556972E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1554.6849894291752, "minX": 1.61556966E12, "maxY": 1778.981875492515, "series": [{"data": [[1.61556966E12, 1554.6849894291752], [1.61556972E12, 1778.981875492515]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61556972E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.61556966E12, "maxY": 40.012684989429296, "series": [{"data": [[1.61556966E12, 40.012684989429296], [1.61556972E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61556972E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 540.0, "minX": 1.61556966E12, "maxY": 3330.0, "series": [{"data": [[1.61556966E12, 2906.0], [1.61556972E12, 3330.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.61556966E12, 2115.8], [1.61556972E12, 2206.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.61556966E12, 2657.8799999999997], [1.61556972E12, 2822.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.61556966E12, 2314.3999999999996], [1.61556972E12, 2479.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.61556966E12, 540.0], [1.61556972E12, 557.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.61556966E12, 1594.0], [1.61556972E12, 1769.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61556972E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1118.5, "minX": 10.0, "maxY": 2560.0, "series": [{"data": [[32.0, 1746.5], [34.0, 1755.5], [35.0, 1677.0], [37.0, 1658.0], [36.0, 1879.0], [39.0, 1712.0], [38.0, 1704.5], [40.0, 1472.5], [43.0, 1753.0], [45.0, 1179.0], [53.0, 1336.0], [62.0, 1118.5], [10.0, 2020.0], [11.0, 2034.0], [12.0, 1896.0], [13.0, 2088.0], [14.0, 2041.0], [15.0, 1617.5], [16.0, 1835.0], [17.0, 2560.0], [18.0, 1471.5], [19.0, 1793.5], [20.0, 1817.5], [21.0, 1901.5], [23.0, 1984.0], [24.0, 1673.5], [25.0, 1751.0], [26.0, 1953.0], [27.0, 1692.0], [28.0, 1685.0], [29.0, 1905.0], [30.0, 1770.5], [31.0, 2043.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 62.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 1118.0, "minX": 10.0, "maxY": 2559.0, "series": [{"data": [[32.0, 1746.0], [34.0, 1754.5], [35.0, 1677.0], [37.0, 1658.0], [36.0, 1878.5], [39.0, 1711.5], [38.0, 1704.0], [40.0, 1472.0], [43.0, 1752.0], [45.0, 1178.0], [53.0, 1335.0], [62.0, 1118.0], [10.0, 2020.0], [11.0, 2034.0], [12.0, 1895.5], [13.0, 2088.0], [14.0, 2040.5], [15.0, 1617.5], [16.0, 1834.5], [17.0, 2559.0], [18.0, 1470.5], [19.0, 1793.5], [20.0, 1814.0], [21.0, 1901.0], [23.0, 1984.0], [24.0, 1673.0], [25.0, 1751.0], [26.0, 1952.0], [27.0, 1691.0], [28.0, 1685.0], [29.0, 1904.0], [30.0, 1769.5], [31.0, 2042.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 62.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 8.716666666666667, "minX": 1.61556966E12, "maxY": 20.316666666666666, "series": [{"data": [[1.61556966E12, 8.716666666666667], [1.61556972E12, 20.316666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61556972E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 7.883333333333334, "minX": 1.61556966E12, "maxY": 21.15, "series": [{"data": [[1.61556966E12, 7.883333333333334], [1.61556972E12, 21.15]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61556972E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 7.883333333333334, "minX": 1.61556966E12, "maxY": 21.15, "series": [{"data": [[1.61556966E12, 7.883333333333334], [1.61556972E12, 21.15]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61556972E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 7.883333333333334, "minX": 1.61556966E12, "maxY": 21.15, "series": [{"data": [[1.61556966E12, 7.883333333333334], [1.61556972E12, 21.15]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61556972E12, "title": "Total Transactions Per Second"}},
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

