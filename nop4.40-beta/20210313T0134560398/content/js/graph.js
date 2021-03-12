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
        data: {"result": {"minY": 328.0, "minX": 0.0, "maxY": 42235.0, "series": [{"data": [[0.0, 328.0], [0.1, 363.0], [0.2, 371.0], [0.3, 383.0], [0.4, 383.0], [0.5, 385.0], [0.6, 385.0], [0.7, 388.0], [0.8, 388.0], [0.9, 394.0], [1.0, 394.0], [1.1, 397.0], [1.2, 397.0], [1.3, 399.0], [1.4, 401.0], [1.5, 402.0], [1.6, 403.0], [1.7, 404.0], [1.8, 404.0], [1.9, 405.0], [2.0, 407.0], [2.1, 407.0], [2.2, 408.0], [2.3, 408.0], [2.4, 409.0], [2.5, 410.0], [2.6, 410.0], [2.7, 411.0], [2.8, 414.0], [2.9, 414.0], [3.0, 414.0], [3.1, 414.0], [3.2, 415.0], [3.3, 416.0], [3.4, 416.0], [3.5, 417.0], [3.6, 419.0], [3.7, 420.0], [3.8, 420.0], [3.9, 422.0], [4.0, 422.0], [4.1, 425.0], [4.2, 426.0], [4.3, 427.0], [4.4, 427.0], [4.5, 429.0], [4.6, 430.0], [4.7, 433.0], [4.8, 434.0], [4.9, 436.0], [5.0, 437.0], [5.1, 438.0], [5.2, 441.0], [5.3, 441.0], [5.4, 441.0], [5.5, 443.0], [5.6, 444.0], [5.7, 444.0], [5.8, 445.0], [5.9, 446.0], [6.0, 446.0], [6.1, 450.0], [6.2, 451.0], [6.3, 452.0], [6.4, 453.0], [6.5, 453.0], [6.6, 457.0], [6.7, 457.0], [6.8, 457.0], [6.9, 458.0], [7.0, 459.0], [7.1, 459.0], [7.2, 460.0], [7.3, 460.0], [7.4, 461.0], [7.5, 461.0], [7.6, 462.0], [7.7, 463.0], [7.8, 463.0], [7.9, 463.0], [8.0, 464.0], [8.1, 464.0], [8.2, 465.0], [8.3, 465.0], [8.4, 465.0], [8.5, 467.0], [8.6, 468.0], [8.7, 469.0], [8.8, 471.0], [8.9, 471.0], [9.0, 471.0], [9.1, 472.0], [9.2, 472.0], [9.3, 473.0], [9.4, 473.0], [9.5, 475.0], [9.6, 476.0], [9.7, 476.0], [9.8, 476.0], [9.9, 477.0], [10.0, 477.0], [10.1, 477.0], [10.2, 478.0], [10.3, 478.0], [10.4, 479.0], [10.5, 480.0], [10.6, 480.0], [10.7, 480.0], [10.8, 480.0], [10.9, 481.0], [11.0, 481.0], [11.1, 481.0], [11.2, 482.0], [11.3, 482.0], [11.4, 482.0], [11.5, 482.0], [11.6, 482.0], [11.7, 483.0], [11.8, 483.0], [11.9, 483.0], [12.0, 483.0], [12.1, 484.0], [12.2, 485.0], [12.3, 486.0], [12.4, 486.0], [12.5, 489.0], [12.6, 490.0], [12.7, 490.0], [12.8, 490.0], [12.9, 492.0], [13.0, 493.0], [13.1, 494.0], [13.2, 496.0], [13.3, 496.0], [13.4, 499.0], [13.5, 499.0], [13.6, 499.0], [13.7, 500.0], [13.8, 502.0], [13.9, 502.0], [14.0, 502.0], [14.1, 503.0], [14.2, 503.0], [14.3, 504.0], [14.4, 504.0], [14.5, 506.0], [14.6, 507.0], [14.7, 507.0], [14.8, 508.0], [14.9, 509.0], [15.0, 510.0], [15.1, 511.0], [15.2, 511.0], [15.3, 511.0], [15.4, 512.0], [15.5, 513.0], [15.6, 515.0], [15.7, 515.0], [15.8, 516.0], [15.9, 516.0], [16.0, 516.0], [16.1, 517.0], [16.2, 519.0], [16.3, 519.0], [16.4, 521.0], [16.5, 522.0], [16.6, 522.0], [16.7, 523.0], [16.8, 523.0], [16.9, 523.0], [17.0, 524.0], [17.1, 524.0], [17.2, 525.0], [17.3, 525.0], [17.4, 525.0], [17.5, 526.0], [17.6, 526.0], [17.7, 526.0], [17.8, 526.0], [17.9, 527.0], [18.0, 527.0], [18.1, 529.0], [18.2, 529.0], [18.3, 530.0], [18.4, 531.0], [18.5, 531.0], [18.6, 532.0], [18.7, 532.0], [18.8, 532.0], [18.9, 533.0], [19.0, 533.0], [19.1, 533.0], [19.2, 534.0], [19.3, 534.0], [19.4, 535.0], [19.5, 535.0], [19.6, 536.0], [19.7, 537.0], [19.8, 537.0], [19.9, 538.0], [20.0, 538.0], [20.1, 539.0], [20.2, 539.0], [20.3, 540.0], [20.4, 541.0], [20.5, 542.0], [20.6, 543.0], [20.7, 543.0], [20.8, 543.0], [20.9, 543.0], [21.0, 545.0], [21.1, 546.0], [21.2, 546.0], [21.3, 546.0], [21.4, 548.0], [21.5, 548.0], [21.6, 550.0], [21.7, 550.0], [21.8, 551.0], [21.9, 553.0], [22.0, 553.0], [22.1, 553.0], [22.2, 553.0], [22.3, 554.0], [22.4, 555.0], [22.5, 556.0], [22.6, 556.0], [22.7, 558.0], [22.8, 558.0], [22.9, 558.0], [23.0, 560.0], [23.1, 560.0], [23.2, 561.0], [23.3, 562.0], [23.4, 563.0], [23.5, 563.0], [23.6, 563.0], [23.7, 563.0], [23.8, 565.0], [23.9, 565.0], [24.0, 566.0], [24.1, 566.0], [24.2, 566.0], [24.3, 568.0], [24.4, 569.0], [24.5, 569.0], [24.6, 570.0], [24.7, 570.0], [24.8, 570.0], [24.9, 571.0], [25.0, 571.0], [25.1, 571.0], [25.2, 572.0], [25.3, 572.0], [25.4, 572.0], [25.5, 573.0], [25.6, 573.0], [25.7, 574.0], [25.8, 574.0], [25.9, 574.0], [26.0, 575.0], [26.1, 575.0], [26.2, 576.0], [26.3, 576.0], [26.4, 576.0], [26.5, 576.0], [26.6, 577.0], [26.7, 577.0], [26.8, 578.0], [26.9, 578.0], [27.0, 578.0], [27.1, 578.0], [27.2, 578.0], [27.3, 578.0], [27.4, 580.0], [27.5, 580.0], [27.6, 580.0], [27.7, 581.0], [27.8, 582.0], [27.9, 584.0], [28.0, 584.0], [28.1, 584.0], [28.2, 584.0], [28.3, 585.0], [28.4, 585.0], [28.5, 585.0], [28.6, 585.0], [28.7, 586.0], [28.8, 586.0], [28.9, 587.0], [29.0, 587.0], [29.1, 588.0], [29.2, 588.0], [29.3, 589.0], [29.4, 589.0], [29.5, 589.0], [29.6, 590.0], [29.7, 590.0], [29.8, 591.0], [29.9, 592.0], [30.0, 592.0], [30.1, 593.0], [30.2, 594.0], [30.3, 594.0], [30.4, 594.0], [30.5, 594.0], [30.6, 594.0], [30.7, 596.0], [30.8, 596.0], [30.9, 596.0], [31.0, 597.0], [31.1, 597.0], [31.2, 597.0], [31.3, 598.0], [31.4, 598.0], [31.5, 599.0], [31.6, 599.0], [31.7, 599.0], [31.8, 600.0], [31.9, 600.0], [32.0, 600.0], [32.1, 600.0], [32.2, 600.0], [32.3, 600.0], [32.4, 600.0], [32.5, 601.0], [32.6, 602.0], [32.7, 602.0], [32.8, 602.0], [32.9, 602.0], [33.0, 602.0], [33.1, 603.0], [33.2, 603.0], [33.3, 604.0], [33.4, 605.0], [33.5, 606.0], [33.6, 606.0], [33.7, 606.0], [33.8, 606.0], [33.9, 606.0], [34.0, 606.0], [34.1, 606.0], [34.2, 607.0], [34.3, 607.0], [34.4, 608.0], [34.5, 609.0], [34.6, 609.0], [34.7, 610.0], [34.8, 610.0], [34.9, 610.0], [35.0, 612.0], [35.1, 612.0], [35.2, 613.0], [35.3, 613.0], [35.4, 613.0], [35.5, 613.0], [35.6, 614.0], [35.7, 615.0], [35.8, 616.0], [35.9, 616.0], [36.0, 618.0], [36.1, 619.0], [36.2, 619.0], [36.3, 619.0], [36.4, 620.0], [36.5, 620.0], [36.6, 620.0], [36.7, 620.0], [36.8, 620.0], [36.9, 622.0], [37.0, 622.0], [37.1, 623.0], [37.2, 623.0], [37.3, 624.0], [37.4, 624.0], [37.5, 624.0], [37.6, 625.0], [37.7, 625.0], [37.8, 625.0], [37.9, 625.0], [38.0, 626.0], [38.1, 626.0], [38.2, 626.0], [38.3, 626.0], [38.4, 627.0], [38.5, 627.0], [38.6, 627.0], [38.7, 627.0], [38.8, 627.0], [38.9, 627.0], [39.0, 628.0], [39.1, 628.0], [39.2, 628.0], [39.3, 629.0], [39.4, 629.0], [39.5, 630.0], [39.6, 630.0], [39.7, 631.0], [39.8, 631.0], [39.9, 631.0], [40.0, 631.0], [40.1, 631.0], [40.2, 632.0], [40.3, 632.0], [40.4, 633.0], [40.5, 633.0], [40.6, 633.0], [40.7, 633.0], [40.8, 634.0], [40.9, 634.0], [41.0, 635.0], [41.1, 635.0], [41.2, 635.0], [41.3, 636.0], [41.4, 636.0], [41.5, 636.0], [41.6, 636.0], [41.7, 637.0], [41.8, 637.0], [41.9, 638.0], [42.0, 638.0], [42.1, 638.0], [42.2, 638.0], [42.3, 638.0], [42.4, 638.0], [42.5, 639.0], [42.6, 639.0], [42.7, 639.0], [42.8, 639.0], [42.9, 640.0], [43.0, 640.0], [43.1, 641.0], [43.2, 642.0], [43.3, 642.0], [43.4, 642.0], [43.5, 642.0], [43.6, 642.0], [43.7, 642.0], [43.8, 643.0], [43.9, 643.0], [44.0, 643.0], [44.1, 644.0], [44.2, 644.0], [44.3, 644.0], [44.4, 644.0], [44.5, 644.0], [44.6, 645.0], [44.7, 645.0], [44.8, 646.0], [44.9, 646.0], [45.0, 646.0], [45.1, 647.0], [45.2, 647.0], [45.3, 647.0], [45.4, 648.0], [45.5, 648.0], [45.6, 648.0], [45.7, 649.0], [45.8, 649.0], [45.9, 649.0], [46.0, 650.0], [46.1, 650.0], [46.2, 650.0], [46.3, 651.0], [46.4, 651.0], [46.5, 653.0], [46.6, 654.0], [46.7, 654.0], [46.8, 654.0], [46.9, 654.0], [47.0, 655.0], [47.1, 656.0], [47.2, 656.0], [47.3, 656.0], [47.4, 656.0], [47.5, 657.0], [47.6, 657.0], [47.7, 657.0], [47.8, 658.0], [47.9, 658.0], [48.0, 659.0], [48.1, 660.0], [48.2, 660.0], [48.3, 660.0], [48.4, 661.0], [48.5, 661.0], [48.6, 661.0], [48.7, 662.0], [48.8, 662.0], [48.9, 663.0], [49.0, 663.0], [49.1, 663.0], [49.2, 663.0], [49.3, 663.0], [49.4, 664.0], [49.5, 665.0], [49.6, 666.0], [49.7, 667.0], [49.8, 667.0], [49.9, 667.0], [50.0, 667.0], [50.1, 667.0], [50.2, 668.0], [50.3, 670.0], [50.4, 670.0], [50.5, 670.0], [50.6, 671.0], [50.7, 671.0], [50.8, 672.0], [50.9, 672.0], [51.0, 672.0], [51.1, 673.0], [51.2, 673.0], [51.3, 673.0], [51.4, 674.0], [51.5, 675.0], [51.6, 675.0], [51.7, 676.0], [51.8, 677.0], [51.9, 677.0], [52.0, 678.0], [52.1, 678.0], [52.2, 680.0], [52.3, 680.0], [52.4, 680.0], [52.5, 682.0], [52.6, 682.0], [52.7, 683.0], [52.8, 683.0], [52.9, 683.0], [53.0, 683.0], [53.1, 684.0], [53.2, 684.0], [53.3, 685.0], [53.4, 685.0], [53.5, 685.0], [53.6, 686.0], [53.7, 687.0], [53.8, 687.0], [53.9, 687.0], [54.0, 687.0], [54.1, 688.0], [54.2, 689.0], [54.3, 689.0], [54.4, 689.0], [54.5, 690.0], [54.6, 691.0], [54.7, 692.0], [54.8, 692.0], [54.9, 692.0], [55.0, 693.0], [55.1, 693.0], [55.2, 694.0], [55.3, 694.0], [55.4, 695.0], [55.5, 695.0], [55.6, 695.0], [55.7, 696.0], [55.8, 697.0], [55.9, 697.0], [56.0, 697.0], [56.1, 697.0], [56.2, 699.0], [56.3, 700.0], [56.4, 700.0], [56.5, 701.0], [56.6, 704.0], [56.7, 704.0], [56.8, 704.0], [56.9, 705.0], [57.0, 705.0], [57.1, 705.0], [57.2, 707.0], [57.3, 708.0], [57.4, 708.0], [57.5, 708.0], [57.6, 710.0], [57.7, 711.0], [57.8, 711.0], [57.9, 711.0], [58.0, 713.0], [58.1, 713.0], [58.2, 713.0], [58.3, 714.0], [58.4, 714.0], [58.5, 714.0], [58.6, 715.0], [58.7, 716.0], [58.8, 718.0], [58.9, 719.0], [59.0, 719.0], [59.1, 719.0], [59.2, 721.0], [59.3, 721.0], [59.4, 721.0], [59.5, 721.0], [59.6, 722.0], [59.7, 722.0], [59.8, 723.0], [59.9, 723.0], [60.0, 723.0], [60.1, 723.0], [60.2, 723.0], [60.3, 725.0], [60.4, 725.0], [60.5, 725.0], [60.6, 726.0], [60.7, 726.0], [60.8, 726.0], [60.9, 727.0], [61.0, 728.0], [61.1, 728.0], [61.2, 729.0], [61.3, 729.0], [61.4, 730.0], [61.5, 730.0], [61.6, 730.0], [61.7, 730.0], [61.8, 730.0], [61.9, 730.0], [62.0, 731.0], [62.1, 731.0], [62.2, 731.0], [62.3, 732.0], [62.4, 733.0], [62.5, 734.0], [62.6, 734.0], [62.7, 734.0], [62.8, 735.0], [62.9, 735.0], [63.0, 735.0], [63.1, 735.0], [63.2, 736.0], [63.3, 736.0], [63.4, 736.0], [63.5, 737.0], [63.6, 737.0], [63.7, 737.0], [63.8, 738.0], [63.9, 738.0], [64.0, 738.0], [64.1, 738.0], [64.2, 739.0], [64.3, 739.0], [64.4, 739.0], [64.5, 741.0], [64.6, 741.0], [64.7, 742.0], [64.8, 742.0], [64.9, 742.0], [65.0, 742.0], [65.1, 743.0], [65.2, 743.0], [65.3, 744.0], [65.4, 744.0], [65.5, 744.0], [65.6, 744.0], [65.7, 745.0], [65.8, 745.0], [65.9, 746.0], [66.0, 746.0], [66.1, 746.0], [66.2, 746.0], [66.3, 747.0], [66.4, 748.0], [66.5, 748.0], [66.6, 748.0], [66.7, 749.0], [66.8, 749.0], [66.9, 749.0], [67.0, 750.0], [67.1, 751.0], [67.2, 751.0], [67.3, 752.0], [67.4, 752.0], [67.5, 752.0], [67.6, 753.0], [67.7, 753.0], [67.8, 753.0], [67.9, 753.0], [68.0, 754.0], [68.1, 755.0], [68.2, 755.0], [68.3, 755.0], [68.4, 757.0], [68.5, 757.0], [68.6, 758.0], [68.7, 759.0], [68.8, 759.0], [68.9, 759.0], [69.0, 760.0], [69.1, 760.0], [69.2, 761.0], [69.3, 761.0], [69.4, 762.0], [69.5, 763.0], [69.6, 763.0], [69.7, 764.0], [69.8, 764.0], [69.9, 764.0], [70.0, 765.0], [70.1, 766.0], [70.2, 766.0], [70.3, 766.0], [70.4, 766.0], [70.5, 766.0], [70.6, 767.0], [70.7, 768.0], [70.8, 769.0], [70.9, 770.0], [71.0, 770.0], [71.1, 772.0], [71.2, 773.0], [71.3, 773.0], [71.4, 773.0], [71.5, 773.0], [71.6, 774.0], [71.7, 775.0], [71.8, 775.0], [71.9, 777.0], [72.0, 778.0], [72.1, 778.0], [72.2, 778.0], [72.3, 779.0], [72.4, 779.0], [72.5, 780.0], [72.6, 780.0], [72.7, 780.0], [72.8, 780.0], [72.9, 781.0], [73.0, 782.0], [73.1, 785.0], [73.2, 785.0], [73.3, 786.0], [73.4, 786.0], [73.5, 787.0], [73.6, 788.0], [73.7, 788.0], [73.8, 789.0], [73.9, 789.0], [74.0, 790.0], [74.1, 791.0], [74.2, 791.0], [74.3, 792.0], [74.4, 792.0], [74.5, 793.0], [74.6, 793.0], [74.7, 793.0], [74.8, 794.0], [74.9, 794.0], [75.0, 795.0], [75.1, 796.0], [75.2, 797.0], [75.3, 797.0], [75.4, 798.0], [75.5, 799.0], [75.6, 799.0], [75.7, 800.0], [75.8, 801.0], [75.9, 802.0], [76.0, 802.0], [76.1, 803.0], [76.2, 803.0], [76.3, 804.0], [76.4, 805.0], [76.5, 805.0], [76.6, 805.0], [76.7, 805.0], [76.8, 808.0], [76.9, 808.0], [77.0, 809.0], [77.1, 809.0], [77.2, 810.0], [77.3, 812.0], [77.4, 813.0], [77.5, 813.0], [77.6, 814.0], [77.7, 814.0], [77.8, 814.0], [77.9, 815.0], [78.0, 815.0], [78.1, 815.0], [78.2, 816.0], [78.3, 816.0], [78.4, 817.0], [78.5, 818.0], [78.6, 819.0], [78.7, 820.0], [78.8, 820.0], [78.9, 820.0], [79.0, 821.0], [79.1, 821.0], [79.2, 822.0], [79.3, 824.0], [79.4, 824.0], [79.5, 825.0], [79.6, 825.0], [79.7, 826.0], [79.8, 826.0], [79.9, 827.0], [80.0, 827.0], [80.1, 828.0], [80.2, 828.0], [80.3, 829.0], [80.4, 830.0], [80.5, 831.0], [80.6, 832.0], [80.7, 833.0], [80.8, 834.0], [80.9, 836.0], [81.0, 836.0], [81.1, 836.0], [81.2, 837.0], [81.3, 839.0], [81.4, 839.0], [81.5, 840.0], [81.6, 841.0], [81.7, 841.0], [81.8, 842.0], [81.9, 842.0], [82.0, 844.0], [82.1, 844.0], [82.2, 844.0], [82.3, 846.0], [82.4, 846.0], [82.5, 846.0], [82.6, 848.0], [82.7, 848.0], [82.8, 850.0], [82.9, 850.0], [83.0, 850.0], [83.1, 852.0], [83.2, 853.0], [83.3, 853.0], [83.4, 855.0], [83.5, 855.0], [83.6, 856.0], [83.7, 856.0], [83.8, 856.0], [83.9, 860.0], [84.0, 860.0], [84.1, 861.0], [84.2, 863.0], [84.3, 863.0], [84.4, 863.0], [84.5, 865.0], [84.6, 867.0], [84.7, 867.0], [84.8, 867.0], [84.9, 867.0], [85.0, 869.0], [85.1, 869.0], [85.2, 869.0], [85.3, 870.0], [85.4, 871.0], [85.5, 871.0], [85.6, 872.0], [85.7, 872.0], [85.8, 879.0], [85.9, 880.0], [86.0, 880.0], [86.1, 882.0], [86.2, 887.0], [86.3, 888.0], [86.4, 889.0], [86.5, 892.0], [86.6, 893.0], [86.7, 899.0], [86.8, 899.0], [86.9, 900.0], [87.0, 901.0], [87.1, 906.0], [87.2, 908.0], [87.3, 908.0], [87.4, 912.0], [87.5, 914.0], [87.6, 914.0], [87.7, 915.0], [87.8, 916.0], [87.9, 918.0], [88.0, 921.0], [88.1, 921.0], [88.2, 923.0], [88.3, 923.0], [88.4, 923.0], [88.5, 924.0], [88.6, 924.0], [88.7, 932.0], [88.8, 933.0], [88.9, 933.0], [89.0, 936.0], [89.1, 940.0], [89.2, 941.0], [89.3, 943.0], [89.4, 946.0], [89.5, 946.0], [89.6, 947.0], [89.7, 948.0], [89.8, 950.0], [89.9, 951.0], [90.0, 953.0], [90.1, 961.0], [90.2, 962.0], [90.3, 969.0], [90.4, 974.0], [90.5, 981.0], [90.6, 982.0], [90.7, 984.0], [90.8, 986.0], [90.9, 989.0], [91.0, 1001.0], [91.1, 1010.0], [91.2, 1015.0], [91.3, 1024.0], [91.4, 1028.0], [91.5, 1029.0], [91.6, 1059.0], [91.7, 1074.0], [91.8, 1079.0], [91.9, 1103.0], [92.0, 1147.0], [92.1, 1172.0], [92.2, 1185.0], [92.3, 1188.0], [92.4, 1202.0], [92.5, 1209.0], [92.6, 1216.0], [92.7, 1221.0], [92.8, 1222.0], [92.9, 1225.0], [93.0, 1226.0], [93.1, 1228.0], [93.2, 1238.0], [93.3, 1240.0], [93.4, 1242.0], [93.5, 1248.0], [93.6, 1251.0], [93.7, 1252.0], [93.8, 1256.0], [93.9, 1256.0], [94.0, 1261.0], [94.1, 1261.0], [94.2, 1263.0], [94.3, 1268.0], [94.4, 1285.0], [94.5, 1291.0], [94.6, 1308.0], [94.7, 1308.0], [94.8, 1311.0], [94.9, 1323.0], [95.0, 1328.0], [95.1, 1338.0], [95.2, 1342.0], [95.3, 1357.0], [95.4, 1380.0], [95.5, 1395.0], [95.6, 1409.0], [95.7, 1449.0], [95.8, 1522.0], [95.9, 15535.0], [96.0, 16005.0], [96.1, 16026.0], [96.2, 16220.0], [96.3, 16330.0], [96.4, 25838.0], [96.5, 25851.0], [96.6, 25867.0], [96.7, 25868.0], [96.8, 25873.0], [96.9, 41326.0], [97.0, 41337.0], [97.1, 41346.0], [97.2, 41397.0], [97.3, 41467.0], [97.4, 41494.0], [97.5, 41503.0], [97.6, 41556.0], [97.7, 41568.0], [97.8, 41614.0], [97.9, 41652.0], [98.0, 41673.0], [98.1, 41710.0], [98.2, 41730.0], [98.3, 41754.0], [98.4, 41794.0], [98.5, 41816.0], [98.6, 41831.0], [98.7, 41906.0], [98.8, 41927.0], [98.9, 41954.0], [99.0, 41991.0], [99.1, 42034.0], [99.2, 42091.0], [99.3, 42110.0], [99.4, 42128.0], [99.5, 42190.0], [99.6, 42206.0], [99.7, 42226.0], [99.8, 42231.0], [99.9, 42233.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 335.0, "series": [{"data": [[600.0, 335.0], [700.0, 265.0], [800.0, 152.0], [900.0, 56.0], [15500.0, 1.0], [15700.0, 1.0], [16100.0, 1.0], [16000.0, 2.0], [16200.0, 1.0], [16300.0, 1.0], [1000.0, 13.0], [1100.0, 7.0], [1200.0, 29.0], [1300.0, 14.0], [1400.0, 3.0], [1500.0, 1.0], [25800.0, 7.0], [41900.0, 5.0], [41500.0, 4.0], [41300.0, 5.0], [41700.0, 5.0], [42200.0, 6.0], [41600.0, 5.0], [42000.0, 3.0], [42100.0, 4.0], [41800.0, 3.0], [41400.0, 3.0], [300.0, 19.0], [400.0, 168.0], [500.0, 247.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 42200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 7.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1120.0, "series": [{"data": [[0.0, 188.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1120.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 51.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 7.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 49.111273792093684, "minX": 1.6155705E12, "maxY": 49.111273792093684, "series": [{"data": [[1.6155705E12, 49.111273792093684]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6155705E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 382.0, "minX": 2.0, "maxY": 2247.8641881638837, "series": [{"data": [[33.0, 408.0], [32.0, 563.0], [2.0, 395.5], [34.0, 548.0], [37.0, 416.0], [36.0, 535.0], [39.0, 468.5], [41.0, 526.0], [40.0, 614.0], [43.0, 794.5], [45.0, 783.0], [47.0, 563.0], [46.0, 627.0], [48.0, 634.0], [3.0, 385.0], [50.0, 2247.8641881638837], [4.0, 388.0], [5.0, 461.0], [6.0, 476.0], [8.0, 505.5], [9.0, 471.0], [10.0, 484.0], [12.0, 548.0], [13.0, 445.0], [14.0, 660.0], [15.0, 499.0], [16.0, 502.0], [18.0, 625.5], [19.0, 519.0], [20.0, 516.0], [21.0, 382.0], [22.0, 764.0], [23.0, 459.0], [24.0, 458.0], [26.0, 597.5], [27.0, 565.0], [28.0, 566.0], [29.0, 441.0], [31.0, 545.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[49.111273792093684, 2187.863103953146]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2672.7, "minX": 1.6155705E12, "maxY": 479893.06666666665, "series": [{"data": [[1.6155705E12, 479893.06666666665]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6155705E12, 2672.7]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6155705E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 2187.863103953146, "minX": 1.6155705E12, "maxY": 2187.863103953146, "series": [{"data": [[1.6155705E12, 2187.863103953146]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6155705E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 2105.262079062962, "minX": 1.6155705E12, "maxY": 2105.262079062962, "series": [{"data": [[1.6155705E12, 2105.262079062962]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6155705E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 218.02635431918003, "minX": 1.6155705E12, "maxY": 218.02635431918003, "series": [{"data": [[1.6155705E12, 218.02635431918003]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6155705E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 328.0, "minX": 1.6155705E12, "maxY": 42235.0, "series": [{"data": [[1.6155705E12, 42235.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6155705E12, 947.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6155705E12, 42008.200000000004]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6155705E12, 1300.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6155705E12, 328.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6155705E12, 667.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6155705E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 486.5, "minX": 7.0, "maxY": 41720.0, "series": [{"data": [[37.0, 1251.0], [50.0, 41720.0], [59.0, 759.0], [63.0, 785.0], [67.0, 740.5], [68.0, 660.0], [72.0, 529.5], [73.0, 673.0], [78.0, 621.0], [80.0, 660.0], [81.0, 711.0], [90.0, 590.0], [92.0, 599.0], [100.0, 486.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[7.0, 16026.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 100.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 7.0, "maxY": 41716.5, "series": [{"data": [[37.0, 1251.0], [50.0, 41716.5], [59.0, 758.0], [63.0, 785.0], [67.0, 740.0], [68.0, 660.0], [72.0, 529.0], [73.0, 673.0], [78.0, 620.5], [80.0, 659.5], [81.0, 711.0], [90.0, 590.0], [92.0, 598.0], [100.0, 485.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[7.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 100.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.8333333333333334, "minX": 1.61557044E12, "maxY": 21.933333333333334, "series": [{"data": [[1.6155705E12, 21.933333333333334], [1.61557044E12, 0.8333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6155705E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.6155705E12, "maxY": 22.65, "series": [{"data": [[1.6155705E12, 0.1]], "isOverall": false, "label": "Non HTTP response code: javax.net.ssl.SSLHandshakeException", "isController": false}, {"data": [[1.6155705E12, 22.65]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.6155705E12, 0.016666666666666666]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6155705E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.11666666666666667, "minX": 1.6155705E12, "maxY": 22.65, "series": [{"data": [[1.6155705E12, 0.11666666666666667]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}, {"data": [[1.6155705E12, 22.65]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6155705E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.11666666666666667, "minX": 1.6155705E12, "maxY": 22.65, "series": [{"data": [[1.6155705E12, 22.65]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.6155705E12, 0.11666666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6155705E12, "title": "Total Transactions Per Second"}},
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

