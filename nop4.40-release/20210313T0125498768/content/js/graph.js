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
        data: {"result": {"minY": 464.0, "minX": 0.0, "maxY": 2124.0, "series": [{"data": [[0.0, 464.0], [0.1, 483.0], [0.2, 546.0], [0.3, 572.0], [0.4, 634.0], [0.5, 643.0], [0.6, 661.0], [0.7, 677.0], [0.8, 684.0], [0.9, 688.0], [1.0, 693.0], [1.1, 699.0], [1.2, 701.0], [1.3, 703.0], [1.4, 704.0], [1.5, 705.0], [1.6, 710.0], [1.7, 713.0], [1.8, 714.0], [1.9, 715.0], [2.0, 716.0], [2.1, 719.0], [2.2, 722.0], [2.3, 722.0], [2.4, 723.0], [2.5, 725.0], [2.6, 727.0], [2.7, 728.0], [2.8, 730.0], [2.9, 730.0], [3.0, 731.0], [3.1, 731.0], [3.2, 733.0], [3.3, 734.0], [3.4, 734.0], [3.5, 735.0], [3.6, 735.0], [3.7, 737.0], [3.8, 738.0], [3.9, 738.0], [4.0, 739.0], [4.1, 740.0], [4.2, 741.0], [4.3, 741.0], [4.4, 742.0], [4.5, 743.0], [4.6, 744.0], [4.7, 744.0], [4.8, 745.0], [4.9, 746.0], [5.0, 747.0], [5.1, 747.0], [5.2, 748.0], [5.3, 749.0], [5.4, 752.0], [5.5, 752.0], [5.6, 753.0], [5.7, 754.0], [5.8, 755.0], [5.9, 756.0], [6.0, 756.0], [6.1, 757.0], [6.2, 757.0], [6.3, 758.0], [6.4, 758.0], [6.5, 759.0], [6.6, 760.0], [6.7, 761.0], [6.8, 762.0], [6.9, 762.0], [7.0, 763.0], [7.1, 764.0], [7.2, 764.0], [7.3, 764.0], [7.4, 765.0], [7.5, 766.0], [7.6, 766.0], [7.7, 766.0], [7.8, 767.0], [7.9, 767.0], [8.0, 768.0], [8.1, 769.0], [8.2, 769.0], [8.3, 770.0], [8.4, 770.0], [8.5, 771.0], [8.6, 771.0], [8.7, 771.0], [8.8, 772.0], [8.9, 772.0], [9.0, 773.0], [9.1, 773.0], [9.2, 774.0], [9.3, 774.0], [9.4, 775.0], [9.5, 775.0], [9.6, 775.0], [9.7, 775.0], [9.8, 776.0], [9.9, 776.0], [10.0, 776.0], [10.1, 776.0], [10.2, 777.0], [10.3, 777.0], [10.4, 777.0], [10.5, 778.0], [10.6, 778.0], [10.7, 778.0], [10.8, 779.0], [10.9, 779.0], [11.0, 780.0], [11.1, 780.0], [11.2, 780.0], [11.3, 781.0], [11.4, 781.0], [11.5, 781.0], [11.6, 782.0], [11.7, 782.0], [11.8, 782.0], [11.9, 783.0], [12.0, 783.0], [12.1, 783.0], [12.2, 784.0], [12.3, 785.0], [12.4, 785.0], [12.5, 785.0], [12.6, 786.0], [12.7, 786.0], [12.8, 786.0], [12.9, 786.0], [13.0, 787.0], [13.1, 787.0], [13.2, 787.0], [13.3, 787.0], [13.4, 788.0], [13.5, 788.0], [13.6, 789.0], [13.7, 789.0], [13.8, 790.0], [13.9, 790.0], [14.0, 790.0], [14.1, 791.0], [14.2, 791.0], [14.3, 791.0], [14.4, 791.0], [14.5, 792.0], [14.6, 792.0], [14.7, 792.0], [14.8, 792.0], [14.9, 792.0], [15.0, 792.0], [15.1, 793.0], [15.2, 793.0], [15.3, 793.0], [15.4, 794.0], [15.5, 794.0], [15.6, 794.0], [15.7, 795.0], [15.8, 795.0], [15.9, 795.0], [16.0, 795.0], [16.1, 795.0], [16.2, 796.0], [16.3, 796.0], [16.4, 796.0], [16.5, 796.0], [16.6, 796.0], [16.7, 797.0], [16.8, 797.0], [16.9, 797.0], [17.0, 797.0], [17.1, 798.0], [17.2, 798.0], [17.3, 799.0], [17.4, 799.0], [17.5, 799.0], [17.6, 800.0], [17.7, 800.0], [17.8, 800.0], [17.9, 800.0], [18.0, 801.0], [18.1, 802.0], [18.2, 802.0], [18.3, 802.0], [18.4, 802.0], [18.5, 803.0], [18.6, 803.0], [18.7, 803.0], [18.8, 803.0], [18.9, 803.0], [19.0, 804.0], [19.1, 804.0], [19.2, 804.0], [19.3, 805.0], [19.4, 805.0], [19.5, 805.0], [19.6, 805.0], [19.7, 806.0], [19.8, 806.0], [19.9, 807.0], [20.0, 807.0], [20.1, 807.0], [20.2, 807.0], [20.3, 807.0], [20.4, 808.0], [20.5, 808.0], [20.6, 808.0], [20.7, 809.0], [20.8, 809.0], [20.9, 809.0], [21.0, 809.0], [21.1, 810.0], [21.2, 810.0], [21.3, 810.0], [21.4, 810.0], [21.5, 811.0], [21.6, 812.0], [21.7, 813.0], [21.8, 813.0], [21.9, 813.0], [22.0, 813.0], [22.1, 814.0], [22.2, 814.0], [22.3, 814.0], [22.4, 815.0], [22.5, 815.0], [22.6, 815.0], [22.7, 815.0], [22.8, 816.0], [22.9, 816.0], [23.0, 816.0], [23.1, 817.0], [23.2, 817.0], [23.3, 817.0], [23.4, 817.0], [23.5, 818.0], [23.6, 818.0], [23.7, 819.0], [23.8, 819.0], [23.9, 819.0], [24.0, 819.0], [24.1, 820.0], [24.2, 820.0], [24.3, 820.0], [24.4, 820.0], [24.5, 820.0], [24.6, 821.0], [24.7, 821.0], [24.8, 821.0], [24.9, 821.0], [25.0, 822.0], [25.1, 822.0], [25.2, 823.0], [25.3, 823.0], [25.4, 824.0], [25.5, 824.0], [25.6, 824.0], [25.7, 824.0], [25.8, 824.0], [25.9, 824.0], [26.0, 825.0], [26.1, 825.0], [26.2, 825.0], [26.3, 825.0], [26.4, 825.0], [26.5, 826.0], [26.6, 826.0], [26.7, 826.0], [26.8, 827.0], [26.9, 827.0], [27.0, 827.0], [27.1, 828.0], [27.2, 828.0], [27.3, 828.0], [27.4, 829.0], [27.5, 829.0], [27.6, 829.0], [27.7, 829.0], [27.8, 830.0], [27.9, 830.0], [28.0, 830.0], [28.1, 830.0], [28.2, 831.0], [28.3, 831.0], [28.4, 831.0], [28.5, 832.0], [28.6, 832.0], [28.7, 832.0], [28.8, 832.0], [28.9, 833.0], [29.0, 833.0], [29.1, 833.0], [29.2, 833.0], [29.3, 833.0], [29.4, 834.0], [29.5, 834.0], [29.6, 834.0], [29.7, 835.0], [29.8, 835.0], [29.9, 835.0], [30.0, 835.0], [30.1, 835.0], [30.2, 835.0], [30.3, 836.0], [30.4, 836.0], [30.5, 836.0], [30.6, 837.0], [30.7, 837.0], [30.8, 838.0], [30.9, 838.0], [31.0, 838.0], [31.1, 838.0], [31.2, 839.0], [31.3, 839.0], [31.4, 839.0], [31.5, 839.0], [31.6, 839.0], [31.7, 840.0], [31.8, 840.0], [31.9, 840.0], [32.0, 841.0], [32.1, 841.0], [32.2, 841.0], [32.3, 841.0], [32.4, 841.0], [32.5, 841.0], [32.6, 842.0], [32.7, 842.0], [32.8, 842.0], [32.9, 842.0], [33.0, 842.0], [33.1, 843.0], [33.2, 843.0], [33.3, 843.0], [33.4, 843.0], [33.5, 843.0], [33.6, 843.0], [33.7, 844.0], [33.8, 844.0], [33.9, 844.0], [34.0, 844.0], [34.1, 844.0], [34.2, 844.0], [34.3, 844.0], [34.4, 845.0], [34.5, 845.0], [34.6, 845.0], [34.7, 845.0], [34.8, 846.0], [34.9, 846.0], [35.0, 846.0], [35.1, 846.0], [35.2, 846.0], [35.3, 847.0], [35.4, 847.0], [35.5, 847.0], [35.6, 848.0], [35.7, 848.0], [35.8, 848.0], [35.9, 848.0], [36.0, 849.0], [36.1, 849.0], [36.2, 849.0], [36.3, 849.0], [36.4, 850.0], [36.5, 850.0], [36.6, 851.0], [36.7, 851.0], [36.8, 851.0], [36.9, 851.0], [37.0, 852.0], [37.1, 852.0], [37.2, 852.0], [37.3, 853.0], [37.4, 853.0], [37.5, 853.0], [37.6, 853.0], [37.7, 853.0], [37.8, 854.0], [37.9, 854.0], [38.0, 854.0], [38.1, 854.0], [38.2, 854.0], [38.3, 855.0], [38.4, 855.0], [38.5, 855.0], [38.6, 855.0], [38.7, 856.0], [38.8, 856.0], [38.9, 856.0], [39.0, 856.0], [39.1, 856.0], [39.2, 856.0], [39.3, 856.0], [39.4, 857.0], [39.5, 857.0], [39.6, 857.0], [39.7, 857.0], [39.8, 857.0], [39.9, 858.0], [40.0, 858.0], [40.1, 858.0], [40.2, 858.0], [40.3, 858.0], [40.4, 858.0], [40.5, 858.0], [40.6, 858.0], [40.7, 858.0], [40.8, 859.0], [40.9, 859.0], [41.0, 859.0], [41.1, 859.0], [41.2, 859.0], [41.3, 860.0], [41.4, 860.0], [41.5, 860.0], [41.6, 860.0], [41.7, 860.0], [41.8, 861.0], [41.9, 861.0], [42.0, 861.0], [42.1, 861.0], [42.2, 861.0], [42.3, 862.0], [42.4, 862.0], [42.5, 862.0], [42.6, 862.0], [42.7, 862.0], [42.8, 862.0], [42.9, 863.0], [43.0, 863.0], [43.1, 863.0], [43.2, 863.0], [43.3, 863.0], [43.4, 864.0], [43.5, 864.0], [43.6, 864.0], [43.7, 864.0], [43.8, 864.0], [43.9, 865.0], [44.0, 865.0], [44.1, 865.0], [44.2, 865.0], [44.3, 866.0], [44.4, 866.0], [44.5, 866.0], [44.6, 866.0], [44.7, 866.0], [44.8, 867.0], [44.9, 867.0], [45.0, 867.0], [45.1, 868.0], [45.2, 868.0], [45.3, 868.0], [45.4, 868.0], [45.5, 869.0], [45.6, 869.0], [45.7, 869.0], [45.8, 869.0], [45.9, 869.0], [46.0, 870.0], [46.1, 870.0], [46.2, 870.0], [46.3, 871.0], [46.4, 871.0], [46.5, 871.0], [46.6, 872.0], [46.7, 872.0], [46.8, 872.0], [46.9, 873.0], [47.0, 873.0], [47.1, 874.0], [47.2, 874.0], [47.3, 874.0], [47.4, 874.0], [47.5, 875.0], [47.6, 875.0], [47.7, 875.0], [47.8, 875.0], [47.9, 875.0], [48.0, 876.0], [48.1, 876.0], [48.2, 876.0], [48.3, 876.0], [48.4, 877.0], [48.5, 877.0], [48.6, 877.0], [48.7, 877.0], [48.8, 877.0], [48.9, 877.0], [49.0, 877.0], [49.1, 878.0], [49.2, 878.0], [49.3, 879.0], [49.4, 879.0], [49.5, 879.0], [49.6, 880.0], [49.7, 880.0], [49.8, 880.0], [49.9, 880.0], [50.0, 880.0], [50.1, 881.0], [50.2, 881.0], [50.3, 881.0], [50.4, 881.0], [50.5, 882.0], [50.6, 882.0], [50.7, 882.0], [50.8, 882.0], [50.9, 882.0], [51.0, 883.0], [51.1, 883.0], [51.2, 883.0], [51.3, 883.0], [51.4, 884.0], [51.5, 884.0], [51.6, 884.0], [51.7, 884.0], [51.8, 885.0], [51.9, 885.0], [52.0, 885.0], [52.1, 885.0], [52.2, 885.0], [52.3, 885.0], [52.4, 886.0], [52.5, 886.0], [52.6, 886.0], [52.7, 887.0], [52.8, 887.0], [52.9, 887.0], [53.0, 887.0], [53.1, 888.0], [53.2, 888.0], [53.3, 888.0], [53.4, 889.0], [53.5, 889.0], [53.6, 889.0], [53.7, 889.0], [53.8, 890.0], [53.9, 890.0], [54.0, 890.0], [54.1, 890.0], [54.2, 890.0], [54.3, 891.0], [54.4, 891.0], [54.5, 891.0], [54.6, 891.0], [54.7, 892.0], [54.8, 892.0], [54.9, 892.0], [55.0, 892.0], [55.1, 893.0], [55.2, 893.0], [55.3, 893.0], [55.4, 893.0], [55.5, 893.0], [55.6, 893.0], [55.7, 894.0], [55.8, 894.0], [55.9, 895.0], [56.0, 895.0], [56.1, 895.0], [56.2, 896.0], [56.3, 896.0], [56.4, 896.0], [56.5, 896.0], [56.6, 897.0], [56.7, 897.0], [56.8, 897.0], [56.9, 897.0], [57.0, 898.0], [57.1, 898.0], [57.2, 898.0], [57.3, 898.0], [57.4, 898.0], [57.5, 899.0], [57.6, 900.0], [57.7, 900.0], [57.8, 900.0], [57.9, 901.0], [58.0, 901.0], [58.1, 901.0], [58.2, 901.0], [58.3, 902.0], [58.4, 902.0], [58.5, 902.0], [58.6, 902.0], [58.7, 903.0], [58.8, 903.0], [58.9, 903.0], [59.0, 904.0], [59.1, 904.0], [59.2, 904.0], [59.3, 904.0], [59.4, 904.0], [59.5, 905.0], [59.6, 905.0], [59.7, 905.0], [59.8, 905.0], [59.9, 906.0], [60.0, 906.0], [60.1, 906.0], [60.2, 906.0], [60.3, 906.0], [60.4, 906.0], [60.5, 907.0], [60.6, 907.0], [60.7, 907.0], [60.8, 908.0], [60.9, 908.0], [61.0, 908.0], [61.1, 909.0], [61.2, 909.0], [61.3, 909.0], [61.4, 909.0], [61.5, 909.0], [61.6, 909.0], [61.7, 910.0], [61.8, 910.0], [61.9, 910.0], [62.0, 910.0], [62.1, 910.0], [62.2, 911.0], [62.3, 911.0], [62.4, 911.0], [62.5, 912.0], [62.6, 912.0], [62.7, 912.0], [62.8, 913.0], [62.9, 913.0], [63.0, 913.0], [63.1, 914.0], [63.2, 914.0], [63.3, 914.0], [63.4, 915.0], [63.5, 915.0], [63.6, 915.0], [63.7, 916.0], [63.8, 916.0], [63.9, 916.0], [64.0, 916.0], [64.1, 916.0], [64.2, 917.0], [64.3, 917.0], [64.4, 917.0], [64.5, 917.0], [64.6, 918.0], [64.7, 918.0], [64.8, 919.0], [64.9, 919.0], [65.0, 919.0], [65.1, 920.0], [65.2, 920.0], [65.3, 920.0], [65.4, 921.0], [65.5, 921.0], [65.6, 921.0], [65.7, 921.0], [65.8, 922.0], [65.9, 922.0], [66.0, 923.0], [66.1, 923.0], [66.2, 923.0], [66.3, 923.0], [66.4, 923.0], [66.5, 923.0], [66.6, 924.0], [66.7, 924.0], [66.8, 924.0], [66.9, 924.0], [67.0, 924.0], [67.1, 925.0], [67.2, 925.0], [67.3, 925.0], [67.4, 925.0], [67.5, 925.0], [67.6, 925.0], [67.7, 925.0], [67.8, 926.0], [67.9, 926.0], [68.0, 926.0], [68.1, 927.0], [68.2, 927.0], [68.3, 928.0], [68.4, 928.0], [68.5, 928.0], [68.6, 928.0], [68.7, 929.0], [68.8, 929.0], [68.9, 929.0], [69.0, 929.0], [69.1, 929.0], [69.2, 929.0], [69.3, 930.0], [69.4, 930.0], [69.5, 931.0], [69.6, 931.0], [69.7, 931.0], [69.8, 932.0], [69.9, 932.0], [70.0, 932.0], [70.1, 933.0], [70.2, 933.0], [70.3, 933.0], [70.4, 934.0], [70.5, 934.0], [70.6, 934.0], [70.7, 935.0], [70.8, 935.0], [70.9, 935.0], [71.0, 936.0], [71.1, 936.0], [71.2, 936.0], [71.3, 937.0], [71.4, 937.0], [71.5, 937.0], [71.6, 938.0], [71.7, 938.0], [71.8, 938.0], [71.9, 939.0], [72.0, 939.0], [72.1, 939.0], [72.2, 940.0], [72.3, 940.0], [72.4, 941.0], [72.5, 941.0], [72.6, 941.0], [72.7, 942.0], [72.8, 942.0], [72.9, 942.0], [73.0, 942.0], [73.1, 943.0], [73.2, 943.0], [73.3, 944.0], [73.4, 944.0], [73.5, 944.0], [73.6, 944.0], [73.7, 944.0], [73.8, 944.0], [73.9, 945.0], [74.0, 945.0], [74.1, 945.0], [74.2, 945.0], [74.3, 946.0], [74.4, 946.0], [74.5, 947.0], [74.6, 947.0], [74.7, 947.0], [74.8, 947.0], [74.9, 947.0], [75.0, 947.0], [75.1, 948.0], [75.2, 948.0], [75.3, 949.0], [75.4, 949.0], [75.5, 949.0], [75.6, 950.0], [75.7, 950.0], [75.8, 951.0], [75.9, 951.0], [76.0, 951.0], [76.1, 952.0], [76.2, 952.0], [76.3, 952.0], [76.4, 953.0], [76.5, 954.0], [76.6, 954.0], [76.7, 954.0], [76.8, 954.0], [76.9, 955.0], [77.0, 955.0], [77.1, 955.0], [77.2, 956.0], [77.3, 956.0], [77.4, 956.0], [77.5, 957.0], [77.6, 957.0], [77.7, 958.0], [77.8, 960.0], [77.9, 960.0], [78.0, 961.0], [78.1, 961.0], [78.2, 962.0], [78.3, 963.0], [78.4, 963.0], [78.5, 963.0], [78.6, 964.0], [78.7, 964.0], [78.8, 964.0], [78.9, 965.0], [79.0, 966.0], [79.1, 966.0], [79.2, 967.0], [79.3, 968.0], [79.4, 968.0], [79.5, 968.0], [79.6, 969.0], [79.7, 970.0], [79.8, 970.0], [79.9, 971.0], [80.0, 971.0], [80.1, 972.0], [80.2, 972.0], [80.3, 973.0], [80.4, 973.0], [80.5, 974.0], [80.6, 974.0], [80.7, 975.0], [80.8, 975.0], [80.9, 976.0], [81.0, 977.0], [81.1, 977.0], [81.2, 977.0], [81.3, 978.0], [81.4, 978.0], [81.5, 979.0], [81.6, 980.0], [81.7, 981.0], [81.8, 982.0], [81.9, 982.0], [82.0, 982.0], [82.1, 983.0], [82.2, 983.0], [82.3, 984.0], [82.4, 984.0], [82.5, 985.0], [82.6, 986.0], [82.7, 986.0], [82.8, 987.0], [82.9, 987.0], [83.0, 988.0], [83.1, 988.0], [83.2, 989.0], [83.3, 989.0], [83.4, 990.0], [83.5, 990.0], [83.6, 991.0], [83.7, 992.0], [83.8, 992.0], [83.9, 993.0], [84.0, 994.0], [84.1, 995.0], [84.2, 996.0], [84.3, 996.0], [84.4, 996.0], [84.5, 997.0], [84.6, 998.0], [84.7, 999.0], [84.8, 999.0], [84.9, 999.0], [85.0, 1000.0], [85.1, 1000.0], [85.2, 1001.0], [85.3, 1002.0], [85.4, 1003.0], [85.5, 1003.0], [85.6, 1003.0], [85.7, 1004.0], [85.8, 1005.0], [85.9, 1007.0], [86.0, 1007.0], [86.1, 1008.0], [86.2, 1008.0], [86.3, 1009.0], [86.4, 1010.0], [86.5, 1011.0], [86.6, 1013.0], [86.7, 1013.0], [86.8, 1014.0], [86.9, 1015.0], [87.0, 1016.0], [87.1, 1017.0], [87.2, 1020.0], [87.3, 1022.0], [87.4, 1022.0], [87.5, 1022.0], [87.6, 1023.0], [87.7, 1023.0], [87.8, 1025.0], [87.9, 1026.0], [88.0, 1027.0], [88.1, 1028.0], [88.2, 1029.0], [88.3, 1029.0], [88.4, 1030.0], [88.5, 1030.0], [88.6, 1031.0], [88.7, 1032.0], [88.8, 1033.0], [88.9, 1035.0], [89.0, 1035.0], [89.1, 1036.0], [89.2, 1037.0], [89.3, 1038.0], [89.4, 1039.0], [89.5, 1039.0], [89.6, 1040.0], [89.7, 1041.0], [89.8, 1043.0], [89.9, 1043.0], [90.0, 1044.0], [90.1, 1047.0], [90.2, 1048.0], [90.3, 1049.0], [90.4, 1050.0], [90.5, 1052.0], [90.6, 1053.0], [90.7, 1054.0], [90.8, 1054.0], [90.9, 1056.0], [91.0, 1056.0], [91.1, 1058.0], [91.2, 1059.0], [91.3, 1059.0], [91.4, 1060.0], [91.5, 1061.0], [91.6, 1062.0], [91.7, 1063.0], [91.8, 1064.0], [91.9, 1066.0], [92.0, 1069.0], [92.1, 1071.0], [92.2, 1071.0], [92.3, 1072.0], [92.4, 1073.0], [92.5, 1073.0], [92.6, 1075.0], [92.7, 1078.0], [92.8, 1079.0], [92.9, 1080.0], [93.0, 1082.0], [93.1, 1083.0], [93.2, 1084.0], [93.3, 1084.0], [93.4, 1085.0], [93.5, 1087.0], [93.6, 1088.0], [93.7, 1089.0], [93.8, 1090.0], [93.9, 1090.0], [94.0, 1091.0], [94.1, 1091.0], [94.2, 1092.0], [94.3, 1094.0], [94.4, 1094.0], [94.5, 1095.0], [94.6, 1097.0], [94.7, 1097.0], [94.8, 1098.0], [94.9, 1099.0], [95.0, 1099.0], [95.1, 1101.0], [95.2, 1103.0], [95.3, 1103.0], [95.4, 1106.0], [95.5, 1110.0], [95.6, 1112.0], [95.7, 1113.0], [95.8, 1115.0], [95.9, 1116.0], [96.0, 1117.0], [96.1, 1120.0], [96.2, 1121.0], [96.3, 1122.0], [96.4, 1125.0], [96.5, 1129.0], [96.6, 1130.0], [96.7, 1133.0], [96.8, 1133.0], [96.9, 1134.0], [97.0, 1136.0], [97.1, 1137.0], [97.2, 1140.0], [97.3, 1140.0], [97.4, 1144.0], [97.5, 1153.0], [97.6, 1157.0], [97.7, 1162.0], [97.8, 1171.0], [97.9, 1177.0], [98.0, 1181.0], [98.1, 1185.0], [98.2, 1188.0], [98.3, 1193.0], [98.4, 1198.0], [98.5, 1215.0], [98.6, 1220.0], [98.7, 1225.0], [98.8, 1247.0], [98.9, 1252.0], [99.0, 1268.0], [99.1, 1312.0], [99.2, 1360.0], [99.3, 1379.0], [99.4, 1503.0], [99.5, 1532.0], [99.6, 1597.0], [99.7, 1651.0], [99.8, 1682.0], [99.9, 1707.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 400.0, "maxY": 1331.0, "series": [{"data": [[2100.0, 1.0], [600.0, 27.0], [700.0, 548.0], [800.0, 1331.0], [900.0, 911.0], [1000.0, 334.0], [1100.0, 113.0], [1200.0, 23.0], [1300.0, 7.0], [1400.0, 3.0], [1500.0, 7.0], [1600.0, 8.0], [400.0, 6.0], [1700.0, 3.0], [1800.0, 1.0], [500.0, 4.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 6.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3301.0, "series": [{"data": [[0.0, 6.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3301.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 20.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 49.5928961748634, "minX": 1.6155699E12, "maxY": 50.0, "series": [{"data": [[1.61556996E12, 49.5928961748634], [1.6155699E12, 50.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61556996E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 464.0, "minX": 1.0, "maxY": 930.75, "series": [{"data": [[32.0, 903.0], [2.0, 488.0], [35.0, 927.6666666666666], [40.0, 833.2], [45.0, 873.0], [44.0, 930.75], [47.0, 911.0], [46.0, 885.0], [48.0, 879.0], [50.0, 900.0372064653864], [4.0, 478.5], [5.0, 560.0], [6.0, 483.0], [7.0, 464.0], [8.0, 556.0], [9.0, 546.0], [10.0, 634.0], [12.0, 602.5], [13.0, 685.0], [14.0, 705.0], [15.0, 729.0], [16.0, 698.0], [1.0, 490.0], [19.0, 701.3333333333334], [21.0, 701.0], [22.0, 704.0], [23.0, 699.0], [24.0, 715.0], [26.0, 843.0], [27.0, 817.0], [30.0, 916.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[49.641418695521494, 897.9038172527812]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 784.7, "minX": 1.6155699E12, "maxY": 1041343.2, "series": [{"data": [[1.61556996E12, 1041343.2], [1.6155699E12, 141904.35]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.61556996E12, 5758.4], [1.6155699E12, 784.7]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61556996E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 887.9016393442632, "minX": 1.6155699E12, "maxY": 971.3032581453632, "series": [{"data": [[1.61556996E12, 887.9016393442632], [1.6155699E12, 971.3032581453632]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61556996E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 887.4388661202204, "minX": 1.6155699E12, "maxY": 970.6716791979943, "series": [{"data": [[1.61556996E12, 887.4388661202204], [1.6155699E12, 970.6716791979943]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61556996E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.6155699E12, "maxY": 49.719298245614084, "series": [{"data": [[1.61556996E12, 0.0], [1.6155699E12, 49.719298245614084]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61556996E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 464.0, "minX": 1.6155699E12, "maxY": 2124.0, "series": [{"data": [[1.61556996E12, 2124.0], [1.6155699E12, 1854.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.61556996E12, 1033.1], [1.6155699E12, 1144.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.61556996E12, 1186.42], [1.6155699E12, 1706.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.61556996E12, 1090.5499999999997], [1.6155699E12, 1403.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.61556996E12, 464.0], [1.6155699E12, 758.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.61556996E12, 875.0], [1.6155699E12, 916.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61556996E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 792.0, "minX": 1.0, "maxY": 1345.0, "series": [{"data": [[38.0, 952.0], [43.0, 917.0], [46.0, 1056.0], [47.0, 1060.5], [49.0, 951.0], [48.0, 925.5], [50.0, 889.0], [51.0, 862.0], [52.0, 973.0], [53.0, 910.5], [55.0, 853.0], [54.0, 929.5], [57.0, 844.0], [56.0, 860.0], [59.0, 853.5], [58.0, 894.0], [61.0, 809.0], [60.0, 847.0], [63.0, 856.0], [62.0, 872.5], [65.0, 860.0], [67.0, 866.0], [66.0, 807.0], [64.0, 817.0], [71.0, 911.5], [68.0, 962.5], [78.0, 792.0], [1.0, 1345.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 78.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 792.0, "minX": 1.0, "maxY": 1340.0, "series": [{"data": [[38.0, 952.0], [43.0, 916.0], [46.0, 1056.0], [47.0, 1060.0], [49.0, 950.0], [48.0, 925.0], [50.0, 888.0], [51.0, 862.0], [52.0, 973.0], [53.0, 909.5], [55.0, 852.0], [54.0, 929.5], [57.0, 844.0], [56.0, 859.5], [59.0, 852.5], [58.0, 894.0], [61.0, 809.0], [60.0, 847.0], [63.0, 855.0], [62.0, 871.5], [65.0, 859.0], [67.0, 865.0], [66.0, 806.0], [64.0, 816.5], [71.0, 911.0], [68.0, 962.0], [78.0, 792.0], [1.0, 1340.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 78.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 7.483333333333333, "minX": 1.6155699E12, "maxY": 47.96666666666667, "series": [{"data": [[1.61556996E12, 47.96666666666667], [1.6155699E12, 7.483333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61556996E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 6.65, "minX": 1.6155699E12, "maxY": 48.8, "series": [{"data": [[1.61556996E12, 48.8], [1.6155699E12, 6.65]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61556996E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 6.65, "minX": 1.6155699E12, "maxY": 48.8, "series": [{"data": [[1.61556996E12, 48.8], [1.6155699E12, 6.65]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61556996E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 6.65, "minX": 1.6155699E12, "maxY": 48.8, "series": [{"data": [[1.61556996E12, 48.8], [1.6155699E12, 6.65]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61556996E12, "title": "Total Transactions Per Second"}},
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

