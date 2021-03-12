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
        data: {"result": {"minY": 257.0, "minX": 0.0, "maxY": 1423.0, "series": [{"data": [[0.0, 257.0], [0.1, 296.0], [0.2, 303.0], [0.3, 319.0], [0.4, 327.0], [0.5, 337.0], [0.6, 340.0], [0.7, 345.0], [0.8, 346.0], [0.9, 353.0], [1.0, 356.0], [1.1, 362.0], [1.2, 363.0], [1.3, 366.0], [1.4, 369.0], [1.5, 371.0], [1.6, 374.0], [1.7, 377.0], [1.8, 380.0], [1.9, 383.0], [2.0, 386.0], [2.1, 393.0], [2.2, 395.0], [2.3, 399.0], [2.4, 401.0], [2.5, 403.0], [2.6, 403.0], [2.7, 406.0], [2.8, 407.0], [2.9, 409.0], [3.0, 410.0], [3.1, 412.0], [3.2, 413.0], [3.3, 414.0], [3.4, 416.0], [3.5, 418.0], [3.6, 418.0], [3.7, 419.0], [3.8, 420.0], [3.9, 421.0], [4.0, 422.0], [4.1, 424.0], [4.2, 426.0], [4.3, 428.0], [4.4, 429.0], [4.5, 430.0], [4.6, 431.0], [4.7, 432.0], [4.8, 433.0], [4.9, 434.0], [5.0, 435.0], [5.1, 436.0], [5.2, 437.0], [5.3, 437.0], [5.4, 440.0], [5.5, 441.0], [5.6, 442.0], [5.7, 443.0], [5.8, 444.0], [5.9, 445.0], [6.0, 446.0], [6.1, 446.0], [6.2, 447.0], [6.3, 448.0], [6.4, 448.0], [6.5, 449.0], [6.6, 450.0], [6.7, 450.0], [6.8, 450.0], [6.9, 451.0], [7.0, 452.0], [7.1, 453.0], [7.2, 454.0], [7.3, 456.0], [7.4, 457.0], [7.5, 457.0], [7.6, 458.0], [7.7, 458.0], [7.8, 459.0], [7.9, 460.0], [8.0, 461.0], [8.1, 461.0], [8.2, 462.0], [8.3, 463.0], [8.4, 464.0], [8.5, 465.0], [8.6, 466.0], [8.7, 468.0], [8.8, 469.0], [8.9, 470.0], [9.0, 471.0], [9.1, 471.0], [9.2, 472.0], [9.3, 473.0], [9.4, 474.0], [9.5, 474.0], [9.6, 475.0], [9.7, 476.0], [9.8, 477.0], [9.9, 477.0], [10.0, 478.0], [10.1, 478.0], [10.2, 479.0], [10.3, 479.0], [10.4, 480.0], [10.5, 481.0], [10.6, 482.0], [10.7, 483.0], [10.8, 484.0], [10.9, 484.0], [11.0, 485.0], [11.1, 486.0], [11.2, 486.0], [11.3, 487.0], [11.4, 488.0], [11.5, 489.0], [11.6, 490.0], [11.7, 491.0], [11.8, 492.0], [11.9, 492.0], [12.0, 492.0], [12.1, 493.0], [12.2, 494.0], [12.3, 494.0], [12.4, 495.0], [12.5, 496.0], [12.6, 496.0], [12.7, 497.0], [12.8, 497.0], [12.9, 498.0], [13.0, 498.0], [13.1, 499.0], [13.2, 499.0], [13.3, 500.0], [13.4, 502.0], [13.5, 502.0], [13.6, 504.0], [13.7, 504.0], [13.8, 504.0], [13.9, 505.0], [14.0, 505.0], [14.1, 505.0], [14.2, 506.0], [14.3, 507.0], [14.4, 507.0], [14.5, 508.0], [14.6, 508.0], [14.7, 510.0], [14.8, 510.0], [14.9, 510.0], [15.0, 511.0], [15.1, 512.0], [15.2, 512.0], [15.3, 513.0], [15.4, 513.0], [15.5, 514.0], [15.6, 515.0], [15.7, 516.0], [15.8, 516.0], [15.9, 517.0], [16.0, 517.0], [16.1, 517.0], [16.2, 518.0], [16.3, 518.0], [16.4, 518.0], [16.5, 519.0], [16.6, 520.0], [16.7, 520.0], [16.8, 520.0], [16.9, 521.0], [17.0, 521.0], [17.1, 522.0], [17.2, 522.0], [17.3, 522.0], [17.4, 523.0], [17.5, 523.0], [17.6, 524.0], [17.7, 524.0], [17.8, 525.0], [17.9, 525.0], [18.0, 526.0], [18.1, 526.0], [18.2, 527.0], [18.3, 527.0], [18.4, 527.0], [18.5, 529.0], [18.6, 529.0], [18.7, 529.0], [18.8, 530.0], [18.9, 530.0], [19.0, 531.0], [19.1, 531.0], [19.2, 532.0], [19.3, 532.0], [19.4, 532.0], [19.5, 533.0], [19.6, 533.0], [19.7, 533.0], [19.8, 534.0], [19.9, 534.0], [20.0, 534.0], [20.1, 534.0], [20.2, 535.0], [20.3, 535.0], [20.4, 536.0], [20.5, 536.0], [20.6, 537.0], [20.7, 537.0], [20.8, 537.0], [20.9, 538.0], [21.0, 538.0], [21.1, 539.0], [21.2, 539.0], [21.3, 540.0], [21.4, 540.0], [21.5, 541.0], [21.6, 541.0], [21.7, 542.0], [21.8, 543.0], [21.9, 543.0], [22.0, 544.0], [22.1, 544.0], [22.2, 544.0], [22.3, 544.0], [22.4, 545.0], [22.5, 546.0], [22.6, 546.0], [22.7, 546.0], [22.8, 547.0], [22.9, 547.0], [23.0, 547.0], [23.1, 548.0], [23.2, 549.0], [23.3, 549.0], [23.4, 550.0], [23.5, 550.0], [23.6, 551.0], [23.7, 552.0], [23.8, 552.0], [23.9, 552.0], [24.0, 553.0], [24.1, 553.0], [24.2, 554.0], [24.3, 554.0], [24.4, 554.0], [24.5, 555.0], [24.6, 556.0], [24.7, 556.0], [24.8, 557.0], [24.9, 557.0], [25.0, 557.0], [25.1, 558.0], [25.2, 558.0], [25.3, 558.0], [25.4, 559.0], [25.5, 559.0], [25.6, 560.0], [25.7, 560.0], [25.8, 561.0], [25.9, 561.0], [26.0, 561.0], [26.1, 562.0], [26.2, 562.0], [26.3, 563.0], [26.4, 563.0], [26.5, 564.0], [26.6, 564.0], [26.7, 565.0], [26.8, 565.0], [26.9, 565.0], [27.0, 566.0], [27.1, 566.0], [27.2, 567.0], [27.3, 567.0], [27.4, 568.0], [27.5, 568.0], [27.6, 568.0], [27.7, 568.0], [27.8, 569.0], [27.9, 569.0], [28.0, 570.0], [28.1, 570.0], [28.2, 570.0], [28.3, 570.0], [28.4, 571.0], [28.5, 571.0], [28.6, 572.0], [28.7, 572.0], [28.8, 573.0], [28.9, 573.0], [29.0, 574.0], [29.1, 574.0], [29.2, 575.0], [29.3, 575.0], [29.4, 576.0], [29.5, 577.0], [29.6, 577.0], [29.7, 578.0], [29.8, 578.0], [29.9, 578.0], [30.0, 579.0], [30.1, 580.0], [30.2, 580.0], [30.3, 580.0], [30.4, 581.0], [30.5, 581.0], [30.6, 581.0], [30.7, 582.0], [30.8, 582.0], [30.9, 582.0], [31.0, 583.0], [31.1, 583.0], [31.2, 583.0], [31.3, 584.0], [31.4, 584.0], [31.5, 584.0], [31.6, 585.0], [31.7, 585.0], [31.8, 585.0], [31.9, 586.0], [32.0, 586.0], [32.1, 586.0], [32.2, 586.0], [32.3, 587.0], [32.4, 587.0], [32.5, 588.0], [32.6, 588.0], [32.7, 589.0], [32.8, 589.0], [32.9, 589.0], [33.0, 590.0], [33.1, 591.0], [33.2, 591.0], [33.3, 591.0], [33.4, 591.0], [33.5, 592.0], [33.6, 592.0], [33.7, 592.0], [33.8, 593.0], [33.9, 593.0], [34.0, 593.0], [34.1, 594.0], [34.2, 594.0], [34.3, 594.0], [34.4, 594.0], [34.5, 594.0], [34.6, 595.0], [34.7, 595.0], [34.8, 595.0], [34.9, 596.0], [35.0, 596.0], [35.1, 596.0], [35.2, 596.0], [35.3, 596.0], [35.4, 597.0], [35.5, 597.0], [35.6, 597.0], [35.7, 598.0], [35.8, 598.0], [35.9, 599.0], [36.0, 599.0], [36.1, 599.0], [36.2, 600.0], [36.3, 600.0], [36.4, 601.0], [36.5, 601.0], [36.6, 601.0], [36.7, 602.0], [36.8, 602.0], [36.9, 602.0], [37.0, 602.0], [37.1, 602.0], [37.2, 603.0], [37.3, 603.0], [37.4, 604.0], [37.5, 604.0], [37.6, 605.0], [37.7, 605.0], [37.8, 606.0], [37.9, 606.0], [38.0, 606.0], [38.1, 606.0], [38.2, 607.0], [38.3, 607.0], [38.4, 607.0], [38.5, 608.0], [38.6, 608.0], [38.7, 608.0], [38.8, 608.0], [38.9, 609.0], [39.0, 609.0], [39.1, 610.0], [39.2, 610.0], [39.3, 610.0], [39.4, 611.0], [39.5, 611.0], [39.6, 612.0], [39.7, 612.0], [39.8, 613.0], [39.9, 613.0], [40.0, 613.0], [40.1, 614.0], [40.2, 614.0], [40.3, 614.0], [40.4, 615.0], [40.5, 615.0], [40.6, 616.0], [40.7, 616.0], [40.8, 616.0], [40.9, 616.0], [41.0, 617.0], [41.1, 617.0], [41.2, 618.0], [41.3, 618.0], [41.4, 618.0], [41.5, 619.0], [41.6, 619.0], [41.7, 619.0], [41.8, 620.0], [41.9, 620.0], [42.0, 620.0], [42.1, 621.0], [42.2, 621.0], [42.3, 622.0], [42.4, 622.0], [42.5, 622.0], [42.6, 623.0], [42.7, 623.0], [42.8, 623.0], [42.9, 624.0], [43.0, 624.0], [43.1, 624.0], [43.2, 625.0], [43.3, 625.0], [43.4, 625.0], [43.5, 626.0], [43.6, 626.0], [43.7, 626.0], [43.8, 627.0], [43.9, 627.0], [44.0, 628.0], [44.1, 628.0], [44.2, 629.0], [44.3, 629.0], [44.4, 629.0], [44.5, 630.0], [44.6, 630.0], [44.7, 631.0], [44.8, 631.0], [44.9, 632.0], [45.0, 632.0], [45.1, 633.0], [45.2, 633.0], [45.3, 634.0], [45.4, 634.0], [45.5, 634.0], [45.6, 635.0], [45.7, 635.0], [45.8, 636.0], [45.9, 636.0], [46.0, 636.0], [46.1, 636.0], [46.2, 637.0], [46.3, 638.0], [46.4, 639.0], [46.5, 639.0], [46.6, 639.0], [46.7, 639.0], [46.8, 640.0], [46.9, 640.0], [47.0, 640.0], [47.1, 641.0], [47.2, 641.0], [47.3, 641.0], [47.4, 642.0], [47.5, 642.0], [47.6, 642.0], [47.7, 643.0], [47.8, 643.0], [47.9, 643.0], [48.0, 644.0], [48.1, 644.0], [48.2, 644.0], [48.3, 645.0], [48.4, 646.0], [48.5, 646.0], [48.6, 646.0], [48.7, 647.0], [48.8, 647.0], [48.9, 647.0], [49.0, 647.0], [49.1, 648.0], [49.2, 648.0], [49.3, 649.0], [49.4, 649.0], [49.5, 650.0], [49.6, 650.0], [49.7, 650.0], [49.8, 650.0], [49.9, 650.0], [50.0, 650.0], [50.1, 651.0], [50.2, 651.0], [50.3, 651.0], [50.4, 652.0], [50.5, 652.0], [50.6, 652.0], [50.7, 653.0], [50.8, 653.0], [50.9, 653.0], [51.0, 654.0], [51.1, 654.0], [51.2, 654.0], [51.3, 655.0], [51.4, 655.0], [51.5, 655.0], [51.6, 656.0], [51.7, 656.0], [51.8, 657.0], [51.9, 658.0], [52.0, 658.0], [52.1, 659.0], [52.2, 659.0], [52.3, 660.0], [52.4, 660.0], [52.5, 661.0], [52.6, 661.0], [52.7, 661.0], [52.8, 661.0], [52.9, 662.0], [53.0, 662.0], [53.1, 662.0], [53.2, 662.0], [53.3, 663.0], [53.4, 663.0], [53.5, 663.0], [53.6, 664.0], [53.7, 664.0], [53.8, 664.0], [53.9, 665.0], [54.0, 665.0], [54.1, 665.0], [54.2, 666.0], [54.3, 666.0], [54.4, 667.0], [54.5, 667.0], [54.6, 667.0], [54.7, 668.0], [54.8, 668.0], [54.9, 669.0], [55.0, 669.0], [55.1, 669.0], [55.2, 670.0], [55.3, 670.0], [55.4, 670.0], [55.5, 671.0], [55.6, 671.0], [55.7, 672.0], [55.8, 672.0], [55.9, 673.0], [56.0, 673.0], [56.1, 673.0], [56.2, 674.0], [56.3, 675.0], [56.4, 675.0], [56.5, 676.0], [56.6, 676.0], [56.7, 677.0], [56.8, 677.0], [56.9, 678.0], [57.0, 678.0], [57.1, 679.0], [57.2, 679.0], [57.3, 679.0], [57.4, 679.0], [57.5, 680.0], [57.6, 680.0], [57.7, 680.0], [57.8, 681.0], [57.9, 681.0], [58.0, 681.0], [58.1, 681.0], [58.2, 682.0], [58.3, 682.0], [58.4, 683.0], [58.5, 683.0], [58.6, 683.0], [58.7, 684.0], [58.8, 684.0], [58.9, 685.0], [59.0, 685.0], [59.1, 685.0], [59.2, 686.0], [59.3, 686.0], [59.4, 687.0], [59.5, 687.0], [59.6, 688.0], [59.7, 688.0], [59.8, 688.0], [59.9, 689.0], [60.0, 689.0], [60.1, 689.0], [60.2, 689.0], [60.3, 690.0], [60.4, 690.0], [60.5, 691.0], [60.6, 691.0], [60.7, 692.0], [60.8, 692.0], [60.9, 693.0], [61.0, 693.0], [61.1, 693.0], [61.2, 693.0], [61.3, 694.0], [61.4, 694.0], [61.5, 695.0], [61.6, 695.0], [61.7, 696.0], [61.8, 696.0], [61.9, 696.0], [62.0, 697.0], [62.1, 697.0], [62.2, 698.0], [62.3, 698.0], [62.4, 699.0], [62.5, 700.0], [62.6, 700.0], [62.7, 701.0], [62.8, 701.0], [62.9, 702.0], [63.0, 702.0], [63.1, 703.0], [63.2, 703.0], [63.3, 703.0], [63.4, 704.0], [63.5, 704.0], [63.6, 705.0], [63.7, 705.0], [63.8, 706.0], [63.9, 706.0], [64.0, 707.0], [64.1, 707.0], [64.2, 707.0], [64.3, 708.0], [64.4, 708.0], [64.5, 708.0], [64.6, 709.0], [64.7, 710.0], [64.8, 711.0], [64.9, 711.0], [65.0, 712.0], [65.1, 712.0], [65.2, 712.0], [65.3, 713.0], [65.4, 714.0], [65.5, 714.0], [65.6, 715.0], [65.7, 715.0], [65.8, 715.0], [65.9, 716.0], [66.0, 716.0], [66.1, 716.0], [66.2, 717.0], [66.3, 717.0], [66.4, 717.0], [66.5, 718.0], [66.6, 718.0], [66.7, 719.0], [66.8, 719.0], [66.9, 719.0], [67.0, 720.0], [67.1, 720.0], [67.2, 721.0], [67.3, 721.0], [67.4, 721.0], [67.5, 722.0], [67.6, 722.0], [67.7, 722.0], [67.8, 723.0], [67.9, 723.0], [68.0, 724.0], [68.1, 724.0], [68.2, 725.0], [68.3, 726.0], [68.4, 726.0], [68.5, 727.0], [68.6, 727.0], [68.7, 727.0], [68.8, 728.0], [68.9, 728.0], [69.0, 729.0], [69.1, 729.0], [69.2, 729.0], [69.3, 730.0], [69.4, 730.0], [69.5, 731.0], [69.6, 731.0], [69.7, 731.0], [69.8, 732.0], [69.9, 732.0], [70.0, 733.0], [70.1, 733.0], [70.2, 734.0], [70.3, 735.0], [70.4, 736.0], [70.5, 736.0], [70.6, 737.0], [70.7, 737.0], [70.8, 738.0], [70.9, 739.0], [71.0, 740.0], [71.1, 740.0], [71.2, 741.0], [71.3, 741.0], [71.4, 742.0], [71.5, 742.0], [71.6, 742.0], [71.7, 743.0], [71.8, 743.0], [71.9, 744.0], [72.0, 744.0], [72.1, 745.0], [72.2, 745.0], [72.3, 746.0], [72.4, 746.0], [72.5, 747.0], [72.6, 747.0], [72.7, 747.0], [72.8, 748.0], [72.9, 748.0], [73.0, 749.0], [73.1, 749.0], [73.2, 749.0], [73.3, 751.0], [73.4, 751.0], [73.5, 752.0], [73.6, 752.0], [73.7, 753.0], [73.8, 753.0], [73.9, 754.0], [74.0, 754.0], [74.1, 757.0], [74.2, 757.0], [74.3, 758.0], [74.4, 758.0], [74.5, 759.0], [74.6, 760.0], [74.7, 761.0], [74.8, 761.0], [74.9, 762.0], [75.0, 762.0], [75.1, 763.0], [75.2, 763.0], [75.3, 764.0], [75.4, 764.0], [75.5, 765.0], [75.6, 765.0], [75.7, 766.0], [75.8, 766.0], [75.9, 767.0], [76.0, 767.0], [76.1, 768.0], [76.2, 769.0], [76.3, 769.0], [76.4, 770.0], [76.5, 770.0], [76.6, 770.0], [76.7, 771.0], [76.8, 773.0], [76.9, 774.0], [77.0, 774.0], [77.1, 775.0], [77.2, 775.0], [77.3, 775.0], [77.4, 776.0], [77.5, 776.0], [77.6, 776.0], [77.7, 777.0], [77.8, 777.0], [77.9, 777.0], [78.0, 777.0], [78.1, 779.0], [78.2, 779.0], [78.3, 780.0], [78.4, 780.0], [78.5, 780.0], [78.6, 781.0], [78.7, 782.0], [78.8, 782.0], [78.9, 783.0], [79.0, 784.0], [79.1, 785.0], [79.2, 786.0], [79.3, 786.0], [79.4, 787.0], [79.5, 787.0], [79.6, 788.0], [79.7, 788.0], [79.8, 789.0], [79.9, 789.0], [80.0, 790.0], [80.1, 791.0], [80.2, 791.0], [80.3, 791.0], [80.4, 792.0], [80.5, 792.0], [80.6, 793.0], [80.7, 794.0], [80.8, 795.0], [80.9, 796.0], [81.0, 796.0], [81.1, 797.0], [81.2, 798.0], [81.3, 798.0], [81.4, 798.0], [81.5, 799.0], [81.6, 799.0], [81.7, 799.0], [81.8, 800.0], [81.9, 800.0], [82.0, 800.0], [82.1, 801.0], [82.2, 802.0], [82.3, 802.0], [82.4, 803.0], [82.5, 804.0], [82.6, 805.0], [82.7, 805.0], [82.8, 805.0], [82.9, 806.0], [83.0, 808.0], [83.1, 809.0], [83.2, 810.0], [83.3, 811.0], [83.4, 811.0], [83.5, 812.0], [83.6, 813.0], [83.7, 813.0], [83.8, 814.0], [83.9, 814.0], [84.0, 815.0], [84.1, 816.0], [84.2, 816.0], [84.3, 817.0], [84.4, 817.0], [84.5, 818.0], [84.6, 819.0], [84.7, 820.0], [84.8, 821.0], [84.9, 822.0], [85.0, 822.0], [85.1, 823.0], [85.2, 824.0], [85.3, 824.0], [85.4, 825.0], [85.5, 825.0], [85.6, 826.0], [85.7, 827.0], [85.8, 827.0], [85.9, 828.0], [86.0, 828.0], [86.1, 829.0], [86.2, 829.0], [86.3, 830.0], [86.4, 832.0], [86.5, 833.0], [86.6, 833.0], [86.7, 834.0], [86.8, 835.0], [86.9, 836.0], [87.0, 836.0], [87.1, 837.0], [87.2, 837.0], [87.3, 838.0], [87.4, 840.0], [87.5, 841.0], [87.6, 842.0], [87.7, 843.0], [87.8, 844.0], [87.9, 845.0], [88.0, 846.0], [88.1, 847.0], [88.2, 848.0], [88.3, 849.0], [88.4, 850.0], [88.5, 851.0], [88.6, 852.0], [88.7, 854.0], [88.8, 855.0], [88.9, 856.0], [89.0, 857.0], [89.1, 858.0], [89.2, 858.0], [89.3, 860.0], [89.4, 861.0], [89.5, 862.0], [89.6, 863.0], [89.7, 865.0], [89.8, 865.0], [89.9, 866.0], [90.0, 866.0], [90.1, 868.0], [90.2, 870.0], [90.3, 873.0], [90.4, 873.0], [90.5, 875.0], [90.6, 876.0], [90.7, 877.0], [90.8, 879.0], [90.9, 880.0], [91.0, 880.0], [91.1, 881.0], [91.2, 885.0], [91.3, 886.0], [91.4, 887.0], [91.5, 888.0], [91.6, 888.0], [91.7, 889.0], [91.8, 890.0], [91.9, 892.0], [92.0, 893.0], [92.1, 894.0], [92.2, 896.0], [92.3, 898.0], [92.4, 900.0], [92.5, 900.0], [92.6, 902.0], [92.7, 904.0], [92.8, 906.0], [92.9, 907.0], [93.0, 909.0], [93.1, 911.0], [93.2, 913.0], [93.3, 914.0], [93.4, 916.0], [93.5, 917.0], [93.6, 918.0], [93.7, 919.0], [93.8, 920.0], [93.9, 922.0], [94.0, 924.0], [94.1, 925.0], [94.2, 926.0], [94.3, 928.0], [94.4, 929.0], [94.5, 930.0], [94.6, 931.0], [94.7, 934.0], [94.8, 936.0], [94.9, 938.0], [95.0, 940.0], [95.1, 942.0], [95.2, 944.0], [95.3, 947.0], [95.4, 948.0], [95.5, 950.0], [95.6, 954.0], [95.7, 956.0], [95.8, 958.0], [95.9, 959.0], [96.0, 962.0], [96.1, 965.0], [96.2, 969.0], [96.3, 972.0], [96.4, 975.0], [96.5, 978.0], [96.6, 980.0], [96.7, 981.0], [96.8, 981.0], [96.9, 983.0], [97.0, 987.0], [97.1, 988.0], [97.2, 992.0], [97.3, 993.0], [97.4, 998.0], [97.5, 1001.0], [97.6, 1007.0], [97.7, 1012.0], [97.8, 1015.0], [97.9, 1019.0], [98.0, 1023.0], [98.1, 1024.0], [98.2, 1030.0], [98.3, 1035.0], [98.4, 1039.0], [98.5, 1045.0], [98.6, 1051.0], [98.7, 1063.0], [98.8, 1072.0], [98.9, 1079.0], [99.0, 1089.0], [99.1, 1099.0], [99.2, 1117.0], [99.3, 1135.0], [99.4, 1144.0], [99.5, 1164.0], [99.6, 1195.0], [99.7, 1266.0], [99.8, 1336.0], [99.9, 1376.0], [100.0, 1423.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 200.0, "maxY": 1184.0, "series": [{"data": [[600.0, 1184.0], [700.0, 866.0], [800.0, 479.0], [200.0, 6.0], [900.0, 227.0], [1000.0, 75.0], [1100.0, 24.0], [1200.0, 6.0], [300.0, 99.0], [1300.0, 8.0], [1400.0, 2.0], [400.0, 489.0], [500.0, 1028.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 598.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3895.0, "series": [{"data": [[0.0, 598.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3895.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 48.92863436123347, "minX": 1.61557062E12, "maxY": 50.0, "series": [{"data": [[1.61557068E12, 48.92863436123347], [1.61557062E12, 50.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61557068E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 449.0, "minX": 1.0, "maxY": 988.0, "series": [{"data": [[33.0, 639.5], [2.0, 486.0], [35.0, 646.0], [34.0, 541.0], [36.0, 691.0], [39.0, 639.0], [38.0, 695.5], [41.0, 496.0], [40.0, 988.0], [42.0, 639.0], [45.0, 470.0], [44.0, 622.5], [47.0, 674.0], [46.0, 685.0], [49.0, 529.0], [48.0, 674.0], [3.0, 478.0], [50.0, 665.7659765976598], [4.0, 449.0], [6.0, 603.0], [9.0, 573.6666666666666], [10.0, 594.0], [11.0, 596.0], [12.0, 590.0], [14.0, 588.5], [15.0, 633.0], [16.0, 629.0], [1.0, 518.0], [18.0, 716.5], [19.0, 538.0], [20.0, 751.0], [21.0, 658.0], [22.0, 654.0], [23.0, 662.0], [24.0, 521.0], [25.0, 641.0], [26.0, 710.0], [27.0, 650.0], [28.0, 595.0], [29.0, 597.0], [30.0, 548.0], [31.0, 635.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[49.729356777208984, 665.2394836412195]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2232.1666666666665, "minX": 1.61557062E12, "maxY": 1184982.2333333334, "series": [{"data": [[1.61557068E12, 400522.5833333333], [1.61557062E12, 1184982.2333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.61557068E12, 2232.1666666666665], [1.61557062E12, 6604.066666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61557068E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 660.1938325991192, "minX": 1.61557062E12, "maxY": 666.9449076831462, "series": [{"data": [[1.61557068E12, 660.1938325991192], [1.61557062E12, 666.9449076831462]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61557068E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 659.6951541850224, "minX": 1.61557062E12, "maxY": 666.4517569982124, "series": [{"data": [[1.61557068E12, 659.6951541850224], [1.61557062E12, 666.4517569982124]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61557068E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.61557062E12, "maxY": 6.911852293031564, "series": [{"data": [[1.61557068E12, 0.0], [1.61557062E12, 6.911852293031564]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61557068E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 257.0, "minX": 1.61557062E12, "maxY": 1423.0, "series": [{"data": [[1.61557068E12, 1242.0], [1.61557062E12, 1423.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.61557068E12, 837.4], [1.61557062E12, 881.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.61557068E12, 1023.2800000000002], [1.61557062E12, 1120.2799999999988]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.61557068E12, 895.6000000000001], [1.61557062E12, 951.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.61557068E12, 257.0], [1.61557062E12, 276.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.61557068E12, 653.0], [1.61557062E12, 650.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61557068E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 448.0, "minX": 50.0, "maxY": 861.0, "series": [{"data": [[50.0, 695.0], [54.0, 741.5], [59.0, 856.0], [62.0, 860.5], [63.0, 736.5], [64.0, 627.0], [66.0, 671.0], [67.0, 643.0], [65.0, 725.0], [69.0, 674.0], [71.0, 726.0], [70.0, 599.5], [74.0, 664.5], [72.0, 657.5], [75.0, 652.0], [73.0, 861.0], [79.0, 593.0], [77.0, 717.0], [76.0, 667.0], [82.0, 650.5], [81.0, 595.0], [83.0, 630.5], [80.0, 746.5], [87.0, 616.5], [84.0, 609.5], [86.0, 557.0], [88.0, 537.0], [93.0, 569.0], [99.0, 584.0], [105.0, 448.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 105.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 448.0, "minX": 50.0, "maxY": 861.0, "series": [{"data": [[50.0, 694.5], [54.0, 741.0], [59.0, 856.0], [62.0, 859.5], [63.0, 736.5], [64.0, 626.5], [66.0, 670.5], [67.0, 642.0], [65.0, 724.0], [69.0, 673.0], [71.0, 726.0], [70.0, 599.0], [74.0, 664.0], [72.0, 656.5], [75.0, 651.0], [73.0, 861.0], [79.0, 592.0], [77.0, 717.0], [76.0, 666.5], [82.0, 650.0], [81.0, 595.0], [83.0, 629.5], [80.0, 745.5], [87.0, 616.5], [84.0, 609.5], [86.0, 556.5], [88.0, 536.0], [93.0, 568.0], [99.0, 583.0], [105.0, 448.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 105.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 18.083333333333332, "minX": 1.61557062E12, "maxY": 56.8, "series": [{"data": [[1.61557068E12, 18.083333333333332], [1.61557062E12, 56.8]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61557068E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 18.916666666666668, "minX": 1.61557062E12, "maxY": 55.96666666666667, "series": [{"data": [[1.61557068E12, 18.916666666666668], [1.61557062E12, 55.96666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61557068E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 18.916666666666668, "minX": 1.61557062E12, "maxY": 55.96666666666667, "series": [{"data": [[1.61557068E12, 18.916666666666668], [1.61557062E12, 55.96666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61557068E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 18.916666666666668, "minX": 1.61557062E12, "maxY": 55.96666666666667, "series": [{"data": [[1.61557068E12, 18.916666666666668], [1.61557062E12, 55.96666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61557068E12, "title": "Total Transactions Per Second"}},
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

