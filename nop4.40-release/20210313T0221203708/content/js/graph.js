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
        data: {"result": {"minY": 387.0, "minX": 0.0, "maxY": 4284.0, "series": [{"data": [[0.0, 387.0], [0.1, 552.0], [0.2, 574.0], [0.3, 594.0], [0.4, 622.0], [0.5, 631.0], [0.6, 645.0], [0.7, 651.0], [0.8, 658.0], [0.9, 662.0], [1.0, 667.0], [1.1, 667.0], [1.2, 671.0], [1.3, 673.0], [1.4, 677.0], [1.5, 679.0], [1.6, 683.0], [1.7, 684.0], [1.8, 685.0], [1.9, 686.0], [2.0, 688.0], [2.1, 689.0], [2.2, 690.0], [2.3, 690.0], [2.4, 691.0], [2.5, 693.0], [2.6, 694.0], [2.7, 696.0], [2.8, 697.0], [2.9, 698.0], [3.0, 699.0], [3.1, 701.0], [3.2, 701.0], [3.3, 702.0], [3.4, 702.0], [3.5, 703.0], [3.6, 703.0], [3.7, 704.0], [3.8, 705.0], [3.9, 705.0], [4.0, 706.0], [4.1, 706.0], [4.2, 706.0], [4.3, 708.0], [4.4, 708.0], [4.5, 709.0], [4.6, 709.0], [4.7, 710.0], [4.8, 711.0], [4.9, 712.0], [5.0, 713.0], [5.1, 714.0], [5.2, 714.0], [5.3, 715.0], [5.4, 715.0], [5.5, 716.0], [5.6, 717.0], [5.7, 717.0], [5.8, 718.0], [5.9, 719.0], [6.0, 719.0], [6.1, 720.0], [6.2, 721.0], [6.3, 721.0], [6.4, 722.0], [6.5, 722.0], [6.6, 722.0], [6.7, 723.0], [6.8, 724.0], [6.9, 724.0], [7.0, 724.0], [7.1, 724.0], [7.2, 725.0], [7.3, 726.0], [7.4, 726.0], [7.5, 727.0], [7.6, 728.0], [7.7, 729.0], [7.8, 730.0], [7.9, 730.0], [8.0, 730.0], [8.1, 731.0], [8.2, 731.0], [8.3, 732.0], [8.4, 732.0], [8.5, 732.0], [8.6, 734.0], [8.7, 734.0], [8.8, 734.0], [8.9, 735.0], [9.0, 735.0], [9.1, 736.0], [9.2, 736.0], [9.3, 737.0], [9.4, 737.0], [9.5, 737.0], [9.6, 738.0], [9.7, 738.0], [9.8, 738.0], [9.9, 739.0], [10.0, 739.0], [10.1, 739.0], [10.2, 739.0], [10.3, 739.0], [10.4, 740.0], [10.5, 740.0], [10.6, 740.0], [10.7, 740.0], [10.8, 741.0], [10.9, 741.0], [11.0, 741.0], [11.1, 742.0], [11.2, 742.0], [11.3, 743.0], [11.4, 743.0], [11.5, 743.0], [11.6, 744.0], [11.7, 744.0], [11.8, 745.0], [11.9, 745.0], [12.0, 745.0], [12.1, 746.0], [12.2, 746.0], [12.3, 746.0], [12.4, 747.0], [12.5, 747.0], [12.6, 747.0], [12.7, 747.0], [12.8, 748.0], [12.9, 748.0], [13.0, 748.0], [13.1, 749.0], [13.2, 749.0], [13.3, 749.0], [13.4, 750.0], [13.5, 750.0], [13.6, 750.0], [13.7, 751.0], [13.8, 751.0], [13.9, 751.0], [14.0, 751.0], [14.1, 752.0], [14.2, 752.0], [14.3, 752.0], [14.4, 752.0], [14.5, 753.0], [14.6, 753.0], [14.7, 753.0], [14.8, 753.0], [14.9, 753.0], [15.0, 754.0], [15.1, 754.0], [15.2, 754.0], [15.3, 754.0], [15.4, 754.0], [15.5, 754.0], [15.6, 755.0], [15.7, 755.0], [15.8, 755.0], [15.9, 755.0], [16.0, 756.0], [16.1, 756.0], [16.2, 756.0], [16.3, 756.0], [16.4, 756.0], [16.5, 757.0], [16.6, 757.0], [16.7, 757.0], [16.8, 757.0], [16.9, 757.0], [17.0, 757.0], [17.1, 758.0], [17.2, 759.0], [17.3, 759.0], [17.4, 759.0], [17.5, 759.0], [17.6, 760.0], [17.7, 760.0], [17.8, 760.0], [17.9, 761.0], [18.0, 761.0], [18.1, 761.0], [18.2, 762.0], [18.3, 762.0], [18.4, 762.0], [18.5, 762.0], [18.6, 762.0], [18.7, 762.0], [18.8, 762.0], [18.9, 763.0], [19.0, 763.0], [19.1, 763.0], [19.2, 763.0], [19.3, 764.0], [19.4, 764.0], [19.5, 764.0], [19.6, 764.0], [19.7, 765.0], [19.8, 765.0], [19.9, 765.0], [20.0, 765.0], [20.1, 765.0], [20.2, 765.0], [20.3, 765.0], [20.4, 766.0], [20.5, 766.0], [20.6, 766.0], [20.7, 766.0], [20.8, 767.0], [20.9, 767.0], [21.0, 767.0], [21.1, 768.0], [21.2, 768.0], [21.3, 769.0], [21.4, 769.0], [21.5, 769.0], [21.6, 769.0], [21.7, 769.0], [21.8, 770.0], [21.9, 770.0], [22.0, 770.0], [22.1, 770.0], [22.2, 771.0], [22.3, 771.0], [22.4, 771.0], [22.5, 771.0], [22.6, 771.0], [22.7, 771.0], [22.8, 772.0], [22.9, 772.0], [23.0, 772.0], [23.1, 772.0], [23.2, 772.0], [23.3, 773.0], [23.4, 773.0], [23.5, 773.0], [23.6, 773.0], [23.7, 774.0], [23.8, 774.0], [23.9, 774.0], [24.0, 775.0], [24.1, 775.0], [24.2, 775.0], [24.3, 775.0], [24.4, 776.0], [24.5, 776.0], [24.6, 776.0], [24.7, 776.0], [24.8, 776.0], [24.9, 776.0], [25.0, 777.0], [25.1, 777.0], [25.2, 777.0], [25.3, 777.0], [25.4, 778.0], [25.5, 778.0], [25.6, 778.0], [25.7, 778.0], [25.8, 778.0], [25.9, 778.0], [26.0, 779.0], [26.1, 779.0], [26.2, 779.0], [26.3, 779.0], [26.4, 779.0], [26.5, 779.0], [26.6, 780.0], [26.7, 780.0], [26.8, 780.0], [26.9, 780.0], [27.0, 780.0], [27.1, 780.0], [27.2, 781.0], [27.3, 781.0], [27.4, 781.0], [27.5, 781.0], [27.6, 782.0], [27.7, 782.0], [27.8, 782.0], [27.9, 783.0], [28.0, 783.0], [28.1, 783.0], [28.2, 784.0], [28.3, 784.0], [28.4, 784.0], [28.5, 784.0], [28.6, 785.0], [28.7, 785.0], [28.8, 785.0], [28.9, 785.0], [29.0, 785.0], [29.1, 786.0], [29.2, 786.0], [29.3, 786.0], [29.4, 786.0], [29.5, 786.0], [29.6, 786.0], [29.7, 787.0], [29.8, 787.0], [29.9, 787.0], [30.0, 787.0], [30.1, 787.0], [30.2, 788.0], [30.3, 788.0], [30.4, 788.0], [30.5, 788.0], [30.6, 788.0], [30.7, 788.0], [30.8, 788.0], [30.9, 789.0], [31.0, 789.0], [31.1, 789.0], [31.2, 789.0], [31.3, 789.0], [31.4, 789.0], [31.5, 790.0], [31.6, 790.0], [31.7, 790.0], [31.8, 790.0], [31.9, 791.0], [32.0, 791.0], [32.1, 791.0], [32.2, 791.0], [32.3, 792.0], [32.4, 792.0], [32.5, 792.0], [32.6, 792.0], [32.7, 792.0], [32.8, 792.0], [32.9, 793.0], [33.0, 793.0], [33.1, 794.0], [33.2, 794.0], [33.3, 794.0], [33.4, 795.0], [33.5, 795.0], [33.6, 795.0], [33.7, 795.0], [33.8, 795.0], [33.9, 796.0], [34.0, 796.0], [34.1, 796.0], [34.2, 797.0], [34.3, 797.0], [34.4, 798.0], [34.5, 798.0], [34.6, 798.0], [34.7, 798.0], [34.8, 798.0], [34.9, 798.0], [35.0, 799.0], [35.1, 799.0], [35.2, 799.0], [35.3, 799.0], [35.4, 800.0], [35.5, 800.0], [35.6, 800.0], [35.7, 800.0], [35.8, 800.0], [35.9, 801.0], [36.0, 801.0], [36.1, 801.0], [36.2, 801.0], [36.3, 801.0], [36.4, 801.0], [36.5, 802.0], [36.6, 802.0], [36.7, 802.0], [36.8, 802.0], [36.9, 802.0], [37.0, 802.0], [37.1, 803.0], [37.2, 803.0], [37.3, 803.0], [37.4, 803.0], [37.5, 803.0], [37.6, 803.0], [37.7, 804.0], [37.8, 804.0], [37.9, 804.0], [38.0, 804.0], [38.1, 805.0], [38.2, 805.0], [38.3, 805.0], [38.4, 805.0], [38.5, 805.0], [38.6, 806.0], [38.7, 806.0], [38.8, 806.0], [38.9, 806.0], [39.0, 806.0], [39.1, 807.0], [39.2, 807.0], [39.3, 807.0], [39.4, 807.0], [39.5, 807.0], [39.6, 807.0], [39.7, 807.0], [39.8, 808.0], [39.9, 808.0], [40.0, 808.0], [40.1, 808.0], [40.2, 808.0], [40.3, 808.0], [40.4, 809.0], [40.5, 809.0], [40.6, 809.0], [40.7, 809.0], [40.8, 809.0], [40.9, 809.0], [41.0, 810.0], [41.1, 810.0], [41.2, 810.0], [41.3, 810.0], [41.4, 811.0], [41.5, 811.0], [41.6, 811.0], [41.7, 811.0], [41.8, 811.0], [41.9, 811.0], [42.0, 811.0], [42.1, 812.0], [42.2, 812.0], [42.3, 812.0], [42.4, 812.0], [42.5, 813.0], [42.6, 813.0], [42.7, 813.0], [42.8, 813.0], [42.9, 813.0], [43.0, 814.0], [43.1, 814.0], [43.2, 814.0], [43.3, 814.0], [43.4, 815.0], [43.5, 815.0], [43.6, 815.0], [43.7, 815.0], [43.8, 815.0], [43.9, 815.0], [44.0, 816.0], [44.1, 816.0], [44.2, 816.0], [44.3, 816.0], [44.4, 817.0], [44.5, 817.0], [44.6, 817.0], [44.7, 817.0], [44.8, 817.0], [44.9, 818.0], [45.0, 818.0], [45.1, 818.0], [45.2, 818.0], [45.3, 818.0], [45.4, 818.0], [45.5, 819.0], [45.6, 819.0], [45.7, 819.0], [45.8, 819.0], [45.9, 819.0], [46.0, 819.0], [46.1, 820.0], [46.2, 820.0], [46.3, 821.0], [46.4, 821.0], [46.5, 821.0], [46.6, 821.0], [46.7, 821.0], [46.8, 821.0], [46.9, 822.0], [47.0, 822.0], [47.1, 822.0], [47.2, 822.0], [47.3, 822.0], [47.4, 822.0], [47.5, 823.0], [47.6, 823.0], [47.7, 823.0], [47.8, 823.0], [47.9, 824.0], [48.0, 824.0], [48.1, 824.0], [48.2, 824.0], [48.3, 825.0], [48.4, 825.0], [48.5, 825.0], [48.6, 825.0], [48.7, 826.0], [48.8, 826.0], [48.9, 826.0], [49.0, 826.0], [49.1, 826.0], [49.2, 827.0], [49.3, 827.0], [49.4, 827.0], [49.5, 827.0], [49.6, 827.0], [49.7, 827.0], [49.8, 827.0], [49.9, 827.0], [50.0, 828.0], [50.1, 828.0], [50.2, 828.0], [50.3, 828.0], [50.4, 829.0], [50.5, 829.0], [50.6, 830.0], [50.7, 830.0], [50.8, 830.0], [50.9, 830.0], [51.0, 830.0], [51.1, 831.0], [51.2, 831.0], [51.3, 831.0], [51.4, 831.0], [51.5, 832.0], [51.6, 832.0], [51.7, 832.0], [51.8, 832.0], [51.9, 832.0], [52.0, 832.0], [52.1, 833.0], [52.2, 833.0], [52.3, 833.0], [52.4, 833.0], [52.5, 833.0], [52.6, 834.0], [52.7, 834.0], [52.8, 834.0], [52.9, 834.0], [53.0, 835.0], [53.1, 835.0], [53.2, 835.0], [53.3, 836.0], [53.4, 836.0], [53.5, 836.0], [53.6, 836.0], [53.7, 836.0], [53.8, 837.0], [53.9, 837.0], [54.0, 837.0], [54.1, 837.0], [54.2, 838.0], [54.3, 838.0], [54.4, 838.0], [54.5, 838.0], [54.6, 839.0], [54.7, 839.0], [54.8, 839.0], [54.9, 839.0], [55.0, 839.0], [55.1, 839.0], [55.2, 840.0], [55.3, 840.0], [55.4, 840.0], [55.5, 840.0], [55.6, 840.0], [55.7, 840.0], [55.8, 840.0], [55.9, 840.0], [56.0, 840.0], [56.1, 841.0], [56.2, 841.0], [56.3, 842.0], [56.4, 842.0], [56.5, 842.0], [56.6, 842.0], [56.7, 842.0], [56.8, 842.0], [56.9, 842.0], [57.0, 843.0], [57.1, 843.0], [57.2, 843.0], [57.3, 844.0], [57.4, 844.0], [57.5, 844.0], [57.6, 844.0], [57.7, 844.0], [57.8, 845.0], [57.9, 845.0], [58.0, 845.0], [58.1, 846.0], [58.2, 846.0], [58.3, 846.0], [58.4, 846.0], [58.5, 846.0], [58.6, 847.0], [58.7, 847.0], [58.8, 847.0], [58.9, 847.0], [59.0, 848.0], [59.1, 848.0], [59.2, 848.0], [59.3, 848.0], [59.4, 848.0], [59.5, 848.0], [59.6, 848.0], [59.7, 848.0], [59.8, 849.0], [59.9, 849.0], [60.0, 849.0], [60.1, 849.0], [60.2, 849.0], [60.3, 850.0], [60.4, 850.0], [60.5, 851.0], [60.6, 851.0], [60.7, 851.0], [60.8, 851.0], [60.9, 851.0], [61.0, 851.0], [61.1, 852.0], [61.2, 852.0], [61.3, 852.0], [61.4, 852.0], [61.5, 853.0], [61.6, 853.0], [61.7, 853.0], [61.8, 853.0], [61.9, 853.0], [62.0, 853.0], [62.1, 853.0], [62.2, 854.0], [62.3, 854.0], [62.4, 854.0], [62.5, 855.0], [62.6, 855.0], [62.7, 855.0], [62.8, 856.0], [62.9, 856.0], [63.0, 856.0], [63.1, 856.0], [63.2, 856.0], [63.3, 857.0], [63.4, 857.0], [63.5, 857.0], [63.6, 858.0], [63.7, 858.0], [63.8, 859.0], [63.9, 859.0], [64.0, 859.0], [64.1, 859.0], [64.2, 859.0], [64.3, 859.0], [64.4, 860.0], [64.5, 860.0], [64.6, 860.0], [64.7, 861.0], [64.8, 861.0], [64.9, 861.0], [65.0, 861.0], [65.1, 861.0], [65.2, 861.0], [65.3, 862.0], [65.4, 862.0], [65.5, 862.0], [65.6, 862.0], [65.7, 863.0], [65.8, 863.0], [65.9, 863.0], [66.0, 864.0], [66.1, 864.0], [66.2, 864.0], [66.3, 864.0], [66.4, 864.0], [66.5, 865.0], [66.6, 865.0], [66.7, 865.0], [66.8, 865.0], [66.9, 866.0], [67.0, 866.0], [67.1, 866.0], [67.2, 866.0], [67.3, 867.0], [67.4, 867.0], [67.5, 867.0], [67.6, 867.0], [67.7, 868.0], [67.8, 868.0], [67.9, 868.0], [68.0, 868.0], [68.1, 869.0], [68.2, 869.0], [68.3, 869.0], [68.4, 869.0], [68.5, 870.0], [68.6, 870.0], [68.7, 870.0], [68.8, 870.0], [68.9, 871.0], [69.0, 871.0], [69.1, 871.0], [69.2, 871.0], [69.3, 872.0], [69.4, 872.0], [69.5, 872.0], [69.6, 872.0], [69.7, 873.0], [69.8, 873.0], [69.9, 873.0], [70.0, 873.0], [70.1, 873.0], [70.2, 874.0], [70.3, 874.0], [70.4, 874.0], [70.5, 874.0], [70.6, 874.0], [70.7, 875.0], [70.8, 875.0], [70.9, 875.0], [71.0, 876.0], [71.1, 876.0], [71.2, 876.0], [71.3, 876.0], [71.4, 876.0], [71.5, 877.0], [71.6, 877.0], [71.7, 877.0], [71.8, 877.0], [71.9, 878.0], [72.0, 878.0], [72.1, 879.0], [72.2, 879.0], [72.3, 879.0], [72.4, 879.0], [72.5, 879.0], [72.6, 880.0], [72.7, 880.0], [72.8, 880.0], [72.9, 881.0], [73.0, 881.0], [73.1, 881.0], [73.2, 881.0], [73.3, 881.0], [73.4, 882.0], [73.5, 882.0], [73.6, 882.0], [73.7, 882.0], [73.8, 883.0], [73.9, 883.0], [74.0, 884.0], [74.1, 884.0], [74.2, 884.0], [74.3, 884.0], [74.4, 885.0], [74.5, 885.0], [74.6, 885.0], [74.7, 886.0], [74.8, 886.0], [74.9, 886.0], [75.0, 887.0], [75.1, 887.0], [75.2, 888.0], [75.3, 888.0], [75.4, 888.0], [75.5, 889.0], [75.6, 889.0], [75.7, 889.0], [75.8, 889.0], [75.9, 890.0], [76.0, 890.0], [76.1, 890.0], [76.2, 890.0], [76.3, 891.0], [76.4, 891.0], [76.5, 891.0], [76.6, 891.0], [76.7, 891.0], [76.8, 892.0], [76.9, 892.0], [77.0, 892.0], [77.1, 892.0], [77.2, 893.0], [77.3, 893.0], [77.4, 893.0], [77.5, 894.0], [77.6, 894.0], [77.7, 894.0], [77.8, 895.0], [77.9, 895.0], [78.0, 895.0], [78.1, 895.0], [78.2, 896.0], [78.3, 896.0], [78.4, 897.0], [78.5, 897.0], [78.6, 897.0], [78.7, 898.0], [78.8, 898.0], [78.9, 898.0], [79.0, 898.0], [79.1, 898.0], [79.2, 899.0], [79.3, 899.0], [79.4, 899.0], [79.5, 900.0], [79.6, 900.0], [79.7, 900.0], [79.8, 901.0], [79.9, 901.0], [80.0, 901.0], [80.1, 901.0], [80.2, 901.0], [80.3, 902.0], [80.4, 902.0], [80.5, 902.0], [80.6, 902.0], [80.7, 903.0], [80.8, 903.0], [80.9, 904.0], [81.0, 904.0], [81.1, 904.0], [81.2, 905.0], [81.3, 905.0], [81.4, 905.0], [81.5, 906.0], [81.6, 906.0], [81.7, 906.0], [81.8, 906.0], [81.9, 906.0], [82.0, 907.0], [82.1, 907.0], [82.2, 907.0], [82.3, 908.0], [82.4, 909.0], [82.5, 910.0], [82.6, 910.0], [82.7, 910.0], [82.8, 911.0], [82.9, 911.0], [83.0, 912.0], [83.1, 912.0], [83.2, 913.0], [83.3, 913.0], [83.4, 913.0], [83.5, 913.0], [83.6, 913.0], [83.7, 914.0], [83.8, 914.0], [83.9, 915.0], [84.0, 915.0], [84.1, 915.0], [84.2, 915.0], [84.3, 916.0], [84.4, 916.0], [84.5, 916.0], [84.6, 916.0], [84.7, 917.0], [84.8, 917.0], [84.9, 918.0], [85.0, 918.0], [85.1, 918.0], [85.2, 918.0], [85.3, 919.0], [85.4, 919.0], [85.5, 919.0], [85.6, 920.0], [85.7, 920.0], [85.8, 920.0], [85.9, 920.0], [86.0, 921.0], [86.1, 921.0], [86.2, 922.0], [86.3, 922.0], [86.4, 923.0], [86.5, 924.0], [86.6, 924.0], [86.7, 925.0], [86.8, 925.0], [86.9, 926.0], [87.0, 927.0], [87.1, 928.0], [87.2, 928.0], [87.3, 928.0], [87.4, 929.0], [87.5, 929.0], [87.6, 930.0], [87.7, 930.0], [87.8, 931.0], [87.9, 931.0], [88.0, 932.0], [88.1, 932.0], [88.2, 933.0], [88.3, 934.0], [88.4, 934.0], [88.5, 936.0], [88.6, 936.0], [88.7, 937.0], [88.8, 937.0], [88.9, 938.0], [89.0, 938.0], [89.1, 939.0], [89.2, 939.0], [89.3, 940.0], [89.4, 941.0], [89.5, 942.0], [89.6, 942.0], [89.7, 943.0], [89.8, 944.0], [89.9, 944.0], [90.0, 945.0], [90.1, 946.0], [90.2, 946.0], [90.3, 947.0], [90.4, 948.0], [90.5, 949.0], [90.6, 950.0], [90.7, 951.0], [90.8, 951.0], [90.9, 951.0], [91.0, 952.0], [91.1, 953.0], [91.2, 953.0], [91.3, 954.0], [91.4, 955.0], [91.5, 955.0], [91.6, 957.0], [91.7, 957.0], [91.8, 958.0], [91.9, 960.0], [92.0, 960.0], [92.1, 961.0], [92.2, 962.0], [92.3, 963.0], [92.4, 965.0], [92.5, 965.0], [92.6, 966.0], [92.7, 966.0], [92.8, 968.0], [92.9, 969.0], [93.0, 970.0], [93.1, 971.0], [93.2, 972.0], [93.3, 973.0], [93.4, 974.0], [93.5, 975.0], [93.6, 976.0], [93.7, 978.0], [93.8, 978.0], [93.9, 981.0], [94.0, 982.0], [94.1, 984.0], [94.2, 984.0], [94.3, 985.0], [94.4, 986.0], [94.5, 986.0], [94.6, 987.0], [94.7, 988.0], [94.8, 992.0], [94.9, 994.0], [95.0, 995.0], [95.1, 996.0], [95.2, 997.0], [95.3, 998.0], [95.4, 1000.0], [95.5, 1004.0], [95.6, 1006.0], [95.7, 1008.0], [95.8, 1009.0], [95.9, 1009.0], [96.0, 1010.0], [96.1, 1011.0], [96.2, 1012.0], [96.3, 1014.0], [96.4, 1017.0], [96.5, 1018.0], [96.6, 1020.0], [96.7, 1022.0], [96.8, 1025.0], [96.9, 1026.0], [97.0, 1028.0], [97.1, 1029.0], [97.2, 1033.0], [97.3, 1034.0], [97.4, 1038.0], [97.5, 1040.0], [97.6, 1047.0], [97.7, 1050.0], [97.8, 1052.0], [97.9, 1063.0], [98.0, 1072.0], [98.1, 1090.0], [98.2, 1110.0], [98.3, 1163.0], [98.4, 1246.0], [98.5, 1275.0], [98.6, 1330.0], [98.7, 1449.0], [98.8, 1622.0], [98.9, 1763.0], [99.0, 1803.0], [99.1, 1881.0], [99.2, 1916.0], [99.3, 1941.0], [99.4, 1962.0], [99.5, 2063.0], [99.6, 2173.0], [99.7, 2346.0], [99.8, 2528.0], [99.9, 3127.0], [100.0, 4284.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 1553.0, "series": [{"data": [[600.0, 95.0], [700.0, 1138.0], [800.0, 1553.0], [900.0, 561.0], [1000.0, 97.0], [1100.0, 8.0], [1200.0, 7.0], [1300.0, 2.0], [1400.0, 5.0], [1500.0, 1.0], [1600.0, 4.0], [1700.0, 2.0], [1800.0, 7.0], [1900.0, 10.0], [2000.0, 4.0], [2100.0, 2.0], [2200.0, 2.0], [2300.0, 3.0], [2400.0, 1.0], [2500.0, 3.0], [2600.0, 1.0], [3100.0, 1.0], [3900.0, 2.0], [4200.0, 1.0], [300.0, 1.0], [500.0, 10.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3476.0, "series": [{"data": [[0.0, 1.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3476.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 44.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 49.12692589875274, "minX": 1.61557326E12, "maxY": 50.0, "series": [{"data": [[1.61557326E12, 50.0], [1.61557332E12, 49.12692589875274]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61557332E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 535.0, "minX": 1.0, "maxY": 875.0, "series": [{"data": [[2.0, 552.0], [35.0, 788.0], [41.0, 812.0], [40.0, 815.0], [43.0, 875.0], [45.0, 844.0], [46.0, 871.0], [49.0, 809.0], [48.0, 842.0], [50.0, 852.3983294930888], [4.0, 593.5], [5.0, 535.0], [6.0, 643.0], [7.0, 667.0], [10.0, 635.0], [11.0, 574.0], [12.0, 662.0], [14.0, 631.0], [15.0, 690.0], [16.0, 785.0], [1.0, 552.0], [17.0, 749.0], [19.0, 767.5], [20.0, 773.0], [21.0, 721.0], [23.0, 759.0], [25.0, 834.5], [26.0, 761.0], [29.0, 782.0], [31.0, 794.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[49.662027833002, 850.9133768815694]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2680.5666666666666, "minX": 1.61557326E12, "maxY": 767492.7, "series": [{"data": [[1.61557326E12, 767492.7], [1.61557332E12, 484750.95]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.61557326E12, 4244.066666666667], [1.61557332E12, 2680.5666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61557332E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 828.1445341159202, "minX": 1.61557326E12, "maxY": 865.2942539388315, "series": [{"data": [[1.61557326E12, 865.2942539388315], [1.61557332E12, 828.1445341159202]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61557332E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 827.6786500366836, "minX": 1.61557326E12, "maxY": 864.79610750695, "series": [{"data": [[1.61557326E12, 864.79610750695], [1.61557332E12, 827.6786500366836]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61557332E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.61557326E12, "maxY": 11.113067655236334, "series": [{"data": [[1.61557326E12, 11.113067655236334], [1.61557332E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61557332E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 387.0, "minX": 1.61557326E12, "maxY": 4284.0, "series": [{"data": [[1.61557326E12, 3127.0], [1.61557332E12, 4284.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.61557326E12, 955.0], [1.61557332E12, 928.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.61557326E12, 1943.4599999999991], [1.61557332E12, 1041.8799999999992]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.61557326E12, 1012.0999999999995], [1.61557332E12, 968.8]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.61557326E12, 387.0], [1.61557332E12, 535.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.61557326E12, 838.0], [1.61557332E12, 813.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61557332E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 749.5, "minX": 17.0, "maxY": 1449.0, "series": [{"data": [[51.0, 876.0], [50.0, 828.5], [52.0, 836.5], [53.0, 857.0], [55.0, 853.0], [54.0, 881.0], [56.0, 895.0], [57.0, 788.0], [59.0, 812.0], [58.0, 862.0], [61.0, 847.0], [60.0, 826.0], [63.0, 842.0], [62.0, 796.5], [67.0, 831.0], [64.0, 862.5], [66.0, 818.5], [65.0, 791.5], [17.0, 1449.0], [71.0, 816.5], [68.0, 784.5], [70.0, 749.5], [75.0, 789.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 75.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 749.0, "minX": 17.0, "maxY": 1448.0, "series": [{"data": [[51.0, 876.0], [50.0, 827.5], [52.0, 836.0], [53.0, 857.0], [55.0, 852.0], [54.0, 881.0], [56.0, 895.0], [57.0, 788.0], [59.0, 812.0], [58.0, 861.0], [61.0, 847.0], [60.0, 826.0], [63.0, 841.0], [62.0, 795.5], [67.0, 831.0], [64.0, 862.5], [66.0, 818.5], [65.0, 791.0], [17.0, 1448.0], [71.0, 816.0], [68.0, 784.0], [70.0, 749.0], [75.0, 788.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 75.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 21.883333333333333, "minX": 1.61557326E12, "maxY": 36.8, "series": [{"data": [[1.61557326E12, 36.8], [1.61557332E12, 21.883333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61557332E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 22.716666666666665, "minX": 1.61557326E12, "maxY": 35.96666666666667, "series": [{"data": [[1.61557326E12, 35.96666666666667], [1.61557332E12, 22.716666666666665]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61557332E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 22.716666666666665, "minX": 1.61557326E12, "maxY": 35.96666666666667, "series": [{"data": [[1.61557326E12, 35.96666666666667], [1.61557332E12, 22.716666666666665]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61557332E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 22.716666666666665, "minX": 1.61557326E12, "maxY": 35.96666666666667, "series": [{"data": [[1.61557326E12, 35.96666666666667], [1.61557332E12, 22.716666666666665]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61557332E12, "title": "Total Transactions Per Second"}},
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

