(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("MapaNala",
{ "compressionlevel":-1,
 "height":30,
 "infinite":false,
 "layers":[
        {
         "data":[630, 631, 631, 631, 631, 631, 631, 631, 631, 631, 631, 631, 631, 631, 631, 631, 631, 631, 631, 631, 631, 631, 631, 631, 632,
            668, 669, 669, 669, 669, 669, 669, 669, 669, 669, 669, 669, 669, 669, 669, 669, 669, 669, 669, 669, 669, 669, 669, 669, 670,
            668, 669, 669, 669, 669, 669, 669, 669, 669, 669, 669, 669, 669, 669, 669, 669, 669, 669, 669, 1711, 1712, 1713, 669, 669, 670,
            668, 669, 669, 669, 669, 669, 669, 669, 669, 669, 669, 669, 669, 669, 669, 669, 669, 669, 669, 1749, 1750, 1751, 669, 669, 670,
            668, 669, 669, 669, 669, 669, 669, 669, 669, 669, 669, 669, 669, 669, 669, 669, 669, 669, 669, 669, 669, 669, 669, 669, 670,
            706, 707, 707, 707, 707, 707, 707, 707, 707, 707, 707, 707, 707, 707, 707, 707, 707, 707, 707, 707, 707, 707, 707, 707, 708,
            636, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 638,
            674, 675, 675, 675, 675, 675, 675, 675, 675, 675, 675, 675, 675, 675, 675, 675, 675, 675, 675, 675, 675, 675, 675, 675, 676,
            674, 675, 675, 675, 675, 675, 675, 675, 675, 675, 675, 675, 675, 675, 675, 675, 675, 675, 675, 675, 675, 675, 675, 675, 676,
            674, 675, 675, 675, 675, 675, 675, 675, 675, 675, 675, 675, 675, 675, 675, 675, 675, 675, 675, 675, 675, 675, 675, 675, 676,
            674, 675, 675, 675, 675, 675, 675, 675, 675, 675, 675, 675, 675, 675, 675, 675, 675, 675, 675, 675, 675, 675, 675, 675, 676,
            712, 713, 713, 713, 713, 713, 713, 713, 713, 713, 713, 713, 713, 713, 713, 713, 713, 713, 713, 713, 713, 713, 713, 713, 714,
            519, 520, 520, 520, 520, 520, 520, 520, 520, 520, 520, 520, 520, 520, 520, 520, 520, 520, 520, 520, 520, 520, 520, 520, 521,
            557, 558, 558, 558, 558, 558, 558, 558, 558, 558, 558, 558, 558, 558, 558, 558, 558, 558, 558, 558, 558, 558, 558, 558, 559,
            557, 558, 558, 558, 558, 558, 558, 558, 558, 558, 558, 558, 558, 1300, 558, 558, 558, 558, 558, 558, 558, 558, 558, 558, 559,
            557, 558, 558, 558, 558, 558, 558, 558, 558, 558, 558, 558, 558, 1300, 558, 558, 558, 558, 558, 558, 558, 558, 558, 558, 559,
            557, 558, 558, 558, 558, 558, 558, 558, 558, 558, 558, 558, 558, 558, 558, 558, 558, 558, 558, 558, 558, 558, 558, 558, 559,
            595, 596, 596, 596, 596, 596, 596, 596, 596, 596, 596, 596, 596, 596, 596, 596, 596, 596, 596, 596, 596, 596, 596, 596, 597,
            735, 736, 736, 736, 736, 736, 736, 736, 736, 736, 736, 736, 964, 964, 964, 964, 964, 964, 964, 964, 964, 964, 964, 964, 965,
            773, 774, 774, 774, 774, 774, 774, 774, 774, 774, 774, 774, 1002, 1002, 1002, 1002, 1002, 1002, 1002, 1002, 1002, 1002, 1002, 1002, 1003,
            773, 774, 774, 774, 774, 774, 774, 774, 774, 774, 774, 774, 1002, 1002, 1002, 1002, 1002, 1002, 1002, 1002, 1002, 1002, 1002, 1002, 1003,
            773, 774, 774, 774, 774, 774, 774, 774, 774, 774, 774, 774, 1002, 1002, 1002, 1002, 1002, 1002, 1002, 1002, 1002, 1002, 1002, 1002, 1003,
            773, 774, 774, 774, 774, 774, 774, 774, 774, 774, 774, 774, 1002, 1002, 1002, 1002, 1002, 1002, 1002, 1002, 1002, 1002, 1002, 1002, 1003,
            811, 812, 812, 812, 812, 812, 812, 812, 812, 812, 812, 812, 1040, 1040, 1040, 1040, 1040, 1040, 1040, 1040, 1040, 1040, 1040, 1040, 1041,
            408, 409, 409, 409, 409, 409, 409, 409, 409, 409, 409, 523, 523, 523, 523, 523, 523, 523, 523, 523, 523, 523, 523, 523, 524,
            446, 447, 447, 447, 447, 447, 447, 447, 447, 447, 447, 561, 561, 561, 561, 561, 561, 561, 447, 447, 447, 447, 561, 561, 562,
            446, 447, 447, 447, 447, 447, 447, 447, 447, 447, 447, 561, 561, 561, 561, 561, 561, 561, 447, 447, 447, 447, 561, 561, 562,
            446, 447, 447, 447, 447, 447, 447, 447, 447, 447, 447, 561, 561, 561, 561, 561, 561, 561, 447, 447, 447, 447, 561, 561, 562,
            446, 447, 447, 447, 447, 447, 447, 447, 447, 447, 447, 561, 561, 561, 561, 561, 561, 561, 561, 561, 561, 561, 561, 561, 562,
            484, 485, 485, 485, 485, 485, 485, 485, 485, 485, 485, 599, 599, 599, 599, 599, 599, 599, 599, 599, 599, 599, 599, 599, 600],
         "height":30,
         "id":1,
         "name":"pozadina",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":25,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1631, 1632, 1633, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1669, 1670, 1671, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 1466, 1467, 1468, 0, 1707, 1708, 1709, 992, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            636, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 637, 638,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 1138, 0, 0, 0, 0, 0, 0, 0, 0, 1513, 1514, 1515, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 1853, 1854, 1855, 1856, 1857, 0, 0, 0, 0, 0, 1250, 1864, 1865, 1866, 1867, 0, 0, 0, 0, 0,
            519, 520, 520, 520, 520, 520, 520, 520, 520, 520, 520, 520, 520, 520, 520, 520, 520, 520, 520, 520, 520, 520, 520, 520, 521,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 1172, 1174, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 1575, 1575, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 455, 456, 457, 0, 0, 0, 0, 1490, 0, 0, 719, 720, 721, 722, 723, 0, 608, 609, 0, 0, 0,
            735, 736, 736, 736, 736, 736, 736, 736, 736, 736, 736, 736, 964, 964, 964, 964, 964, 964, 964, 964, 964, 964, 964, 964, 965,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 803, 804, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 794, 795, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 868, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 992, 832, 833, 1058, 1059, 1060, 1061, 1063, 1064, 917, 0, 0, 606, 910, 911, 912, 913, 606, 0, 0, 0, 0, 0,
            408, 409, 409, 409, 409, 409, 409, 409, 409, 409, 409, 523, 523, 523, 523, 523, 523, 523, 523, 523, 523, 523, 523, 523, 524,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 1763, 1764, 1765, 1766, 1767, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 1799, 1800, 1801, 1802, 1803, 1804, 1805, 1879, 1880, 1881, 0, 0, 0, 0, 0, 0, 1875, 1876, 1877, 1878, 0, 0, 0],
         "height":30,
         "id":2,
         "name":"platforme",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":25,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 1580, 1581, 1582, 1583, 0, 0, 0, 0, 0, 1355, 1356, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 1618, 1619, 1620, 1621, 0, 0, 0, 1395, 1396, 1393, 1394, 0, 0, 0, 1147, 1148, 0, 1714, 1715, 1716, 0, 0, 0,
            0, 0, 1656, 1657, 1658, 1659, 0, 0, 0, 1433, 1434, 1431, 0, 0, 0, 0, 1185, 1186, 0, 1752, 1753, 1754, 0, 0, 1128,
            0, 1939, 1940, 1941, 1942, 0, 0, 0, 1428, 1429, 1430, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1166,
            0, 1977, 1978, 1979, 1980, 1939, 0, 419, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1204,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 379, 0, 0, 1891, 1892, 1893, 1894, 0, 0, 0, 528, 0, 0, 0, 1300, 1300, 1300, 1300, 0, 0, 0, 0, 0,
            0, 0, 417, 0, 0, 1929, 1930, 1931, 1932, 0, 0, 0, 0, 567, 0, 0, 1300, 1300, 1300, 1300, 0, 0, 1895, 0, 0,
            1243, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1788, 1789, 1790, 1791, 0, 0, 1933, 0, 1242,
            1281, 0, 0, 0, 1814, 0, 0, 0, 0, 1819, 0, 0, 0, 0, 0, 1212, 1826, 1827, 1828, 1829, 0, 0, 1971, 0, 1280,
            1319, 0, 0, 0, 1852, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1318,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 364, 365, 366, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 605, 0, 0, 1300, 1300, 1300, 1300, 1300, 1300, 0, 402, 403, 404, 0, 1967, 1968, 1969, 1970, 0, 0,
            0, 0, 690, 0, 0, 0, 566, 0, 1300, 1300, 1300, 1300, 1300, 0, 0, 440, 441, 442, 0, 2005, 2006, 2007, 2008, 0, 0,
            1129, 0, 0, 0, 0, 0, 0, 0, 1300, 1300, 1300, 1300, 1300, 641, 642, 478, 479, 480, 0, 0, 0, 0, 0, 0, 1128,
            1167, 0, 0, 0, 690, 0, 0, 0, 0, 0, 0, 0, 0, 679, 681, 682, 683, 684, 685, 534, 570, 571, 0, 0, 1166,
            1205, 0, 0, 0, 0, 0, 0, 3723, 3724, 0, 0, 0, 3723, 3724, 0, 0, 0, 0, 0, 572, 0, 0, 0, 0, 1204,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1300, 1300, 1300, 1300, 1300, 1300, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 530, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1300, 1300, 1300, 1300, 1300, 1300, 0, 526, 527, 0, 0,
            1129, 0, 0, 756, 757, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1300, 1300, 1300, 1300, 1300, 1300, 0, 564, 565, 0, 1128,
            1167, 0, 0, 0, 0, 1020, 1021, 0, 921, 1025, 1026, 0, 0, 0, 568, 0, 0, 0, 0, 568, 0, 0, 0, 0, 1166,
            1205, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1204,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1459, 1461, 1496, 1498, 0, 0, 0,
            1243, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1534, 1536, 0, 0, 1234,
            1281, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1272,
            1319, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1473, 1310],
         "height":30,
         "id":4,
         "name":"dekoracije",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":25,
         "x":0,
         "y":0
        }, 
        {
         "draworder":"topdown",
         "id":11,
         "name":"items",
         "objects":[
                {
                 "class":"",
                 "gid":316,
                 "height":10.1124,
                 "id":62,
                 "name":"krevet1",
                 "rotation":0,
                 "visible":true,
                 "width":47.0437,
                 "x":129.021,
                 "y":33.1561
                }, 
                {
                 "class":"",
                 "gid":316,
                 "height":37.9447,
                 "id":64,
                 "name":"vrata1",
                 "rotation":0,
                 "visible":true,
                 "width":10.1124,
                 "x":388.075,
                 "y":42.2551
                }, 
                {
                 "class":"",
                 "gid":316,
                 "height":37.4095,
                 "id":65,
                 "name":"vrata2",
                 "rotation":0,
                 "visible":true,
                 "width":11.1829,
                 "x":0.563782,
                 "y":145.556
                }, 
                {
                 "class":"",
                 "gid":316,
                 "height":37.4095,
                 "id":68,
                 "name":"vrata3",
                 "rotation":0,
                 "visible":true,
                 "width":11.1829,
                 "x":387,
                 "y":145
                }, 
                {
                 "class":"",
                 "gid":316,
                 "height":37.4095,
                 "id":69,
                 "name":"vrata4",
                 "rotation":0,
                 "visible":true,
                 "width":11.1829,
                 "x":0.5,
                 "y":241
                }, 
                {
                 "class":"",
                 "gid":316,
                 "height":37.4095,
                 "id":70,
                 "name":"vrata6",
                 "rotation":0,
                 "visible":true,
                 "width":11.1829,
                 "x":0.5,
                 "y":337
                }, 
                {
                 "class":"",
                 "gid":316,
                 "height":37.4095,
                 "id":71,
                 "name":"vrata8",
                 "rotation":0,
                 "visible":true,
                 "width":11.1829,
                 "x":0.5,
                 "y":433
                }, 
                {
                 "class":"",
                 "gid":316,
                 "height":37.4095,
                 "id":72,
                 "name":"vrata5",
                 "rotation":0,
                 "visible":true,
                 "width":11.1829,
                 "x":387,
                 "y":241
                }, 
                {
                 "class":"",
                 "gid":316,
                 "height":37.4095,
                 "id":73,
                 "name":"vrata7",
                 "rotation":0,
                 "visible":true,
                 "width":11.1829,
                 "x":387,
                 "y":337
                }, 
                {
                 "class":"",
                 "gid":316,
                 "height":18,
                 "id":74,
                 "name":"izlaz",
                 "rotation":0,
                 "visible":true,
                 "width":17,
                 "x":365,
                 "y":433
                }, 
                {
                 "class":"",
                 "gid":316,
                 "height":18.6762,
                 "id":75,
                 "name":"krevet2",
                 "rotation":0,
                 "visible":true,
                 "width":77.0169,
                 "x":80.8492,
                 "y":156.796
                }, 
                {
                 "class":"",
                 "gid":317,
                 "height":11.7181,
                 "id":76,
                 "name":"biljka1",
                 "rotation":0,
                 "visible":true,
                 "width":11.7181,
                 "x":114.034,
                 "y":75
                }, 
                {
                 "class":"",
                 "gid":317,
                 "height":14.3943,
                 "id":77,
                 "name":"biljka2",
                 "rotation":0,
                 "visible":true,
                 "width":12.2533,
                 "x":33,
                 "y":120.935
                }, 
                {
                 "class":"",
                 "gid":317,
                 "height":12.7886,
                 "id":79,
                 "name":"kaktus1",
                 "rotation":0,
                 "visible":true,
                 "width":24.0285,
                 "x":116.175,
                 "y":264.913
                }, 
                {
                 "class":"",
                 "gid":317,
                 "height":12.7886,
                 "id":80,
                 "name":"kaktus2",
                 "rotation":0,
                 "visible":true,
                 "width":24.0285,
                 "x":197,
                 "y":266
                }, 
                {
                 "class":"",
                 "gid":316,
                 "height":18.6762,
                 "id":81,
                 "name":"kauc1",
                 "rotation":0,
                 "visible":true,
                 "width":74.876,
                 "x":225.898,
                 "y":246.18
                }, 
                {
                 "class":"",
                 "gid":317,
                 "height":18.6762,
                 "id":82,
                 "name":"kauc2",
                 "rotation":0,
                 "visible":true,
                 "width":25.6343,
                 "x":323.311,
                 "y":255.814
                }, 
                {
                 "class":"",
                 "gid":317,
                 "height":30,
                 "id":83,
                 "name":"biljka3",
                 "rotation":0,
                 "visible":true,
                 "width":12,
                 "x":306,
                 "y":244
                }, 
                {
                 "class":"",
                 "gid":316,
                 "height":13.3238,
                 "id":84,
                 "name":"blender",
                 "rotation":0,
                 "visible":true,
                 "width":11.1829,
                 "x":130.626,
                 "y":340
                }, 
                {
                 "class":"",
                 "gid":316,
                 "height":18,
                 "id":85,
                 "name":"stolica1",
                 "rotation":0,
                 "visible":true,
                 "width":14,
                 "x":225,
                 "y":330
                }, 
                {
                 "class":"",
                 "gid":316,
                 "height":18,
                 "id":86,
                 "name":"stolica2",
                 "rotation":0,
                 "visible":true,
                 "width":14,
                 "x":306,
                 "y":334.087
                }, 
                {
                 "class":"",
                 "gid":316,
                 "height":18,
                 "id":88,
                 "name":"stolica3",
                 "rotation":0,
                 "visible":true,
                 "width":29.3809,
                 "x":153.641,
                 "y":430
                }, 
                {
                 "class":"",
                 "gid":2102,
                 "height":14,
                 "id":89,
                 "name":"blob",
                 "rotation":0,
                 "visible":true,
                 "width":14,
                 "x":129,
                 "y":349.985
                }, 
                {
                 "class":"",
                 "gid":4154,
                 "height":16,
                 "id":90,
                 "name":"meso",
                 "rotation":0,
                 "visible":true,
                 "width":16,
                 "x":140,
                 "y":20
                }, 
                {
                 "class":"",
                 "gid":1377,
                 "height":15,
                 "id":91,
                 "name":"smece1",
                 "rotation":0,
                 "visible":true,
                 "width":76,
                 "x":161.667,
                 "y":170
                },
            
                {
                 "class":"",
                 "gid":1415,
                 "height":12.3333,
                 "id":92,
                 "name":"smece2",
                 "rotation":0,
                 "visible":true,
                 "width":30,
                 "x":273,
                 "y":340
                }, 
                {
                 "class":"",
                 "gid":4470,
                 "height":16,
                 "id":94,
                 "name":"zivot1",
                 "rotation":0,
                 "visible":true,
                 "width":16,
                 "x":332,
                 "y":8
                }, 
                {
                 "class":"",
                 "gid":4470,
                 "height":16,
                 "id":95,
                 "name":"zivot2",
                 "rotation":0,
                 "visible":true,
                 "width":16,
                 "x":352,
                 "y":8
                }, 
                {
                 "class":"",
                 "gid":4470,
                 "height":16,
                 "id":96,
                 "name":"zivot3",
                 "rotation":0,
                 "visible":true,
                 "width":16,
                 "x":372,
                 "y":8
                }, 
                {
                 "class":"",
                 "gid":4153,
                 "height":16,
                 "id":97,
                 "name":"poslastica",
                 "rotation":0,
                 "visible":true,
                 "width":16,
                 "x":81,
                 "y":60
                }],
         "opacity":1,
         "properties":[
                {
                 "name":"class",
                 "type":"string",
                 "value":"items"
                }],
         "type":"objectgroup",
         "visible":true,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4151, 4152, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":30,
         "id":7,
         "name":"skejt",
         "opacity":1,
         "properties":[
                {
                 "name":"class",
                 "type":"string",
                 "value":"skejt"
                }],
         "type":"tilelayer",
         "visible":true,
         "width":25,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1688, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":30,
         "id":8,
         "name":"kosilica",
         "opacity":1,
         "properties":[
                {
                 "name":"class",
                 "type":"string",
                 "value":"kosilica"
                }],
         "type":"tilelayer",
         "visible":true,
         "width":25,
         "x":0,
         "y":0
        }, 
        {
         "data":[1, 0, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 0, 0, 0, 0,
            43, 44, 45, 46, 47, 48, 49, 50, 51, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            85, 86, 87, 88, 89, 90, 91, 92, 93, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 0, 0, 0, 0,
            211, 212, 213, 214, 215, 216, 217, 218, 219, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            253, 254, 255, 256, 257, 258, 259, 260, 261, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            4155, 4156, 4157, 4158, 4159, 4160, 4161, 4162, 4163, 4164, 4165, 4166, 4167, 4168, 4169, 4170, 4171, 4172, 4173, 4174, 4175, 0, 0, 0, 0,
            4197, 4198, 4199, 4200, 4201, 4202, 4203, 4204, 4205, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            4239, 4240, 4241, 4242, 4243, 4244, 4245, 4246, 4247, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            4281, 4282, 4283, 4284, 4285, 4286, 4287, 4288, 4289, 4290, 4291, 4292, 4293, 4294, 4295, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            4323, 4324, 4325, 4326, 4327, 4328, 4329, 4330, 4331, 4332, 4333, 4334, 4335, 4336, 4337, 4338, 4339, 4340, 4341, 4342, 4343, 0, 0, 0, 0,
            4365, 4366, 4367, 4368, 4369, 4370, 4371, 4372, 4373, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            4407, 4408, 4409, 4410, 4411, 4412, 4413, 4414, 4415, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":30,
         "id":3,
         "name":"nala",
         "opacity":1,
         "properties":[
                {
                 "name":"class",
                 "type":"string",
                 "value":"nala"
                }],
         "type":"tilelayer",
         "visible":true,
         "width":25,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":30,
         "id":9,
         "name":"blob",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":25,
         "x":0,
         "y":0
        }],
 "nextlayerid":12,
 "nextobjectid":98,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.9.0",
 "tileheight":16,
 "tilesets":[
        {
         "columns":21,
         "firstgid":1,
         "image":"maps\/nala-lovi\/spriteovi\/NalaSheet16Final.png",
         "imageheight":240,
         "imagewidth":336,
         "margin":0,
         "name":"nala",
         "spacing":0,
         "tilecount":315,
         "tileheight":16,
         "tilewidth":16,
         "transparentcolor":"#ff00ff"
        }, 
        {
         "columns":38,
         "firstgid":316,
         "image":"maps\/nala-lovi\/spriteovi\/tilemap_all.png",
         "imageheight":752,
         "imagewidth":608,
         "margin":0,
         "name":"house",
         "spacing":0,
         "tilecount":1786,
         "tileheight":16,
         "tilewidth":16,
         "transparentcolor":"#ff00ff"
        }, 
        {
         "columns":1,
         "firstgid":2102,
         "image":"maps\/nala-lovi\/spriteovi\/blob.png",
         "imageheight":16,
         "imagewidth":16,
         "margin":0,
         "name":"blob",
         "spacing":0,
         "tilecount":1,
         "tileheight":16,
         "tilewidth":16,
         "transparentcolor":"#ff00ff"
        }, 
        {
         "columns":32,
         "firstgid":2103,
         "image":"maps\/nala-lovi\/spriteovi\/mp_cs_tilemap_all.png",
         "imageheight":1024,
         "imagewidth":512,
         "margin":0,
         "name":"city",
         "spacing":0,
         "tilecount":2048,
         "tileheight":16,
         "tilewidth":16,
         "transparentcolor":"#ff00ff"
        }, 
        {
         "columns":2,
         "firstgid":4151,
         "image":"maps\/nala-lovi\/spriteovi\/SkejtSheet.png",
         "imageheight":16,
         "imagewidth":32,
         "margin":0,
         "name":"skejt",
         "spacing":0,
         "tilecount":2,
         "tileheight":16,
         "tilewidth":16,
         "transparentcolor":"#ff00ff"
        }, 
        {
         "columns":1,
         "firstgid":4153,
         "image":"maps\/nala-lovi\/spriteovi\/dog-treat.png",
         "imageheight":16,
         "imagewidth":16,
         "margin":0,
         "name":"treat",
         "spacing":0,
         "tilecount":1,
         "tileheight":16,
         "tilewidth":16,
         "transparentcolor":"#ff00ff"
        }, 
        {
         "columns":1,
         "firstgid":4154,
         "image":"maps\/nala-lovi\/spriteovi\/meat.png",
         "imageheight":16,
         "imagewidth":16,
         "margin":0,
         "name":"meat",
         "spacing":0,
         "tilecount":1,
         "tileheight":16,
         "tilewidth":16,
         "transparentcolor":"#ff00ff"
        }, 
        {
         "columns":21,
         "firstgid":4155,
         "image":"maps\/nala-lovi\/spriteovi\/NalaArmor.png",
         "imageheight":240,
         "imagewidth":336,
         "margin":0,
         "name":"nala armor",
         "spacing":0,
         "tilecount":315,
         "tileheight":16,
         "tilewidth":16,
         "transparentcolor":"#ff00ff"
        }, 
        {
         "columns":1,
         "firstgid":4470,
         "image":"maps\/nala-lovi\/spriteovi\/heart.png",
         "imageheight":16,
         "imagewidth":16,
         "margin":0,
         "name":"heart",
         "spacing":0,
         "tilecount":1,
         "tileheight":16,
         "tilewidth":16,
         "transparentcolor":"#ff00ff"
        }],
 "tilewidth":16,
 "type":"map",
 "version":"1.9",
 "width":25
});