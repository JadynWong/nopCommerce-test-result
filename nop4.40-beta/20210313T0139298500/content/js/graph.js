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
        data: {"result": {"minY": 249.0, "minX": 0.0, "maxY": 1577.0, "series": [{"data": [[0.0, 249.0], [0.1, 290.0], [0.2, 303.0], [0.3, 319.0], [0.4, 335.0], [0.5, 342.0], [0.6, 347.0], [0.7, 358.0], [0.8, 361.0], [0.9, 363.0], [1.0, 369.0], [1.1, 373.0], [1.2, 373.0], [1.3, 379.0], [1.4, 382.0], [1.5, 383.0], [1.6, 386.0], [1.7, 390.0], [1.8, 393.0], [1.9, 396.0], [2.0, 400.0], [2.1, 402.0], [2.2, 406.0], [2.3, 407.0], [2.4, 409.0], [2.5, 412.0], [2.6, 414.0], [2.7, 415.0], [2.8, 417.0], [2.9, 419.0], [3.0, 420.0], [3.1, 422.0], [3.2, 423.0], [3.3, 426.0], [3.4, 428.0], [3.5, 430.0], [3.6, 432.0], [3.7, 433.0], [3.8, 435.0], [3.9, 436.0], [4.0, 436.0], [4.1, 438.0], [4.2, 440.0], [4.3, 440.0], [4.4, 442.0], [4.5, 443.0], [4.6, 443.0], [4.7, 444.0], [4.8, 445.0], [4.9, 448.0], [5.0, 450.0], [5.1, 451.0], [5.2, 453.0], [5.3, 454.0], [5.4, 455.0], [5.5, 456.0], [5.6, 457.0], [5.7, 458.0], [5.8, 459.0], [5.9, 460.0], [6.0, 462.0], [6.1, 463.0], [6.2, 464.0], [6.3, 465.0], [6.4, 466.0], [6.5, 467.0], [6.6, 467.0], [6.7, 468.0], [6.8, 469.0], [6.9, 470.0], [7.0, 471.0], [7.1, 472.0], [7.2, 473.0], [7.3, 474.0], [7.4, 475.0], [7.5, 476.0], [7.6, 476.0], [7.7, 477.0], [7.8, 477.0], [7.9, 478.0], [8.0, 479.0], [8.1, 479.0], [8.2, 480.0], [8.3, 482.0], [8.4, 482.0], [8.5, 483.0], [8.6, 484.0], [8.7, 484.0], [8.8, 485.0], [8.9, 486.0], [9.0, 486.0], [9.1, 487.0], [9.2, 488.0], [9.3, 489.0], [9.4, 490.0], [9.5, 490.0], [9.6, 491.0], [9.7, 491.0], [9.8, 491.0], [9.9, 492.0], [10.0, 493.0], [10.1, 494.0], [10.2, 495.0], [10.3, 495.0], [10.4, 496.0], [10.5, 496.0], [10.6, 498.0], [10.7, 499.0], [10.8, 499.0], [10.9, 501.0], [11.0, 503.0], [11.1, 503.0], [11.2, 504.0], [11.3, 505.0], [11.4, 505.0], [11.5, 506.0], [11.6, 508.0], [11.7, 509.0], [11.8, 509.0], [11.9, 509.0], [12.0, 510.0], [12.1, 511.0], [12.2, 511.0], [12.3, 512.0], [12.4, 513.0], [12.5, 514.0], [12.6, 515.0], [12.7, 515.0], [12.8, 516.0], [12.9, 516.0], [13.0, 517.0], [13.1, 517.0], [13.2, 518.0], [13.3, 518.0], [13.4, 519.0], [13.5, 519.0], [13.6, 520.0], [13.7, 520.0], [13.8, 521.0], [13.9, 521.0], [14.0, 521.0], [14.1, 523.0], [14.2, 523.0], [14.3, 524.0], [14.4, 524.0], [14.5, 525.0], [14.6, 526.0], [14.7, 527.0], [14.8, 528.0], [14.9, 528.0], [15.0, 529.0], [15.1, 530.0], [15.2, 530.0], [15.3, 531.0], [15.4, 531.0], [15.5, 532.0], [15.6, 532.0], [15.7, 533.0], [15.8, 534.0], [15.9, 534.0], [16.0, 535.0], [16.1, 536.0], [16.2, 537.0], [16.3, 537.0], [16.4, 537.0], [16.5, 538.0], [16.6, 539.0], [16.7, 540.0], [16.8, 540.0], [16.9, 540.0], [17.0, 541.0], [17.1, 541.0], [17.2, 542.0], [17.3, 542.0], [17.4, 543.0], [17.5, 543.0], [17.6, 544.0], [17.7, 544.0], [17.8, 545.0], [17.9, 545.0], [18.0, 545.0], [18.1, 546.0], [18.2, 547.0], [18.3, 547.0], [18.4, 548.0], [18.5, 548.0], [18.6, 548.0], [18.7, 549.0], [18.8, 549.0], [18.9, 550.0], [19.0, 550.0], [19.1, 550.0], [19.2, 551.0], [19.3, 551.0], [19.4, 552.0], [19.5, 552.0], [19.6, 553.0], [19.7, 554.0], [19.8, 554.0], [19.9, 554.0], [20.0, 555.0], [20.1, 555.0], [20.2, 555.0], [20.3, 556.0], [20.4, 556.0], [20.5, 557.0], [20.6, 557.0], [20.7, 558.0], [20.8, 558.0], [20.9, 559.0], [21.0, 559.0], [21.1, 560.0], [21.2, 560.0], [21.3, 561.0], [21.4, 561.0], [21.5, 562.0], [21.6, 562.0], [21.7, 562.0], [21.8, 563.0], [21.9, 563.0], [22.0, 564.0], [22.1, 564.0], [22.2, 564.0], [22.3, 565.0], [22.4, 565.0], [22.5, 565.0], [22.6, 566.0], [22.7, 566.0], [22.8, 567.0], [22.9, 568.0], [23.0, 568.0], [23.1, 568.0], [23.2, 569.0], [23.3, 569.0], [23.4, 569.0], [23.5, 570.0], [23.6, 570.0], [23.7, 571.0], [23.8, 571.0], [23.9, 571.0], [24.0, 572.0], [24.1, 572.0], [24.2, 572.0], [24.3, 573.0], [24.4, 574.0], [24.5, 574.0], [24.6, 575.0], [24.7, 575.0], [24.8, 576.0], [24.9, 577.0], [25.0, 577.0], [25.1, 578.0], [25.2, 578.0], [25.3, 579.0], [25.4, 579.0], [25.5, 580.0], [25.6, 580.0], [25.7, 581.0], [25.8, 581.0], [25.9, 582.0], [26.0, 582.0], [26.1, 583.0], [26.2, 583.0], [26.3, 585.0], [26.4, 585.0], [26.5, 585.0], [26.6, 586.0], [26.7, 586.0], [26.8, 587.0], [26.9, 587.0], [27.0, 587.0], [27.1, 588.0], [27.2, 588.0], [27.3, 589.0], [27.4, 589.0], [27.5, 590.0], [27.6, 591.0], [27.7, 591.0], [27.8, 591.0], [27.9, 592.0], [28.0, 592.0], [28.1, 592.0], [28.2, 594.0], [28.3, 594.0], [28.4, 594.0], [28.5, 594.0], [28.6, 595.0], [28.7, 595.0], [28.8, 596.0], [28.9, 597.0], [29.0, 597.0], [29.1, 597.0], [29.2, 598.0], [29.3, 598.0], [29.4, 598.0], [29.5, 599.0], [29.6, 599.0], [29.7, 599.0], [29.8, 600.0], [29.9, 600.0], [30.0, 600.0], [30.1, 601.0], [30.2, 602.0], [30.3, 602.0], [30.4, 603.0], [30.5, 603.0], [30.6, 603.0], [30.7, 604.0], [30.8, 604.0], [30.9, 605.0], [31.0, 605.0], [31.1, 606.0], [31.2, 606.0], [31.3, 607.0], [31.4, 607.0], [31.5, 607.0], [31.6, 607.0], [31.7, 608.0], [31.8, 608.0], [31.9, 608.0], [32.0, 609.0], [32.1, 610.0], [32.2, 610.0], [32.3, 610.0], [32.4, 611.0], [32.5, 611.0], [32.6, 611.0], [32.7, 611.0], [32.8, 612.0], [32.9, 612.0], [33.0, 613.0], [33.1, 613.0], [33.2, 614.0], [33.3, 614.0], [33.4, 614.0], [33.5, 615.0], [33.6, 615.0], [33.7, 615.0], [33.8, 616.0], [33.9, 616.0], [34.0, 617.0], [34.1, 617.0], [34.2, 618.0], [34.3, 619.0], [34.4, 619.0], [34.5, 620.0], [34.6, 620.0], [34.7, 620.0], [34.8, 620.0], [34.9, 621.0], [35.0, 621.0], [35.1, 621.0], [35.2, 622.0], [35.3, 622.0], [35.4, 623.0], [35.5, 623.0], [35.6, 623.0], [35.7, 623.0], [35.8, 623.0], [35.9, 624.0], [36.0, 624.0], [36.1, 624.0], [36.2, 625.0], [36.3, 625.0], [36.4, 626.0], [36.5, 626.0], [36.6, 626.0], [36.7, 626.0], [36.8, 626.0], [36.9, 626.0], [37.0, 627.0], [37.1, 627.0], [37.2, 627.0], [37.3, 627.0], [37.4, 628.0], [37.5, 628.0], [37.6, 629.0], [37.7, 629.0], [37.8, 629.0], [37.9, 630.0], [38.0, 630.0], [38.1, 630.0], [38.2, 631.0], [38.3, 631.0], [38.4, 632.0], [38.5, 633.0], [38.6, 633.0], [38.7, 633.0], [38.8, 633.0], [38.9, 634.0], [39.0, 634.0], [39.1, 635.0], [39.2, 635.0], [39.3, 635.0], [39.4, 635.0], [39.5, 636.0], [39.6, 637.0], [39.7, 637.0], [39.8, 638.0], [39.9, 638.0], [40.0, 638.0], [40.1, 639.0], [40.2, 639.0], [40.3, 639.0], [40.4, 640.0], [40.5, 640.0], [40.6, 641.0], [40.7, 641.0], [40.8, 642.0], [40.9, 642.0], [41.0, 643.0], [41.1, 643.0], [41.2, 643.0], [41.3, 644.0], [41.4, 644.0], [41.5, 645.0], [41.6, 645.0], [41.7, 645.0], [41.8, 646.0], [41.9, 646.0], [42.0, 647.0], [42.1, 648.0], [42.2, 648.0], [42.3, 649.0], [42.4, 649.0], [42.5, 649.0], [42.6, 649.0], [42.7, 650.0], [42.8, 650.0], [42.9, 650.0], [43.0, 651.0], [43.1, 651.0], [43.2, 651.0], [43.3, 652.0], [43.4, 652.0], [43.5, 652.0], [43.6, 653.0], [43.7, 653.0], [43.8, 654.0], [43.9, 654.0], [44.0, 654.0], [44.1, 655.0], [44.2, 655.0], [44.3, 656.0], [44.4, 656.0], [44.5, 657.0], [44.6, 658.0], [44.7, 658.0], [44.8, 658.0], [44.9, 658.0], [45.0, 659.0], [45.1, 660.0], [45.2, 660.0], [45.3, 661.0], [45.4, 661.0], [45.5, 662.0], [45.6, 662.0], [45.7, 662.0], [45.8, 662.0], [45.9, 663.0], [46.0, 664.0], [46.1, 664.0], [46.2, 665.0], [46.3, 666.0], [46.4, 666.0], [46.5, 666.0], [46.6, 667.0], [46.7, 667.0], [46.8, 668.0], [46.9, 668.0], [47.0, 668.0], [47.1, 669.0], [47.2, 669.0], [47.3, 669.0], [47.4, 669.0], [47.5, 670.0], [47.6, 670.0], [47.7, 670.0], [47.8, 670.0], [47.9, 671.0], [48.0, 671.0], [48.1, 671.0], [48.2, 672.0], [48.3, 672.0], [48.4, 672.0], [48.5, 672.0], [48.6, 673.0], [48.7, 674.0], [48.8, 674.0], [48.9, 674.0], [49.0, 675.0], [49.1, 675.0], [49.2, 675.0], [49.3, 676.0], [49.4, 676.0], [49.5, 676.0], [49.6, 677.0], [49.7, 677.0], [49.8, 678.0], [49.9, 679.0], [50.0, 679.0], [50.1, 679.0], [50.2, 680.0], [50.3, 680.0], [50.4, 681.0], [50.5, 681.0], [50.6, 682.0], [50.7, 682.0], [50.8, 682.0], [50.9, 682.0], [51.0, 683.0], [51.1, 683.0], [51.2, 684.0], [51.3, 684.0], [51.4, 685.0], [51.5, 685.0], [51.6, 685.0], [51.7, 685.0], [51.8, 686.0], [51.9, 686.0], [52.0, 687.0], [52.1, 688.0], [52.2, 688.0], [52.3, 689.0], [52.4, 689.0], [52.5, 689.0], [52.6, 689.0], [52.7, 690.0], [52.8, 690.0], [52.9, 690.0], [53.0, 691.0], [53.1, 691.0], [53.2, 692.0], [53.3, 692.0], [53.4, 693.0], [53.5, 693.0], [53.6, 694.0], [53.7, 694.0], [53.8, 694.0], [53.9, 695.0], [54.0, 695.0], [54.1, 696.0], [54.2, 696.0], [54.3, 697.0], [54.4, 697.0], [54.5, 698.0], [54.6, 699.0], [54.7, 699.0], [54.8, 700.0], [54.9, 700.0], [55.0, 701.0], [55.1, 701.0], [55.2, 701.0], [55.3, 702.0], [55.4, 702.0], [55.5, 703.0], [55.6, 703.0], [55.7, 703.0], [55.8, 704.0], [55.9, 704.0], [56.0, 705.0], [56.1, 705.0], [56.2, 705.0], [56.3, 706.0], [56.4, 706.0], [56.5, 707.0], [56.6, 707.0], [56.7, 707.0], [56.8, 708.0], [56.9, 708.0], [57.0, 708.0], [57.1, 709.0], [57.2, 709.0], [57.3, 710.0], [57.4, 710.0], [57.5, 710.0], [57.6, 711.0], [57.7, 712.0], [57.8, 712.0], [57.9, 713.0], [58.0, 713.0], [58.1, 714.0], [58.2, 714.0], [58.3, 715.0], [58.4, 715.0], [58.5, 716.0], [58.6, 716.0], [58.7, 717.0], [58.8, 717.0], [58.9, 717.0], [59.0, 718.0], [59.1, 718.0], [59.2, 719.0], [59.3, 719.0], [59.4, 719.0], [59.5, 720.0], [59.6, 720.0], [59.7, 720.0], [59.8, 721.0], [59.9, 721.0], [60.0, 722.0], [60.1, 722.0], [60.2, 722.0], [60.3, 723.0], [60.4, 723.0], [60.5, 723.0], [60.6, 723.0], [60.7, 724.0], [60.8, 725.0], [60.9, 725.0], [61.0, 725.0], [61.1, 726.0], [61.2, 726.0], [61.3, 726.0], [61.4, 727.0], [61.5, 727.0], [61.6, 728.0], [61.7, 729.0], [61.8, 729.0], [61.9, 730.0], [62.0, 730.0], [62.1, 730.0], [62.2, 731.0], [62.3, 731.0], [62.4, 732.0], [62.5, 733.0], [62.6, 733.0], [62.7, 734.0], [62.8, 734.0], [62.9, 735.0], [63.0, 736.0], [63.1, 737.0], [63.2, 737.0], [63.3, 738.0], [63.4, 739.0], [63.5, 739.0], [63.6, 740.0], [63.7, 740.0], [63.8, 740.0], [63.9, 741.0], [64.0, 741.0], [64.1, 741.0], [64.2, 742.0], [64.3, 742.0], [64.4, 743.0], [64.5, 743.0], [64.6, 743.0], [64.7, 744.0], [64.8, 745.0], [64.9, 745.0], [65.0, 745.0], [65.1, 746.0], [65.2, 746.0], [65.3, 747.0], [65.4, 748.0], [65.5, 748.0], [65.6, 749.0], [65.7, 749.0], [65.8, 750.0], [65.9, 750.0], [66.0, 751.0], [66.1, 751.0], [66.2, 752.0], [66.3, 753.0], [66.4, 753.0], [66.5, 753.0], [66.6, 754.0], [66.7, 754.0], [66.8, 755.0], [66.9, 755.0], [67.0, 756.0], [67.1, 756.0], [67.2, 756.0], [67.3, 757.0], [67.4, 757.0], [67.5, 757.0], [67.6, 758.0], [67.7, 758.0], [67.8, 758.0], [67.9, 759.0], [68.0, 759.0], [68.1, 760.0], [68.2, 760.0], [68.3, 761.0], [68.4, 761.0], [68.5, 762.0], [68.6, 763.0], [68.7, 763.0], [68.8, 763.0], [68.9, 764.0], [69.0, 764.0], [69.1, 764.0], [69.2, 765.0], [69.3, 765.0], [69.4, 766.0], [69.5, 766.0], [69.6, 767.0], [69.7, 767.0], [69.8, 768.0], [69.9, 769.0], [70.0, 769.0], [70.1, 769.0], [70.2, 770.0], [70.3, 770.0], [70.4, 770.0], [70.5, 771.0], [70.6, 771.0], [70.7, 772.0], [70.8, 772.0], [70.9, 772.0], [71.0, 772.0], [71.1, 773.0], [71.2, 773.0], [71.3, 773.0], [71.4, 774.0], [71.5, 774.0], [71.6, 775.0], [71.7, 775.0], [71.8, 775.0], [71.9, 776.0], [72.0, 776.0], [72.1, 777.0], [72.2, 777.0], [72.3, 778.0], [72.4, 778.0], [72.5, 778.0], [72.6, 780.0], [72.7, 780.0], [72.8, 781.0], [72.9, 781.0], [73.0, 782.0], [73.1, 782.0], [73.2, 783.0], [73.3, 784.0], [73.4, 784.0], [73.5, 785.0], [73.6, 785.0], [73.7, 786.0], [73.8, 786.0], [73.9, 787.0], [74.0, 787.0], [74.1, 788.0], [74.2, 789.0], [74.3, 789.0], [74.4, 790.0], [74.5, 790.0], [74.6, 791.0], [74.7, 791.0], [74.8, 791.0], [74.9, 792.0], [75.0, 792.0], [75.1, 793.0], [75.2, 793.0], [75.3, 794.0], [75.4, 794.0], [75.5, 795.0], [75.6, 795.0], [75.7, 796.0], [75.8, 796.0], [75.9, 796.0], [76.0, 797.0], [76.1, 797.0], [76.2, 798.0], [76.3, 798.0], [76.4, 798.0], [76.5, 799.0], [76.6, 800.0], [76.7, 800.0], [76.8, 801.0], [76.9, 801.0], [77.0, 802.0], [77.1, 802.0], [77.2, 803.0], [77.3, 804.0], [77.4, 804.0], [77.5, 805.0], [77.6, 805.0], [77.7, 806.0], [77.8, 806.0], [77.9, 807.0], [78.0, 807.0], [78.1, 807.0], [78.2, 808.0], [78.3, 808.0], [78.4, 808.0], [78.5, 809.0], [78.6, 809.0], [78.7, 810.0], [78.8, 810.0], [78.9, 811.0], [79.0, 811.0], [79.1, 812.0], [79.2, 813.0], [79.3, 814.0], [79.4, 815.0], [79.5, 815.0], [79.6, 816.0], [79.7, 817.0], [79.8, 817.0], [79.9, 818.0], [80.0, 818.0], [80.1, 819.0], [80.2, 819.0], [80.3, 820.0], [80.4, 821.0], [80.5, 821.0], [80.6, 822.0], [80.7, 822.0], [80.8, 823.0], [80.9, 824.0], [81.0, 825.0], [81.1, 826.0], [81.2, 826.0], [81.3, 826.0], [81.4, 827.0], [81.5, 828.0], [81.6, 829.0], [81.7, 830.0], [81.8, 831.0], [81.9, 832.0], [82.0, 833.0], [82.1, 834.0], [82.2, 835.0], [82.3, 837.0], [82.4, 837.0], [82.5, 837.0], [82.6, 839.0], [82.7, 839.0], [82.8, 840.0], [82.9, 841.0], [83.0, 842.0], [83.1, 843.0], [83.2, 844.0], [83.3, 845.0], [83.4, 845.0], [83.5, 846.0], [83.6, 847.0], [83.7, 848.0], [83.8, 848.0], [83.9, 849.0], [84.0, 849.0], [84.1, 850.0], [84.2, 851.0], [84.3, 852.0], [84.4, 852.0], [84.5, 853.0], [84.6, 854.0], [84.7, 855.0], [84.8, 856.0], [84.9, 857.0], [85.0, 858.0], [85.1, 858.0], [85.2, 859.0], [85.3, 860.0], [85.4, 861.0], [85.5, 861.0], [85.6, 862.0], [85.7, 863.0], [85.8, 864.0], [85.9, 864.0], [86.0, 865.0], [86.1, 866.0], [86.2, 867.0], [86.3, 867.0], [86.4, 869.0], [86.5, 869.0], [86.6, 870.0], [86.7, 871.0], [86.8, 872.0], [86.9, 873.0], [87.0, 873.0], [87.1, 875.0], [87.2, 876.0], [87.3, 876.0], [87.4, 877.0], [87.5, 877.0], [87.6, 879.0], [87.7, 880.0], [87.8, 881.0], [87.9, 882.0], [88.0, 883.0], [88.1, 883.0], [88.2, 884.0], [88.3, 885.0], [88.4, 886.0], [88.5, 886.0], [88.6, 887.0], [88.7, 887.0], [88.8, 888.0], [88.9, 889.0], [89.0, 890.0], [89.1, 891.0], [89.2, 892.0], [89.3, 893.0], [89.4, 894.0], [89.5, 896.0], [89.6, 898.0], [89.7, 898.0], [89.8, 899.0], [89.9, 900.0], [90.0, 901.0], [90.1, 903.0], [90.2, 904.0], [90.3, 905.0], [90.4, 906.0], [90.5, 907.0], [90.6, 908.0], [90.7, 909.0], [90.8, 911.0], [90.9, 912.0], [91.0, 914.0], [91.1, 916.0], [91.2, 918.0], [91.3, 920.0], [91.4, 921.0], [91.5, 922.0], [91.6, 924.0], [91.7, 927.0], [91.8, 927.0], [91.9, 930.0], [92.0, 931.0], [92.1, 932.0], [92.2, 935.0], [92.3, 936.0], [92.4, 938.0], [92.5, 939.0], [92.6, 940.0], [92.7, 942.0], [92.8, 944.0], [92.9, 946.0], [93.0, 949.0], [93.1, 950.0], [93.2, 952.0], [93.3, 954.0], [93.4, 955.0], [93.5, 955.0], [93.6, 957.0], [93.7, 959.0], [93.8, 961.0], [93.9, 962.0], [94.0, 964.0], [94.1, 967.0], [94.2, 969.0], [94.3, 970.0], [94.4, 973.0], [94.5, 977.0], [94.6, 979.0], [94.7, 980.0], [94.8, 981.0], [94.9, 982.0], [95.0, 983.0], [95.1, 986.0], [95.2, 987.0], [95.3, 989.0], [95.4, 991.0], [95.5, 992.0], [95.6, 994.0], [95.7, 995.0], [95.8, 997.0], [95.9, 1002.0], [96.0, 1004.0], [96.1, 1007.0], [96.2, 1011.0], [96.3, 1013.0], [96.4, 1015.0], [96.5, 1018.0], [96.6, 1022.0], [96.7, 1029.0], [96.8, 1032.0], [96.9, 1033.0], [97.0, 1036.0], [97.1, 1039.0], [97.2, 1044.0], [97.3, 1045.0], [97.4, 1047.0], [97.5, 1051.0], [97.6, 1057.0], [97.7, 1063.0], [97.8, 1079.0], [97.9, 1084.0], [98.0, 1086.0], [98.1, 1089.0], [98.2, 1094.0], [98.3, 1097.0], [98.4, 1108.0], [98.5, 1115.0], [98.6, 1123.0], [98.7, 1129.0], [98.8, 1136.0], [98.9, 1143.0], [99.0, 1148.0], [99.1, 1161.0], [99.2, 1180.0], [99.3, 1194.0], [99.4, 1207.0], [99.5, 1239.0], [99.6, 1283.0], [99.7, 1360.0], [99.8, 1441.0], [99.9, 1496.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 3.0, "minX": 200.0, "maxY": 1077.0, "series": [{"data": [[600.0, 1077.0], [700.0, 938.0], [800.0, 569.0], [200.0, 6.0], [900.0, 260.0], [1000.0, 106.0], [1100.0, 45.0], [1200.0, 13.0], [300.0, 80.0], [1300.0, 3.0], [1400.0, 9.0], [1500.0, 3.0], [400.0, 380.0], [500.0, 816.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 3.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3833.0, "series": [{"data": [[0.0, 469.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3833.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 49.4510599909788, "minX": 1.61557074E12, "maxY": 50.0, "series": [{"data": [[1.6155708E12, 49.4510599909788], [1.61557074E12, 50.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6155708E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 254.0, "minX": 1.0, "maxY": 724.0, "series": [{"data": [[33.0, 419.0], [32.0, 481.5], [2.0, 483.0], [35.0, 455.0], [34.0, 398.0], [36.0, 479.0], [39.0, 369.0], [38.0, 512.5], [41.0, 374.0], [40.0, 484.0], [43.0, 518.0], [42.0, 544.0], [45.0, 640.0], [44.0, 525.0], [47.0, 433.0], [46.0, 498.0], [49.0, 724.0], [48.0, 625.0], [3.0, 484.0], [50.0, 696.1921992481205], [4.0, 481.0], [5.0, 519.0], [6.0, 480.0], [9.0, 475.0], [10.0, 478.0], [12.0, 451.5], [13.0, 425.0], [14.0, 420.0], [15.0, 297.0], [1.0, 505.0], [17.0, 303.0], [18.0, 304.0], [19.0, 290.0], [20.0, 335.0], [21.0, 275.0], [22.0, 403.0], [23.0, 254.0], [24.0, 505.0], [25.0, 594.0], [27.0, 438.0], [28.0, 451.0], [29.0, 383.0], [30.0, 439.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[49.71730545876889, 693.3988385598147]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 4106.4, "minX": 1.61557074E12, "maxY": 782342.35, "series": [{"data": [[1.6155708E12, 782342.35], [1.61557074E12, 736820.4]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6155708E12, 4360.1], [1.61557074E12, 4106.4]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6155708E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 667.2183908045964, "minX": 1.61557074E12, "maxY": 718.0559314388803, "series": [{"data": [[1.6155708E12, 718.0559314388803], [1.61557074E12, 667.2183908045964]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6155708E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 666.7265325670498, "minX": 1.61557074E12, "maxY": 717.5696887686055, "series": [{"data": [[1.6155708E12, 717.5696887686055], [1.61557074E12, 666.7265325670498]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6155708E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.61557074E12, "maxY": 12.062739463601513, "series": [{"data": [[1.6155708E12, 0.0], [1.61557074E12, 12.062739463601513]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6155708E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 249.0, "minX": 1.61557074E12, "maxY": 1577.0, "series": [{"data": [[1.6155708E12, 1332.0], [1.61557074E12, 1577.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6155708E12, 922.2], [1.61557074E12, 876.1000000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6155708E12, 1135.2800000000007], [1.61557074E12, 1197.2100000000014]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6155708E12, 993.0999999999999], [1.61557074E12, 967.55]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6155708E12, 249.0], [1.61557074E12, 308.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6155708E12, 714.0], [1.61557074E12, 643.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6155708E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 483.0, "minX": 44.0, "maxY": 1079.0, "series": [{"data": [[44.0, 828.5], [45.0, 953.0], [49.0, 1079.0], [50.0, 881.0], [52.0, 877.5], [57.0, 776.0], [56.0, 786.5], [59.0, 799.5], [60.0, 786.0], [63.0, 725.5], [64.0, 736.5], [67.0, 768.0], [66.0, 765.5], [65.0, 750.0], [71.0, 601.0], [68.0, 691.0], [69.0, 797.0], [73.0, 635.0], [74.0, 669.5], [72.0, 717.5], [75.0, 483.0], [77.0, 588.0], [79.0, 638.5], [78.0, 631.5], [76.0, 644.0], [80.0, 612.0], [83.0, 671.0], [82.0, 625.5], [81.0, 619.0], [86.0, 630.0], [84.0, 565.5], [88.0, 725.5], [89.0, 619.0], [93.0, 532.0], [96.0, 511.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 96.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 483.0, "minX": 44.0, "maxY": 1079.0, "series": [{"data": [[44.0, 828.5], [45.0, 952.0], [49.0, 1079.0], [50.0, 881.0], [52.0, 877.0], [57.0, 776.0], [56.0, 785.5], [59.0, 799.0], [60.0, 785.0], [63.0, 725.5], [64.0, 735.5], [67.0, 767.5], [66.0, 764.5], [65.0, 750.0], [71.0, 600.0], [68.0, 690.5], [69.0, 797.0], [73.0, 634.0], [74.0, 669.5], [72.0, 717.0], [75.0, 483.0], [77.0, 588.0], [79.0, 637.5], [78.0, 631.5], [76.0, 643.5], [80.0, 611.5], [83.0, 670.5], [82.0, 624.5], [81.0, 619.0], [86.0, 629.0], [84.0, 565.0], [88.0, 725.0], [89.0, 618.0], [93.0, 532.0], [96.0, 510.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 96.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 35.63333333333333, "minX": 1.61557074E12, "maxY": 36.11666666666667, "series": [{"data": [[1.6155708E12, 36.11666666666667], [1.61557074E12, 35.63333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6155708E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 34.8, "minX": 1.61557074E12, "maxY": 36.95, "series": [{"data": [[1.6155708E12, 36.95], [1.61557074E12, 34.8]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6155708E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 34.8, "minX": 1.61557074E12, "maxY": 36.95, "series": [{"data": [[1.6155708E12, 36.95], [1.61557074E12, 34.8]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6155708E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 34.8, "minX": 1.61557074E12, "maxY": 36.95, "series": [{"data": [[1.6155708E12, 36.95], [1.61557074E12, 34.8]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6155708E12, "title": "Total Transactions Per Second"}},
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

