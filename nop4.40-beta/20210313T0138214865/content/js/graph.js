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
        data: {"result": {"minY": 232.0, "minX": 0.0, "maxY": 1659.0, "series": [{"data": [[0.0, 232.0], [0.1, 320.0], [0.2, 337.0], [0.3, 339.0], [0.4, 342.0], [0.5, 350.0], [0.6, 355.0], [0.7, 358.0], [0.8, 362.0], [0.9, 365.0], [1.0, 368.0], [1.1, 369.0], [1.2, 372.0], [1.3, 375.0], [1.4, 377.0], [1.5, 381.0], [1.6, 383.0], [1.7, 385.0], [1.8, 386.0], [1.9, 388.0], [2.0, 391.0], [2.1, 393.0], [2.2, 394.0], [2.3, 395.0], [2.4, 397.0], [2.5, 400.0], [2.6, 400.0], [2.7, 402.0], [2.8, 403.0], [2.9, 404.0], [3.0, 407.0], [3.1, 409.0], [3.2, 412.0], [3.3, 414.0], [3.4, 415.0], [3.5, 416.0], [3.6, 417.0], [3.7, 418.0], [3.8, 420.0], [3.9, 421.0], [4.0, 422.0], [4.1, 423.0], [4.2, 425.0], [4.3, 427.0], [4.4, 427.0], [4.5, 429.0], [4.6, 431.0], [4.7, 432.0], [4.8, 433.0], [4.9, 435.0], [5.0, 436.0], [5.1, 436.0], [5.2, 437.0], [5.3, 438.0], [5.4, 439.0], [5.5, 439.0], [5.6, 440.0], [5.7, 441.0], [5.8, 441.0], [5.9, 442.0], [6.0, 443.0], [6.1, 443.0], [6.2, 443.0], [6.3, 445.0], [6.4, 446.0], [6.5, 446.0], [6.6, 448.0], [6.7, 449.0], [6.8, 450.0], [6.9, 451.0], [7.0, 452.0], [7.1, 452.0], [7.2, 453.0], [7.3, 453.0], [7.4, 455.0], [7.5, 456.0], [7.6, 456.0], [7.7, 458.0], [7.8, 460.0], [7.9, 461.0], [8.0, 462.0], [8.1, 463.0], [8.2, 463.0], [8.3, 464.0], [8.4, 465.0], [8.5, 467.0], [8.6, 467.0], [8.7, 468.0], [8.8, 469.0], [8.9, 470.0], [9.0, 471.0], [9.1, 472.0], [9.2, 473.0], [9.3, 475.0], [9.4, 476.0], [9.5, 477.0], [9.6, 478.0], [9.7, 479.0], [9.8, 480.0], [9.9, 480.0], [10.0, 481.0], [10.1, 481.0], [10.2, 482.0], [10.3, 483.0], [10.4, 484.0], [10.5, 485.0], [10.6, 486.0], [10.7, 487.0], [10.8, 488.0], [10.9, 488.0], [11.0, 491.0], [11.1, 492.0], [11.2, 492.0], [11.3, 493.0], [11.4, 493.0], [11.5, 494.0], [11.6, 496.0], [11.7, 497.0], [11.8, 498.0], [11.9, 499.0], [12.0, 500.0], [12.1, 501.0], [12.2, 501.0], [12.3, 502.0], [12.4, 503.0], [12.5, 504.0], [12.6, 505.0], [12.7, 505.0], [12.8, 507.0], [12.9, 507.0], [13.0, 507.0], [13.1, 508.0], [13.2, 509.0], [13.3, 509.0], [13.4, 510.0], [13.5, 511.0], [13.6, 512.0], [13.7, 512.0], [13.8, 513.0], [13.9, 513.0], [14.0, 514.0], [14.1, 515.0], [14.2, 515.0], [14.3, 516.0], [14.4, 516.0], [14.5, 517.0], [14.6, 518.0], [14.7, 518.0], [14.8, 519.0], [14.9, 519.0], [15.0, 520.0], [15.1, 520.0], [15.2, 520.0], [15.3, 521.0], [15.4, 522.0], [15.5, 523.0], [15.6, 523.0], [15.7, 524.0], [15.8, 524.0], [15.9, 525.0], [16.0, 526.0], [16.1, 526.0], [16.2, 526.0], [16.3, 527.0], [16.4, 528.0], [16.5, 528.0], [16.6, 528.0], [16.7, 529.0], [16.8, 530.0], [16.9, 531.0], [17.0, 531.0], [17.1, 532.0], [17.2, 533.0], [17.3, 534.0], [17.4, 534.0], [17.5, 535.0], [17.6, 535.0], [17.7, 536.0], [17.8, 536.0], [17.9, 537.0], [18.0, 537.0], [18.1, 539.0], [18.2, 539.0], [18.3, 540.0], [18.4, 541.0], [18.5, 541.0], [18.6, 542.0], [18.7, 542.0], [18.8, 543.0], [18.9, 543.0], [19.0, 544.0], [19.1, 545.0], [19.2, 545.0], [19.3, 545.0], [19.4, 545.0], [19.5, 546.0], [19.6, 547.0], [19.7, 548.0], [19.8, 548.0], [19.9, 549.0], [20.0, 549.0], [20.1, 550.0], [20.2, 551.0], [20.3, 552.0], [20.4, 552.0], [20.5, 553.0], [20.6, 553.0], [20.7, 554.0], [20.8, 554.0], [20.9, 555.0], [21.0, 555.0], [21.1, 556.0], [21.2, 556.0], [21.3, 556.0], [21.4, 557.0], [21.5, 558.0], [21.6, 558.0], [21.7, 559.0], [21.8, 559.0], [21.9, 560.0], [22.0, 561.0], [22.1, 561.0], [22.2, 562.0], [22.3, 562.0], [22.4, 563.0], [22.5, 564.0], [22.6, 564.0], [22.7, 565.0], [22.8, 566.0], [22.9, 566.0], [23.0, 567.0], [23.1, 567.0], [23.2, 568.0], [23.3, 568.0], [23.4, 569.0], [23.5, 569.0], [23.6, 570.0], [23.7, 570.0], [23.8, 571.0], [23.9, 571.0], [24.0, 572.0], [24.1, 572.0], [24.2, 574.0], [24.3, 574.0], [24.4, 575.0], [24.5, 576.0], [24.6, 576.0], [24.7, 577.0], [24.8, 577.0], [24.9, 578.0], [25.0, 578.0], [25.1, 579.0], [25.2, 579.0], [25.3, 580.0], [25.4, 581.0], [25.5, 581.0], [25.6, 581.0], [25.7, 582.0], [25.8, 582.0], [25.9, 583.0], [26.0, 583.0], [26.1, 584.0], [26.2, 584.0], [26.3, 584.0], [26.4, 585.0], [26.5, 586.0], [26.6, 586.0], [26.7, 586.0], [26.8, 587.0], [26.9, 587.0], [27.0, 587.0], [27.1, 588.0], [27.2, 588.0], [27.3, 589.0], [27.4, 589.0], [27.5, 589.0], [27.6, 590.0], [27.7, 590.0], [27.8, 591.0], [27.9, 591.0], [28.0, 591.0], [28.1, 592.0], [28.2, 592.0], [28.3, 593.0], [28.4, 594.0], [28.5, 594.0], [28.6, 595.0], [28.7, 595.0], [28.8, 595.0], [28.9, 596.0], [29.0, 597.0], [29.1, 597.0], [29.2, 597.0], [29.3, 598.0], [29.4, 598.0], [29.5, 599.0], [29.6, 599.0], [29.7, 600.0], [29.8, 601.0], [29.9, 601.0], [30.0, 601.0], [30.1, 602.0], [30.2, 602.0], [30.3, 603.0], [30.4, 603.0], [30.5, 604.0], [30.6, 604.0], [30.7, 605.0], [30.8, 605.0], [30.9, 606.0], [31.0, 606.0], [31.1, 607.0], [31.2, 608.0], [31.3, 608.0], [31.4, 608.0], [31.5, 609.0], [31.6, 610.0], [31.7, 610.0], [31.8, 610.0], [31.9, 611.0], [32.0, 611.0], [32.1, 611.0], [32.2, 612.0], [32.3, 612.0], [32.4, 613.0], [32.5, 614.0], [32.6, 614.0], [32.7, 614.0], [32.8, 614.0], [32.9, 615.0], [33.0, 615.0], [33.1, 616.0], [33.2, 616.0], [33.3, 616.0], [33.4, 617.0], [33.5, 617.0], [33.6, 618.0], [33.7, 619.0], [33.8, 619.0], [33.9, 619.0], [34.0, 620.0], [34.1, 620.0], [34.2, 621.0], [34.3, 621.0], [34.4, 621.0], [34.5, 622.0], [34.6, 623.0], [34.7, 624.0], [34.8, 624.0], [34.9, 625.0], [35.0, 625.0], [35.1, 626.0], [35.2, 626.0], [35.3, 627.0], [35.4, 628.0], [35.5, 629.0], [35.6, 629.0], [35.7, 630.0], [35.8, 630.0], [35.9, 631.0], [36.0, 631.0], [36.1, 632.0], [36.2, 632.0], [36.3, 633.0], [36.4, 633.0], [36.5, 633.0], [36.6, 634.0], [36.7, 634.0], [36.8, 635.0], [36.9, 635.0], [37.0, 635.0], [37.1, 635.0], [37.2, 636.0], [37.3, 636.0], [37.4, 637.0], [37.5, 637.0], [37.6, 638.0], [37.7, 638.0], [37.8, 638.0], [37.9, 639.0], [38.0, 639.0], [38.1, 639.0], [38.2, 640.0], [38.3, 640.0], [38.4, 640.0], [38.5, 641.0], [38.6, 642.0], [38.7, 642.0], [38.8, 643.0], [38.9, 643.0], [39.0, 643.0], [39.1, 644.0], [39.2, 644.0], [39.3, 644.0], [39.4, 645.0], [39.5, 645.0], [39.6, 647.0], [39.7, 647.0], [39.8, 648.0], [39.9, 648.0], [40.0, 648.0], [40.1, 649.0], [40.2, 649.0], [40.3, 649.0], [40.4, 650.0], [40.5, 650.0], [40.6, 650.0], [40.7, 651.0], [40.8, 651.0], [40.9, 652.0], [41.0, 653.0], [41.1, 653.0], [41.2, 654.0], [41.3, 654.0], [41.4, 655.0], [41.5, 655.0], [41.6, 656.0], [41.7, 656.0], [41.8, 656.0], [41.9, 657.0], [42.0, 657.0], [42.1, 658.0], [42.2, 659.0], [42.3, 659.0], [42.4, 660.0], [42.5, 660.0], [42.6, 661.0], [42.7, 661.0], [42.8, 662.0], [42.9, 662.0], [43.0, 662.0], [43.1, 662.0], [43.2, 663.0], [43.3, 664.0], [43.4, 664.0], [43.5, 664.0], [43.6, 665.0], [43.7, 665.0], [43.8, 666.0], [43.9, 666.0], [44.0, 666.0], [44.1, 666.0], [44.2, 667.0], [44.3, 668.0], [44.4, 668.0], [44.5, 669.0], [44.6, 669.0], [44.7, 669.0], [44.8, 670.0], [44.9, 670.0], [45.0, 670.0], [45.1, 671.0], [45.2, 671.0], [45.3, 672.0], [45.4, 673.0], [45.5, 673.0], [45.6, 674.0], [45.7, 674.0], [45.8, 674.0], [45.9, 674.0], [46.0, 675.0], [46.1, 675.0], [46.2, 676.0], [46.3, 676.0], [46.4, 677.0], [46.5, 677.0], [46.6, 678.0], [46.7, 678.0], [46.8, 679.0], [46.9, 679.0], [47.0, 680.0], [47.1, 681.0], [47.2, 682.0], [47.3, 682.0], [47.4, 682.0], [47.5, 683.0], [47.6, 683.0], [47.7, 683.0], [47.8, 684.0], [47.9, 684.0], [48.0, 685.0], [48.1, 685.0], [48.2, 686.0], [48.3, 686.0], [48.4, 686.0], [48.5, 687.0], [48.6, 687.0], [48.7, 688.0], [48.8, 688.0], [48.9, 688.0], [49.0, 689.0], [49.1, 689.0], [49.2, 690.0], [49.3, 690.0], [49.4, 691.0], [49.5, 691.0], [49.6, 692.0], [49.7, 692.0], [49.8, 693.0], [49.9, 693.0], [50.0, 693.0], [50.1, 694.0], [50.2, 694.0], [50.3, 695.0], [50.4, 695.0], [50.5, 696.0], [50.6, 696.0], [50.7, 697.0], [50.8, 697.0], [50.9, 697.0], [51.0, 697.0], [51.1, 698.0], [51.2, 699.0], [51.3, 699.0], [51.4, 699.0], [51.5, 700.0], [51.6, 700.0], [51.7, 701.0], [51.8, 701.0], [51.9, 702.0], [52.0, 702.0], [52.1, 703.0], [52.2, 703.0], [52.3, 703.0], [52.4, 704.0], [52.5, 704.0], [52.6, 704.0], [52.7, 705.0], [52.8, 705.0], [52.9, 705.0], [53.0, 706.0], [53.1, 706.0], [53.2, 707.0], [53.3, 707.0], [53.4, 708.0], [53.5, 708.0], [53.6, 709.0], [53.7, 709.0], [53.8, 710.0], [53.9, 710.0], [54.0, 711.0], [54.1, 711.0], [54.2, 712.0], [54.3, 712.0], [54.4, 712.0], [54.5, 713.0], [54.6, 714.0], [54.7, 714.0], [54.8, 715.0], [54.9, 715.0], [55.0, 716.0], [55.1, 716.0], [55.2, 716.0], [55.3, 716.0], [55.4, 717.0], [55.5, 717.0], [55.6, 717.0], [55.7, 718.0], [55.8, 718.0], [55.9, 718.0], [56.0, 719.0], [56.1, 719.0], [56.2, 720.0], [56.3, 720.0], [56.4, 721.0], [56.5, 721.0], [56.6, 722.0], [56.7, 722.0], [56.8, 722.0], [56.9, 723.0], [57.0, 723.0], [57.1, 724.0], [57.2, 724.0], [57.3, 724.0], [57.4, 724.0], [57.5, 725.0], [57.6, 725.0], [57.7, 725.0], [57.8, 726.0], [57.9, 726.0], [58.0, 727.0], [58.1, 728.0], [58.2, 728.0], [58.3, 729.0], [58.4, 729.0], [58.5, 730.0], [58.6, 731.0], [58.7, 731.0], [58.8, 731.0], [58.9, 732.0], [59.0, 732.0], [59.1, 732.0], [59.2, 732.0], [59.3, 733.0], [59.4, 733.0], [59.5, 733.0], [59.6, 734.0], [59.7, 734.0], [59.8, 734.0], [59.9, 735.0], [60.0, 735.0], [60.1, 735.0], [60.2, 736.0], [60.3, 736.0], [60.4, 737.0], [60.5, 737.0], [60.6, 738.0], [60.7, 738.0], [60.8, 739.0], [60.9, 740.0], [61.0, 741.0], [61.1, 741.0], [61.2, 741.0], [61.3, 742.0], [61.4, 742.0], [61.5, 743.0], [61.6, 743.0], [61.7, 743.0], [61.8, 744.0], [61.9, 745.0], [62.0, 745.0], [62.1, 746.0], [62.2, 746.0], [62.3, 747.0], [62.4, 747.0], [62.5, 747.0], [62.6, 748.0], [62.7, 749.0], [62.8, 750.0], [62.9, 750.0], [63.0, 751.0], [63.1, 751.0], [63.2, 752.0], [63.3, 752.0], [63.4, 753.0], [63.5, 753.0], [63.6, 754.0], [63.7, 754.0], [63.8, 755.0], [63.9, 755.0], [64.0, 756.0], [64.1, 756.0], [64.2, 757.0], [64.3, 757.0], [64.4, 757.0], [64.5, 758.0], [64.6, 758.0], [64.7, 759.0], [64.8, 759.0], [64.9, 759.0], [65.0, 759.0], [65.1, 760.0], [65.2, 761.0], [65.3, 761.0], [65.4, 761.0], [65.5, 761.0], [65.6, 762.0], [65.7, 762.0], [65.8, 762.0], [65.9, 762.0], [66.0, 763.0], [66.1, 763.0], [66.2, 763.0], [66.3, 764.0], [66.4, 764.0], [66.5, 765.0], [66.6, 765.0], [66.7, 765.0], [66.8, 766.0], [66.9, 766.0], [67.0, 767.0], [67.1, 767.0], [67.2, 768.0], [67.3, 768.0], [67.4, 769.0], [67.5, 770.0], [67.6, 770.0], [67.7, 770.0], [67.8, 771.0], [67.9, 771.0], [68.0, 772.0], [68.1, 772.0], [68.2, 773.0], [68.3, 773.0], [68.4, 774.0], [68.5, 775.0], [68.6, 776.0], [68.7, 776.0], [68.8, 777.0], [68.9, 777.0], [69.0, 778.0], [69.1, 779.0], [69.2, 780.0], [69.3, 780.0], [69.4, 780.0], [69.5, 781.0], [69.6, 781.0], [69.7, 782.0], [69.8, 782.0], [69.9, 783.0], [70.0, 783.0], [70.1, 784.0], [70.2, 784.0], [70.3, 784.0], [70.4, 785.0], [70.5, 786.0], [70.6, 786.0], [70.7, 786.0], [70.8, 787.0], [70.9, 787.0], [71.0, 788.0], [71.1, 789.0], [71.2, 789.0], [71.3, 790.0], [71.4, 790.0], [71.5, 790.0], [71.6, 791.0], [71.7, 791.0], [71.8, 792.0], [71.9, 792.0], [72.0, 793.0], [72.1, 794.0], [72.2, 794.0], [72.3, 795.0], [72.4, 796.0], [72.5, 796.0], [72.6, 797.0], [72.7, 798.0], [72.8, 798.0], [72.9, 799.0], [73.0, 799.0], [73.1, 799.0], [73.2, 800.0], [73.3, 801.0], [73.4, 801.0], [73.5, 802.0], [73.6, 803.0], [73.7, 803.0], [73.8, 803.0], [73.9, 804.0], [74.0, 804.0], [74.1, 806.0], [74.2, 806.0], [74.3, 806.0], [74.4, 807.0], [74.5, 807.0], [74.6, 809.0], [74.7, 809.0], [74.8, 809.0], [74.9, 810.0], [75.0, 811.0], [75.1, 811.0], [75.2, 812.0], [75.3, 813.0], [75.4, 814.0], [75.5, 814.0], [75.6, 815.0], [75.7, 815.0], [75.8, 816.0], [75.9, 817.0], [76.0, 818.0], [76.1, 818.0], [76.2, 818.0], [76.3, 820.0], [76.4, 820.0], [76.5, 821.0], [76.6, 821.0], [76.7, 821.0], [76.8, 822.0], [76.9, 823.0], [77.0, 823.0], [77.1, 824.0], [77.2, 825.0], [77.3, 826.0], [77.4, 826.0], [77.5, 827.0], [77.6, 828.0], [77.7, 829.0], [77.8, 830.0], [77.9, 831.0], [78.0, 833.0], [78.1, 835.0], [78.2, 835.0], [78.3, 836.0], [78.4, 837.0], [78.5, 837.0], [78.6, 838.0], [78.7, 839.0], [78.8, 839.0], [78.9, 839.0], [79.0, 840.0], [79.1, 840.0], [79.2, 840.0], [79.3, 841.0], [79.4, 842.0], [79.5, 842.0], [79.6, 843.0], [79.7, 843.0], [79.8, 844.0], [79.9, 844.0], [80.0, 847.0], [80.1, 848.0], [80.2, 849.0], [80.3, 849.0], [80.4, 849.0], [80.5, 851.0], [80.6, 852.0], [80.7, 852.0], [80.8, 853.0], [80.9, 855.0], [81.0, 856.0], [81.1, 857.0], [81.2, 857.0], [81.3, 858.0], [81.4, 859.0], [81.5, 859.0], [81.6, 859.0], [81.7, 860.0], [81.8, 861.0], [81.9, 862.0], [82.0, 864.0], [82.1, 864.0], [82.2, 865.0], [82.3, 866.0], [82.4, 867.0], [82.5, 867.0], [82.6, 868.0], [82.7, 869.0], [82.8, 870.0], [82.9, 870.0], [83.0, 871.0], [83.1, 872.0], [83.2, 873.0], [83.3, 873.0], [83.4, 874.0], [83.5, 875.0], [83.6, 876.0], [83.7, 877.0], [83.8, 878.0], [83.9, 878.0], [84.0, 879.0], [84.1, 880.0], [84.2, 881.0], [84.3, 882.0], [84.4, 883.0], [84.5, 883.0], [84.6, 884.0], [84.7, 885.0], [84.8, 885.0], [84.9, 887.0], [85.0, 888.0], [85.1, 889.0], [85.2, 890.0], [85.3, 892.0], [85.4, 892.0], [85.5, 893.0], [85.6, 894.0], [85.7, 894.0], [85.8, 895.0], [85.9, 897.0], [86.0, 899.0], [86.1, 900.0], [86.2, 901.0], [86.3, 902.0], [86.4, 903.0], [86.5, 904.0], [86.6, 905.0], [86.7, 906.0], [86.8, 907.0], [86.9, 907.0], [87.0, 910.0], [87.1, 911.0], [87.2, 913.0], [87.3, 914.0], [87.4, 915.0], [87.5, 917.0], [87.6, 917.0], [87.7, 923.0], [87.8, 925.0], [87.9, 927.0], [88.0, 928.0], [88.1, 929.0], [88.2, 931.0], [88.3, 934.0], [88.4, 935.0], [88.5, 936.0], [88.6, 938.0], [88.7, 939.0], [88.8, 940.0], [88.9, 942.0], [89.0, 943.0], [89.1, 945.0], [89.2, 946.0], [89.3, 947.0], [89.4, 948.0], [89.5, 950.0], [89.6, 952.0], [89.7, 952.0], [89.8, 955.0], [89.9, 955.0], [90.0, 957.0], [90.1, 957.0], [90.2, 957.0], [90.3, 959.0], [90.4, 961.0], [90.5, 962.0], [90.6, 964.0], [90.7, 965.0], [90.8, 967.0], [90.9, 968.0], [91.0, 970.0], [91.1, 972.0], [91.2, 974.0], [91.3, 975.0], [91.4, 977.0], [91.5, 978.0], [91.6, 979.0], [91.7, 982.0], [91.8, 983.0], [91.9, 984.0], [92.0, 987.0], [92.1, 988.0], [92.2, 992.0], [92.3, 993.0], [92.4, 994.0], [92.5, 995.0], [92.6, 998.0], [92.7, 998.0], [92.8, 1000.0], [92.9, 1001.0], [93.0, 1002.0], [93.1, 1005.0], [93.2, 1006.0], [93.3, 1008.0], [93.4, 1009.0], [93.5, 1011.0], [93.6, 1017.0], [93.7, 1018.0], [93.8, 1020.0], [93.9, 1023.0], [94.0, 1024.0], [94.1, 1027.0], [94.2, 1028.0], [94.3, 1032.0], [94.4, 1035.0], [94.5, 1037.0], [94.6, 1041.0], [94.7, 1043.0], [94.8, 1046.0], [94.9, 1047.0], [95.0, 1053.0], [95.1, 1055.0], [95.2, 1057.0], [95.3, 1060.0], [95.4, 1065.0], [95.5, 1068.0], [95.6, 1072.0], [95.7, 1074.0], [95.8, 1076.0], [95.9, 1080.0], [96.0, 1082.0], [96.1, 1089.0], [96.2, 1091.0], [96.3, 1096.0], [96.4, 1099.0], [96.5, 1099.0], [96.6, 1103.0], [96.7, 1105.0], [96.8, 1109.0], [96.9, 1113.0], [97.0, 1118.0], [97.1, 1128.0], [97.2, 1131.0], [97.3, 1137.0], [97.4, 1140.0], [97.5, 1143.0], [97.6, 1145.0], [97.7, 1151.0], [97.8, 1155.0], [97.9, 1159.0], [98.0, 1167.0], [98.1, 1174.0], [98.2, 1181.0], [98.3, 1193.0], [98.4, 1205.0], [98.5, 1217.0], [98.6, 1225.0], [98.7, 1236.0], [98.8, 1245.0], [98.9, 1254.0], [99.0, 1266.0], [99.1, 1279.0], [99.2, 1294.0], [99.3, 1319.0], [99.4, 1333.0], [99.5, 1347.0], [99.6, 1368.0], [99.7, 1390.0], [99.8, 1404.0], [99.9, 1428.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 919.0, "series": [{"data": [[600.0, 919.0], [700.0, 914.0], [800.0, 545.0], [200.0, 2.0], [900.0, 284.0], [1000.0, 157.0], [1100.0, 79.0], [1200.0, 36.0], [300.0, 103.0], [1300.0, 22.0], [1400.0, 8.0], [1500.0, 1.0], [400.0, 399.0], [1600.0, 1.0], [500.0, 745.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3705.0, "series": [{"data": [[0.0, 508.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3705.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 49.33278236914602, "minX": 1.61557068E12, "maxY": 50.0, "series": [{"data": [[1.61557068E12, 50.0], [1.61557074E12, 49.33278236914602]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61557074E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 358.0, "minX": 1.0, "maxY": 1023.0, "series": [{"data": [[33.0, 1023.0], [32.0, 865.0], [2.0, 417.0], [34.0, 751.0], [37.0, 913.0], [36.0, 605.0], [39.0, 762.0], [38.0, 912.0], [41.0, 813.0], [40.0, 814.0], [43.0, 809.0], [42.0, 810.0], [45.0, 767.0], [44.0, 897.0], [47.0, 810.0], [46.0, 821.0], [48.0, 924.0], [3.0, 414.0], [50.0, 709.0671946244277], [4.0, 413.0], [6.0, 478.0], [7.0, 481.0], [8.0, 358.0], [10.0, 533.0], [13.0, 482.0], [14.0, 377.0], [15.0, 453.0], [1.0, 429.0], [17.0, 611.0], [18.0, 712.0], [21.0, 544.0], [22.0, 626.6666666666666], [23.0, 691.0], [24.0, 693.0], [25.0, 591.0], [26.0, 536.0], [27.0, 451.0], [28.0, 631.0], [29.0, 638.0], [31.0, 802.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[49.71269276393834, 708.3245551601398]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3569.5, "minX": 1.61557068E12, "maxY": 846920.0, "series": [{"data": [[1.61557068E12, 846920.0], [1.61557074E12, 640483.25]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.61557068E12, 4720.0], [1.61557074E12, 3569.5]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61557074E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 642.9630853994485, "minX": 1.61557068E12, "maxY": 757.7541666666664, "series": [{"data": [[1.61557068E12, 757.7541666666664], [1.61557074E12, 642.9630853994485]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61557074E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 642.494214876034, "minX": 1.61557068E12, "maxY": 757.2291666666669, "series": [{"data": [[1.61557068E12, 757.2291666666669], [1.61557074E12, 642.494214876034]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61557074E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.61557068E12, "maxY": 10.203333333333333, "series": [{"data": [[1.61557068E12, 10.203333333333333], [1.61557074E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61557074E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 232.0, "minX": 1.61557068E12, "maxY": 1659.0, "series": [{"data": [[1.61557068E12, 1659.0], [1.61557074E12, 1155.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.61557068E12, 1025.9], [1.61557074E12, 817.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.61557068E12, 1335.9799999999996], [1.61557074E12, 1006.3599999999997]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.61557068E12, 1129.8999999999996], [1.61557074E12, 873.3999999999996]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.61557068E12, 327.0], [1.61557074E12, 232.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.61557068E12, 743.0], [1.61557074E12, 638.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61557074E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 478.0, "minX": 40.0, "maxY": 1164.5, "series": [{"data": [[40.0, 1164.5], [44.0, 632.5], [47.0, 907.0], [51.0, 860.0], [50.0, 937.5], [52.0, 889.0], [54.0, 1032.0], [56.0, 799.5], [57.0, 774.0], [59.0, 857.0], [61.0, 761.0], [62.0, 818.0], [63.0, 705.0], [66.0, 670.5], [65.0, 688.0], [67.0, 629.5], [68.0, 641.0], [69.0, 710.0], [71.0, 769.0], [70.0, 650.0], [72.0, 694.5], [75.0, 617.0], [76.0, 758.0], [77.0, 732.0], [78.0, 594.0], [79.0, 609.5], [82.0, 677.0], [80.0, 689.0], [83.0, 554.0], [81.0, 593.0], [87.0, 688.0], [86.0, 732.0], [85.0, 624.0], [90.0, 605.0], [95.0, 478.0], [99.0, 654.0], [96.0, 563.0], [100.0, 502.0], [104.0, 543.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 104.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 477.0, "minX": 40.0, "maxY": 1164.0, "series": [{"data": [[40.0, 1164.0], [44.0, 632.0], [47.0, 907.0], [51.0, 859.0], [50.0, 937.0], [52.0, 888.5], [54.0, 1031.5], [56.0, 798.5], [57.0, 773.0], [59.0, 857.0], [61.0, 760.0], [62.0, 817.0], [63.0, 705.0], [66.0, 670.0], [65.0, 688.0], [67.0, 629.5], [68.0, 641.0], [69.0, 710.0], [71.0, 768.5], [70.0, 649.5], [72.0, 694.0], [75.0, 617.0], [76.0, 757.5], [77.0, 732.0], [78.0, 594.0], [79.0, 609.0], [82.0, 677.0], [80.0, 689.0], [83.0, 554.0], [81.0, 592.0], [87.0, 687.0], [86.0, 732.0], [85.0, 623.0], [90.0, 604.5], [95.0, 477.0], [99.0, 654.0], [96.0, 562.5], [100.0, 502.0], [104.0, 542.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 104.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 29.416666666666668, "minX": 1.61557068E12, "maxY": 40.833333333333336, "series": [{"data": [[1.61557068E12, 40.833333333333336], [1.61557074E12, 29.416666666666668]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61557074E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 30.25, "minX": 1.61557068E12, "maxY": 40.0, "series": [{"data": [[1.61557068E12, 40.0], [1.61557074E12, 30.25]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61557074E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 30.25, "minX": 1.61557068E12, "maxY": 40.0, "series": [{"data": [[1.61557068E12, 40.0], [1.61557074E12, 30.25]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61557074E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 30.25, "minX": 1.61557068E12, "maxY": 40.0, "series": [{"data": [[1.61557068E12, 40.0], [1.61557074E12, 30.25]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61557074E12, "title": "Total Transactions Per Second"}},
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

