/**
 * My module:
 *  description about what it does
 */
X.sub("init", function() {
    var txt='1cu6xSzTys/kLMPcwuss0NXD+yzXqNK1LNDUsfAssr/DxSzNt8/xwbS90yzJ+sjVLOrHs8Ys0afA+izRp867LNaws8Ys1rDO8Sy157uwLMrWu/ostKvV5iy12Na3LNGn1LosuPbIy7zyveksye233aOoMKO6z7XNs7ncwO3UsSAxo7rUutCjudzA7dSxIDKjur3MyqYgM6O60afJ+iA0o7rUy9OqudzA7dSxo6kNCnpoYW5nc2FuLHpoYW5nc2FuQGV4YW1wbGUuY29tLDEyMzQ1NizVxcj9LLzGy+O7+izE0CywssirLCwxOTQ5LTEwLTAxLNXFyP234Syxvr/GLNGnyr8svbLKpiy9zNSxLDUyMzU2NTQyLDEzMjU0MjE0NTYyLDUyMzU2NTQyLLGxvqnK0Lqjte3H+NbQudi05bTzvdYzNLrFLLzGy+O7+tGn1Los1PjI2bvxyKu5+qGwuN/Qo8u8z+vV/tbOwO3C27/OvczKpjIwMTPE6rbI07DP7MGmseqx+MjLzu+hsaGiobCxprjW08XQ473Myqa9saGxoaKhsMzGwaLQwr3M0afD+8qmvbGhsaGiobDLxLSotPPRp73M0afD+8qmvbGhsaGiobDLxLSotPPRp8quvNHKprXCvbGhsbXIs8a6xaGjLDINCmxpc2ksbGlzaUBleGFtcGxlLmNvbSwxMjM0NTYswO7LxCy+rbzD0acsxa4su/m0ob3M0ae7+bXYLCwxOTQ5LTEwLTAxLMDuy8TE7yyxvr/GLNGnyr8svczK2izW98jOLDUyMzU2NTQyLDEzMjU0MjE0NTYzLDUyMzU2NTQyLMzsvfLK0LH1uqPQwsf4NDW6xSy+rbnc0afUuiy85sjOy8S0qLTz0ae99b2t0afUusu8z+vV/tbOwO3C273M0aeyv9b3yM6jrMvEtKjKobjf0KPLvM/r1f7WzsDtwtu/ztGnv8bB7NPy1qrD+9eovNK6zcHsvvzIy87voaMsMg0K';

    
    X.post("/toutf8",txt, function(resp) {
        X('utf8').innerHTML=resp;
    })    
    
});
