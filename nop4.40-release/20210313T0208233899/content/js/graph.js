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
        data: {"result": {"minY": 489.0, "minX": 0.0, "maxY": 40989.0, "series": [{"data": [[0.0, 489.0], [0.1, 489.0], [0.2, 491.0], [0.3, 491.0], [0.4, 513.0], [0.5, 513.0], [0.6, 594.0], [0.7, 594.0], [0.8, 684.0], [0.9, 684.0], [1.0, 803.0], [1.1, 803.0], [1.2, 813.0], [1.3, 813.0], [1.4, 832.0], [1.5, 832.0], [1.6, 840.0], [1.7, 840.0], [1.8, 858.0], [1.9, 858.0], [2.0, 859.0], [2.1, 859.0], [2.2, 908.0], [2.3, 908.0], [2.4, 933.0], [2.5, 933.0], [2.6, 1003.0], [2.7, 1012.0], [2.8, 1012.0], [2.9, 1039.0], [3.0, 1039.0], [3.1, 1039.0], [3.2, 1039.0], [3.3, 1040.0], [3.4, 1040.0], [3.5, 1059.0], [3.6, 1059.0], [3.7, 1064.0], [3.8, 1064.0], [3.9, 1066.0], [4.0, 1066.0], [4.1, 1075.0], [4.2, 1075.0], [4.3, 1100.0], [4.4, 1100.0], [4.5, 1103.0], [4.6, 1103.0], [4.7, 1107.0], [4.8, 1107.0], [4.9, 1113.0], [5.0, 1113.0], [5.1, 1124.0], [5.2, 1124.0], [5.3, 1136.0], [5.4, 1142.0], [5.5, 1142.0], [5.6, 1151.0], [5.7, 1151.0], [5.8, 1151.0], [5.9, 1151.0], [6.0, 1160.0], [6.1, 1160.0], [6.2, 1163.0], [6.3, 1163.0], [6.4, 1171.0], [6.5, 1171.0], [6.6, 1188.0], [6.7, 1188.0], [6.8, 1209.0], [6.9, 1209.0], [7.0, 1224.0], [7.1, 1224.0], [7.2, 1230.0], [7.3, 1230.0], [7.4, 1235.0], [7.5, 1235.0], [7.6, 1235.0], [7.7, 1235.0], [7.8, 1239.0], [7.9, 1240.0], [8.0, 1240.0], [8.1, 1246.0], [8.2, 1246.0], [8.3, 1247.0], [8.4, 1247.0], [8.5, 1248.0], [8.6, 1248.0], [8.7, 1249.0], [8.8, 1249.0], [8.9, 1269.0], [9.0, 1269.0], [9.1, 1278.0], [9.2, 1278.0], [9.3, 1278.0], [9.4, 1278.0], [9.5, 1286.0], [9.6, 1286.0], [9.7, 1289.0], [9.8, 1289.0], [9.9, 1290.0], [10.0, 1290.0], [10.1, 1302.0], [10.2, 1302.0], [10.3, 1306.0], [10.4, 1306.0], [10.5, 1307.0], [10.6, 1310.0], [10.7, 1310.0], [10.8, 1312.0], [10.9, 1312.0], [11.0, 1315.0], [11.1, 1315.0], [11.2, 1320.0], [11.3, 1320.0], [11.4, 1324.0], [11.5, 1324.0], [11.6, 1324.0], [11.7, 1324.0], [11.8, 1325.0], [11.9, 1325.0], [12.0, 1326.0], [12.1, 1326.0], [12.2, 1327.0], [12.3, 1327.0], [12.4, 1332.0], [12.5, 1332.0], [12.6, 1333.0], [12.7, 1333.0], [12.8, 1335.0], [12.9, 1335.0], [13.0, 1335.0], [13.1, 1335.0], [13.2, 1336.0], [13.3, 1341.0], [13.4, 1341.0], [13.5, 1348.0], [13.6, 1348.0], [13.7, 1351.0], [13.8, 1351.0], [13.9, 1353.0], [14.0, 1353.0], [14.1, 1377.0], [14.2, 1377.0], [14.3, 1377.0], [14.4, 1377.0], [14.5, 1378.0], [14.6, 1378.0], [14.7, 1378.0], [14.8, 1378.0], [14.9, 1380.0], [15.0, 1380.0], [15.1, 1380.0], [15.2, 1380.0], [15.3, 1384.0], [15.4, 1384.0], [15.5, 1389.0], [15.6, 1389.0], [15.7, 1390.0], [15.8, 1392.0], [15.9, 1392.0], [16.0, 1393.0], [16.1, 1393.0], [16.2, 1395.0], [16.3, 1395.0], [16.4, 1397.0], [16.5, 1397.0], [16.6, 1403.0], [16.7, 1403.0], [16.8, 1403.0], [16.9, 1403.0], [17.0, 1410.0], [17.1, 1410.0], [17.2, 1417.0], [17.3, 1417.0], [17.4, 1419.0], [17.5, 1419.0], [17.6, 1424.0], [17.7, 1424.0], [17.8, 1425.0], [17.9, 1425.0], [18.0, 1432.0], [18.1, 1432.0], [18.2, 1443.0], [18.3, 1443.0], [18.4, 1446.0], [18.5, 1447.0], [18.6, 1447.0], [18.7, 1448.0], [18.8, 1448.0], [18.9, 1452.0], [19.0, 1452.0], [19.1, 1455.0], [19.2, 1455.0], [19.3, 1457.0], [19.4, 1457.0], [19.5, 1457.0], [19.6, 1457.0], [19.7, 1458.0], [19.8, 1458.0], [19.9, 1468.0], [20.0, 1468.0], [20.1, 1479.0], [20.2, 1479.0], [20.3, 1481.0], [20.4, 1481.0], [20.5, 1482.0], [20.6, 1482.0], [20.7, 1484.0], [20.8, 1484.0], [20.9, 1485.0], [21.0, 1485.0], [21.1, 1493.0], [21.2, 1493.0], [21.3, 1493.0], [21.4, 1494.0], [21.5, 1494.0], [21.6, 1495.0], [21.7, 1495.0], [21.8, 1496.0], [21.9, 1496.0], [22.0, 1498.0], [22.1, 1498.0], [22.2, 1501.0], [22.3, 1501.0], [22.4, 1503.0], [22.5, 1503.0], [22.6, 1511.0], [22.7, 1511.0], [22.8, 1511.0], [22.9, 1511.0], [23.0, 1512.0], [23.1, 1512.0], [23.2, 1512.0], [23.3, 1512.0], [23.4, 1515.0], [23.5, 1515.0], [23.6, 1517.0], [23.7, 1518.0], [23.8, 1518.0], [23.9, 1525.0], [24.0, 1525.0], [24.1, 1531.0], [24.2, 1531.0], [24.3, 1533.0], [24.4, 1533.0], [24.5, 1534.0], [24.6, 1534.0], [24.7, 1537.0], [24.8, 1537.0], [24.9, 1538.0], [25.0, 1538.0], [25.1, 1539.0], [25.2, 1539.0], [25.3, 1539.0], [25.4, 1539.0], [25.5, 1540.0], [25.6, 1540.0], [25.7, 1540.0], [25.8, 1540.0], [25.9, 1540.0], [26.0, 1540.0], [26.1, 1541.0], [26.2, 1541.0], [26.3, 1542.0], [26.4, 1542.0], [26.5, 1542.0], [26.6, 1542.0], [26.7, 1542.0], [26.8, 1542.0], [26.9, 1542.0], [27.0, 1543.0], [27.1, 1543.0], [27.2, 1551.0], [27.3, 1551.0], [27.4, 1552.0], [27.5, 1552.0], [27.6, 1552.0], [27.7, 1552.0], [27.8, 1554.0], [27.9, 1554.0], [28.0, 1554.0], [28.1, 1554.0], [28.2, 1557.0], [28.3, 1557.0], [28.4, 1558.0], [28.5, 1558.0], [28.6, 1559.0], [28.7, 1559.0], [28.8, 1560.0], [28.9, 1560.0], [29.0, 1571.0], [29.1, 1575.0], [29.2, 1575.0], [29.3, 1580.0], [29.4, 1580.0], [29.5, 1580.0], [29.6, 1580.0], [29.7, 1583.0], [29.8, 1583.0], [29.9, 1589.0], [30.0, 1589.0], [30.1, 1592.0], [30.2, 1592.0], [30.3, 1593.0], [30.4, 1593.0], [30.5, 1595.0], [30.6, 1595.0], [30.7, 1596.0], [30.8, 1596.0], [30.9, 1597.0], [31.0, 1597.0], [31.1, 1600.0], [31.2, 1600.0], [31.3, 1601.0], [31.4, 1601.0], [31.5, 1602.0], [31.6, 1602.0], [31.7, 1602.0], [31.8, 1605.0], [31.9, 1605.0], [32.0, 1605.0], [32.1, 1605.0], [32.2, 1609.0], [32.3, 1609.0], [32.4, 1621.0], [32.5, 1621.0], [32.6, 1624.0], [32.7, 1624.0], [32.8, 1628.0], [32.9, 1628.0], [33.0, 1632.0], [33.1, 1632.0], [33.2, 1635.0], [33.3, 1635.0], [33.4, 1638.0], [33.5, 1638.0], [33.6, 1638.0], [33.7, 1638.0], [33.8, 1639.0], [33.9, 1639.0], [34.0, 1641.0], [34.1, 1641.0], [34.2, 1645.0], [34.3, 1666.0], [34.4, 1666.0], [34.5, 1671.0], [34.6, 1671.0], [34.7, 1680.0], [34.8, 1680.0], [34.9, 1680.0], [35.0, 1680.0], [35.1, 1683.0], [35.2, 1683.0], [35.3, 1686.0], [35.4, 1686.0], [35.5, 1690.0], [35.6, 1690.0], [35.7, 1692.0], [35.8, 1692.0], [35.9, 1695.0], [36.0, 1695.0], [36.1, 1710.0], [36.2, 1710.0], [36.3, 1712.0], [36.4, 1712.0], [36.5, 1714.0], [36.6, 1714.0], [36.7, 1718.0], [36.8, 1718.0], [36.9, 1718.0], [37.0, 1719.0], [37.1, 1719.0], [37.2, 1721.0], [37.3, 1721.0], [37.4, 1727.0], [37.5, 1727.0], [37.6, 1727.0], [37.7, 1727.0], [37.8, 1732.0], [37.9, 1732.0], [38.0, 1738.0], [38.1, 1738.0], [38.2, 1744.0], [38.3, 1744.0], [38.4, 1747.0], [38.5, 1747.0], [38.6, 1748.0], [38.7, 1748.0], [38.8, 1753.0], [38.9, 1753.0], [39.0, 1754.0], [39.1, 1754.0], [39.2, 1758.0], [39.3, 1758.0], [39.4, 1758.0], [39.5, 1760.0], [39.6, 1760.0], [39.7, 1764.0], [39.8, 1764.0], [39.9, 1767.0], [40.0, 1767.0], [40.1, 1769.0], [40.2, 1769.0], [40.3, 1773.0], [40.4, 1773.0], [40.5, 1775.0], [40.6, 1775.0], [40.7, 1775.0], [40.8, 1775.0], [40.9, 1777.0], [41.0, 1777.0], [41.1, 1777.0], [41.2, 1777.0], [41.3, 1782.0], [41.4, 1782.0], [41.5, 1789.0], [41.6, 1789.0], [41.7, 1791.0], [41.8, 1791.0], [41.9, 1792.0], [42.0, 1792.0], [42.1, 1793.0], [42.2, 1795.0], [42.3, 1795.0], [42.4, 1798.0], [42.5, 1798.0], [42.6, 1798.0], [42.7, 1798.0], [42.8, 1801.0], [42.9, 1801.0], [43.0, 1804.0], [43.1, 1804.0], [43.2, 1806.0], [43.3, 1806.0], [43.4, 1808.0], [43.5, 1808.0], [43.6, 1808.0], [43.7, 1808.0], [43.8, 1814.0], [43.9, 1814.0], [44.0, 1818.0], [44.1, 1818.0], [44.2, 1818.0], [44.3, 1818.0], [44.4, 1819.0], [44.5, 1819.0], [44.6, 1823.0], [44.7, 1823.0], [44.8, 1825.0], [44.9, 1826.0], [45.0, 1826.0], [45.1, 1829.0], [45.2, 1829.0], [45.3, 1832.0], [45.4, 1832.0], [45.5, 1832.0], [45.6, 1832.0], [45.7, 1842.0], [45.8, 1842.0], [45.9, 1844.0], [46.0, 1844.0], [46.1, 1847.0], [46.2, 1847.0], [46.3, 1855.0], [46.4, 1855.0], [46.5, 1857.0], [46.6, 1857.0], [46.7, 1858.0], [46.8, 1858.0], [46.9, 1864.0], [47.0, 1864.0], [47.1, 1879.0], [47.2, 1879.0], [47.3, 1880.0], [47.4, 1884.0], [47.5, 1884.0], [47.6, 1891.0], [47.7, 1891.0], [47.8, 1891.0], [47.9, 1891.0], [48.0, 1891.0], [48.1, 1891.0], [48.2, 1895.0], [48.3, 1895.0], [48.4, 1897.0], [48.5, 1897.0], [48.6, 1899.0], [48.7, 1899.0], [48.8, 1900.0], [48.9, 1900.0], [49.0, 1911.0], [49.1, 1911.0], [49.2, 1913.0], [49.3, 1913.0], [49.4, 1918.0], [49.5, 1918.0], [49.6, 1923.0], [49.7, 1923.0], [49.8, 1933.0], [49.9, 1933.0], [50.0, 1945.0], [50.1, 1946.0], [50.2, 1946.0], [50.3, 1954.0], [50.4, 1954.0], [50.5, 1954.0], [50.6, 1954.0], [50.7, 1966.0], [50.8, 1966.0], [50.9, 1974.0], [51.0, 1974.0], [51.1, 1984.0], [51.2, 1984.0], [51.3, 2003.0], [51.4, 2003.0], [51.5, 2012.0], [51.6, 2012.0], [51.7, 2024.0], [51.8, 2024.0], [51.9, 2027.0], [52.0, 2027.0], [52.1, 2029.0], [52.2, 2029.0], [52.3, 2034.0], [52.4, 2034.0], [52.5, 2043.0], [52.6, 2043.0], [52.7, 2044.0], [52.8, 2054.0], [52.9, 2054.0], [53.0, 2059.0], [53.1, 2059.0], [53.2, 2064.0], [53.3, 2064.0], [53.4, 2065.0], [53.5, 2065.0], [53.6, 2065.0], [53.7, 2065.0], [53.8, 2065.0], [53.9, 2065.0], [54.0, 2067.0], [54.1, 2067.0], [54.2, 2067.0], [54.3, 2067.0], [54.4, 2070.0], [54.5, 2070.0], [54.6, 2082.0], [54.7, 2082.0], [54.8, 2089.0], [54.9, 2089.0], [55.0, 2092.0], [55.1, 2092.0], [55.2, 2103.0], [55.3, 2107.0], [55.4, 2107.0], [55.5, 2127.0], [55.6, 2127.0], [55.7, 2129.0], [55.8, 2129.0], [55.9, 2132.0], [56.0, 2132.0], [56.1, 2139.0], [56.2, 2139.0], [56.3, 2141.0], [56.4, 2141.0], [56.5, 2146.0], [56.6, 2146.0], [56.7, 2163.0], [56.8, 2163.0], [56.9, 2173.0], [57.0, 2173.0], [57.1, 2175.0], [57.2, 2175.0], [57.3, 2177.0], [57.4, 2177.0], [57.5, 2178.0], [57.6, 2178.0], [57.7, 2211.0], [57.8, 2211.0], [57.9, 2228.0], [58.0, 2244.0], [58.1, 2244.0], [58.2, 2249.0], [58.3, 2249.0], [58.4, 2253.0], [58.5, 2253.0], [58.6, 2256.0], [58.7, 2256.0], [58.8, 2275.0], [58.9, 2275.0], [59.0, 2281.0], [59.1, 2281.0], [59.2, 2285.0], [59.3, 2285.0], [59.4, 2291.0], [59.5, 2291.0], [59.6, 2292.0], [59.7, 2292.0], [59.8, 2294.0], [59.9, 2294.0], [60.0, 2299.0], [60.1, 2299.0], [60.2, 2300.0], [60.3, 2300.0], [60.4, 2306.0], [60.5, 2306.0], [60.6, 2320.0], [60.7, 2329.0], [60.8, 2329.0], [60.9, 2332.0], [61.0, 2332.0], [61.1, 2338.0], [61.2, 2338.0], [61.3, 2343.0], [61.4, 2343.0], [61.5, 2362.0], [61.6, 2362.0], [61.7, 2366.0], [61.8, 2366.0], [61.9, 2368.0], [62.0, 2368.0], [62.1, 2385.0], [62.2, 2385.0], [62.3, 2396.0], [62.4, 2396.0], [62.5, 2408.0], [62.6, 2408.0], [62.7, 2411.0], [62.8, 2411.0], [62.9, 2421.0], [63.0, 2421.0], [63.1, 2433.0], [63.2, 2436.0], [63.3, 2436.0], [63.4, 2436.0], [63.5, 2436.0], [63.6, 2436.0], [63.7, 2436.0], [63.8, 2441.0], [63.9, 2441.0], [64.0, 2443.0], [64.1, 2443.0], [64.2, 2448.0], [64.3, 2448.0], [64.4, 2472.0], [64.5, 2472.0], [64.6, 2476.0], [64.7, 2476.0], [64.8, 2486.0], [64.9, 2486.0], [65.0, 2490.0], [65.1, 2490.0], [65.2, 2493.0], [65.3, 2493.0], [65.4, 2495.0], [65.5, 2495.0], [65.6, 2496.0], [65.7, 2496.0], [65.8, 2497.0], [65.9, 2499.0], [66.0, 2499.0], [66.1, 2501.0], [66.2, 2501.0], [66.3, 2505.0], [66.4, 2505.0], [66.5, 2507.0], [66.6, 2507.0], [66.7, 2532.0], [66.8, 2532.0], [66.9, 2533.0], [67.0, 2533.0], [67.1, 2534.0], [67.2, 2534.0], [67.3, 2535.0], [67.4, 2535.0], [67.5, 2536.0], [67.6, 2536.0], [67.7, 2536.0], [67.8, 2536.0], [67.9, 2538.0], [68.0, 2538.0], [68.1, 2569.0], [68.2, 2569.0], [68.3, 2573.0], [68.4, 2573.0], [68.5, 2594.0], [68.6, 2609.0], [68.7, 2609.0], [68.8, 2640.0], [68.9, 2640.0], [69.0, 2642.0], [69.1, 2642.0], [69.2, 2645.0], [69.3, 2645.0], [69.4, 2648.0], [69.5, 2648.0], [69.6, 2660.0], [69.7, 2660.0], [69.8, 2662.0], [69.9, 2662.0], [70.0, 2667.0], [70.1, 2667.0], [70.2, 2681.0], [70.3, 2681.0], [70.4, 2682.0], [70.5, 2682.0], [70.6, 2699.0], [70.7, 2699.0], [70.8, 2729.0], [70.9, 2729.0], [71.0, 2775.0], [71.1, 2790.0], [71.2, 2790.0], [71.3, 2791.0], [71.4, 2791.0], [71.5, 2796.0], [71.6, 2796.0], [71.7, 2801.0], [71.8, 2801.0], [71.9, 2804.0], [72.0, 2804.0], [72.1, 2822.0], [72.2, 2822.0], [72.3, 2836.0], [72.4, 2836.0], [72.5, 2853.0], [72.6, 2853.0], [72.7, 2857.0], [72.8, 2857.0], [72.9, 2858.0], [73.0, 2858.0], [73.1, 2867.0], [73.2, 2867.0], [73.3, 2875.0], [73.4, 2875.0], [73.5, 2879.0], [73.6, 2879.0], [73.7, 2887.0], [73.8, 2901.0], [73.9, 2901.0], [74.0, 2909.0], [74.1, 2909.0], [74.2, 2917.0], [74.3, 2917.0], [74.4, 2924.0], [74.5, 2924.0], [74.6, 2927.0], [74.7, 2927.0], [74.8, 2928.0], [74.9, 2928.0], [75.0, 2930.0], [75.1, 2930.0], [75.2, 2931.0], [75.3, 2931.0], [75.4, 2935.0], [75.5, 2935.0], [75.6, 2937.0], [75.7, 2937.0], [75.8, 2943.0], [75.9, 2943.0], [76.0, 2944.0], [76.1, 2944.0], [76.2, 2945.0], [76.3, 2945.0], [76.4, 2946.0], [76.5, 2960.0], [76.6, 2960.0], [76.7, 2964.0], [76.8, 2964.0], [76.9, 2970.0], [77.0, 2970.0], [77.1, 2976.0], [77.2, 2976.0], [77.3, 2978.0], [77.4, 2978.0], [77.5, 2984.0], [77.6, 2984.0], [77.7, 2991.0], [77.8, 2991.0], [77.9, 2998.0], [78.0, 2998.0], [78.1, 3008.0], [78.2, 3008.0], [78.3, 3021.0], [78.4, 3021.0], [78.5, 3050.0], [78.6, 3050.0], [78.7, 3059.0], [78.8, 3059.0], [78.9, 3079.0], [79.0, 3101.0], [79.1, 3101.0], [79.2, 3110.0], [79.3, 3110.0], [79.4, 3121.0], [79.5, 3121.0], [79.6, 3122.0], [79.7, 3122.0], [79.8, 3133.0], [79.9, 3133.0], [80.0, 3135.0], [80.1, 3135.0], [80.2, 3165.0], [80.3, 3165.0], [80.4, 3166.0], [80.5, 3166.0], [80.6, 3168.0], [80.7, 3168.0], [80.8, 3174.0], [80.9, 3174.0], [81.0, 3178.0], [81.1, 3178.0], [81.2, 3203.0], [81.3, 3203.0], [81.4, 3209.0], [81.5, 3209.0], [81.6, 3214.0], [81.7, 3218.0], [81.8, 3218.0], [81.9, 3220.0], [82.0, 3220.0], [82.1, 3222.0], [82.2, 3222.0], [82.3, 3227.0], [82.4, 3227.0], [82.5, 3228.0], [82.6, 3228.0], [82.7, 3228.0], [82.8, 3228.0], [82.9, 3254.0], [83.0, 3254.0], [83.1, 3256.0], [83.2, 3256.0], [83.3, 3262.0], [83.4, 3262.0], [83.5, 3275.0], [83.6, 3275.0], [83.7, 3277.0], [83.8, 3277.0], [83.9, 3279.0], [84.0, 3279.0], [84.1, 3285.0], [84.2, 3285.0], [84.3, 3294.0], [84.4, 3295.0], [84.5, 3295.0], [84.6, 3298.0], [84.7, 3298.0], [84.8, 3299.0], [84.9, 3299.0], [85.0, 3317.0], [85.1, 3317.0], [85.2, 3319.0], [85.3, 3319.0], [85.4, 3329.0], [85.5, 3329.0], [85.6, 3343.0], [85.7, 3343.0], [85.8, 3357.0], [85.9, 3357.0], [86.0, 3372.0], [86.1, 3372.0], [86.2, 3377.0], [86.3, 3377.0], [86.4, 3381.0], [86.5, 3381.0], [86.6, 3400.0], [86.7, 3400.0], [86.8, 3410.0], [86.9, 3443.0], [87.0, 3443.0], [87.1, 3456.0], [87.2, 3456.0], [87.3, 3459.0], [87.4, 3459.0], [87.5, 3469.0], [87.6, 3469.0], [87.7, 3472.0], [87.8, 3472.0], [87.9, 3496.0], [88.0, 3496.0], [88.1, 3499.0], [88.2, 3499.0], [88.3, 3501.0], [88.4, 3501.0], [88.5, 3505.0], [88.6, 3505.0], [88.7, 3528.0], [88.8, 3528.0], [88.9, 3536.0], [89.0, 3536.0], [89.1, 3551.0], [89.2, 3551.0], [89.3, 3571.0], [89.4, 3571.0], [89.5, 3620.0], [89.6, 3671.0], [89.7, 3671.0], [89.8, 3833.0], [89.9, 3833.0], [90.0, 4156.0], [90.1, 4156.0], [90.2, 4263.0], [90.3, 4263.0], [90.4, 40065.0], [90.5, 40065.0], [90.6, 40069.0], [90.7, 40069.0], [90.8, 40078.0], [90.9, 40078.0], [91.0, 40099.0], [91.1, 40099.0], [91.2, 40159.0], [91.3, 40159.0], [91.4, 40165.0], [91.5, 40165.0], [91.6, 40205.0], [91.7, 40205.0], [91.8, 40217.0], [91.9, 40217.0], [92.0, 40251.0], [92.1, 40251.0], [92.2, 40266.0], [92.3, 40284.0], [92.4, 40284.0], [92.5, 40307.0], [92.6, 40307.0], [92.7, 40325.0], [92.8, 40325.0], [92.9, 40350.0], [93.0, 40350.0], [93.1, 40370.0], [93.2, 40370.0], [93.3, 40385.0], [93.4, 40385.0], [93.5, 40409.0], [93.6, 40409.0], [93.7, 40426.0], [93.8, 40426.0], [93.9, 40452.0], [94.0, 40452.0], [94.1, 40467.0], [94.2, 40467.0], [94.3, 40491.0], [94.4, 40491.0], [94.5, 40508.0], [94.6, 40508.0], [94.7, 40524.0], [94.8, 40544.0], [94.9, 40544.0], [95.0, 40564.0], [95.1, 40564.0], [95.2, 40590.0], [95.3, 40590.0], [95.4, 40610.0], [95.5, 40610.0], [95.6, 40633.0], [95.7, 40633.0], [95.8, 40648.0], [95.9, 40648.0], [96.0, 40664.0], [96.1, 40664.0], [96.2, 40689.0], [96.3, 40689.0], [96.4, 40711.0], [96.5, 40711.0], [96.6, 40728.0], [96.7, 40728.0], [96.8, 40743.0], [96.9, 40743.0], [97.0, 40768.0], [97.1, 40768.0], [97.2, 40788.0], [97.3, 40788.0], [97.4, 40804.0], [97.5, 40829.0], [97.6, 40829.0], [97.7, 40845.0], [97.8, 40845.0], [97.9, 40867.0], [98.0, 40867.0], [98.1, 40885.0], [98.2, 40885.0], [98.3, 40912.0], [98.4, 40912.0], [98.5, 40923.0], [98.6, 40923.0], [98.7, 40946.0], [98.8, 40946.0], [98.9, 40963.0], [99.0, 40963.0], [99.1, 40982.0], [99.2, 40982.0], [99.3, 40983.0], [99.4, 40983.0], [99.5, 40983.0], [99.6, 40983.0], [99.7, 40987.0], [99.8, 40987.0], [99.9, 40989.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 400.0, "maxY": 46.0, "series": [{"data": [[600.0, 1.0], [800.0, 6.0], [900.0, 2.0], [1000.0, 9.0], [1100.0, 13.0], [1200.0, 17.0], [1300.0, 34.0], [1400.0, 29.0], [1500.0, 46.0], [1600.0, 26.0], [1700.0, 35.0], [1800.0, 31.0], [1900.0, 13.0], [2000.0, 20.0], [2100.0, 13.0], [2200.0, 13.0], [2300.0, 12.0], [2400.0, 19.0], [40900.0, 9.0], [40300.0, 5.0], [40800.0, 5.0], [40000.0, 4.0], [40400.0, 5.0], [40700.0, 5.0], [40200.0, 5.0], [40600.0, 5.0], [40500.0, 5.0], [40100.0, 2.0], [2500.0, 13.0], [2600.0, 11.0], [2700.0, 5.0], [2800.0, 11.0], [2900.0, 22.0], [3000.0, 5.0], [3100.0, 11.0], [3300.0, 8.0], [3200.0, 20.0], [3400.0, 9.0], [3500.0, 6.0], [3600.0, 2.0], [3800.0, 1.0], [4200.0, 1.0], [4100.0, 1.0], [400.0, 2.0], [500.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 40900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 404.0, "series": [{"data": [[0.0, 2.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 113.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 404.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 47.672447013487485, "minX": 1.61557254E12, "maxY": 47.672447013487485, "series": [{"data": [[1.61557254E12, 47.672447013487485]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61557254E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 489.0, "minX": 1.0, "maxY": 6122.202959830866, "series": [{"data": [[32.0, 2497.0], [2.0, 1855.0], [35.0, 2642.0], [34.0, 2529.0], [37.0, 1760.0], [36.0, 2640.0], [38.0, 2682.0], [41.0, 2536.0], [40.0, 2285.0], [43.0, 2436.0], [42.0, 2867.0], [45.0, 2067.0], [44.0, 2790.0], [46.0, 2065.0], [3.0, 1247.0], [50.0, 6122.202959830866], [4.0, 489.0], [5.0, 491.0], [6.0, 1171.0], [7.0, 513.0], [9.0, 1220.5], [10.0, 1571.0], [11.0, 1858.0], [12.0, 1829.0], [15.0, 2003.3333333333333], [16.0, 1804.0], [1.0, 1224.0], [19.0, 1990.3333333333333], [20.0, 2396.0], [21.0, 2385.0], [22.0, 2253.0], [23.0, 2173.0], [24.0, 2699.0], [25.0, 1683.0], [26.0, 2139.0], [27.0, 2667.0], [29.0, 2234.5], [31.0, 2392.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[47.672447013487485, 5758.254335260113]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1020.7, "minX": 1.61557254E12, "maxY": 184582.35, "series": [{"data": [[1.61557254E12, 184582.35]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.61557254E12, 1020.7]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61557254E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 5758.254335260113, "minX": 1.61557254E12, "maxY": 5758.254335260113, "series": [{"data": [[1.61557254E12, 5758.254335260113]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61557254E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 5757.533718689791, "minX": 1.61557254E12, "maxY": 5757.533718689791, "series": [{"data": [[1.61557254E12, 5757.533718689791]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61557254E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 151.69942196531807, "minX": 1.61557254E12, "maxY": 151.69942196531807, "series": [{"data": [[1.61557254E12, 151.69942196531807]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61557254E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 489.0, "minX": 1.61557254E12, "maxY": 40989.0, "series": [{"data": [[1.61557254E12, 40989.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.61557254E12, 4156.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.61557254E12, 40978.2]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.61557254E12, 40564.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.61557254E12, 489.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.61557254E12, 1945.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61557254E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1039.0, "minX": 1.0, "maxY": 40577.0, "series": [{"data": [[2.0, 1848.5], [32.0, 2952.5], [9.0, 1448.0], [40.0, 1413.5], [41.0, 1884.0], [3.0, 1039.0], [49.0, 1455.0], [48.0, 1573.0], [50.0, 40577.0], [1.0, 4263.0], [17.0, 3459.0], [18.0, 3239.0], [19.0, 1624.0], [21.0, 1767.5], [26.0, 1804.5], [28.0, 2428.5], [30.0, 2209.5], [31.0, 2690.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 50.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 1038.0, "minX": 1.0, "maxY": 40573.5, "series": [{"data": [[2.0, 1848.0], [32.0, 2952.0], [9.0, 1447.0], [40.0, 1412.5], [41.0, 1884.0], [3.0, 1038.0], [49.0, 1454.0], [48.0, 1572.5], [50.0, 40573.5], [1.0, 4263.0], [17.0, 3458.0], [18.0, 3238.0], [19.0, 1623.0], [21.0, 1767.0], [26.0, 1804.5], [28.0, 2428.5], [30.0, 2209.0], [31.0, 2690.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 50.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.8333333333333334, "minX": 1.61557248E12, "maxY": 7.816666666666666, "series": [{"data": [[1.61557254E12, 7.816666666666666], [1.61557248E12, 0.8333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61557254E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 8.65, "minX": 1.61557254E12, "maxY": 8.65, "series": [{"data": [[1.61557254E12, 8.65]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61557254E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 8.65, "minX": 1.61557254E12, "maxY": 8.65, "series": [{"data": [[1.61557254E12, 8.65]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61557254E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 8.65, "minX": 1.61557254E12, "maxY": 8.65, "series": [{"data": [[1.61557254E12, 8.65]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61557254E12, "title": "Total Transactions Per Second"}},
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

