import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prductos-empleado',
  templateUrl: './prductos-empleado.page.html',
  styleUrls: ['./prductos-empleado.page.scss'],
})
export class PrductosEmpleadoPage implements OnInit {
  productos=[{"nombre":"Leche",
  "imagen":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgWFRYYGRgYGBgYGBgZGBkcGBoYGBoaGRgYGBgcIy4lHB4rHxgZJjgmKy8xNTU1GiQ7QDszPy40NTQBDAwMEA8QHhISHDQhJSE0NDQ0NDE0MTQ0NDE0NDQ0NDQxNDQ0NDQ0NDQ0NDQ0MTQ0NDQ0NDE/NDQ0NDQ7NDQ0Mf/AABEIAKgBKwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAIFBgABB//EAEIQAAIBAgQDBQYDBQcEAgMAAAECEQADBBIhMQVBUSJhcYGRBhMyQlKhFLHBFWLR4fAHI0NTcpKiFjOC0sLxg7Kz/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAIhEBAQEAAgMAAgIDAAAAAAAAAAERAiEDEjFBUSJhBBOB/9oADAMBAAIRAxEAPwDPlo+Y1C408jUjh23zVD8OT8xqNglsu+1BGPUHefCiHATJJNBw2EBfKo8TRMNWMW7nRdOpqyt4TNvvQraBTAr18S06UU6nBSIIp/D4Q9Kf4E5dYPKrB7VDVBctgUqUPUVf4nCr1qtewJ5VlVY6/wBCvPdDqasDhh0oVzDnkDTQmyD6qF7vvFN+46rXjWANxV0wG2pA5H0ry4Z5RRTbA5fehtbk6A9OZ17hUQIkV5lYairDDcKLGGhSRIB+KOsDbzpy1wCDrcIHQJP/AMq1JS2RUJ2h31wedOY5VbXeDouoLt5qv6GlRZUnRH8c6f8ArUxNK5pGhoWobWrE4ZP3x9x/xSuXh1tv8dl//E7ffs0w0lg82fmRWnsWjGtKJwUBOxfQtyzwn2BJprha3Elb5AHJtcvrFXD2FeyPGlwinerK6oGgINAZdNhTDSYsAHQaedc1keHnTBs6VA2eX9fnRQQg6n1oizyLUVMNGxrw2yN2FBEITzNFOnzGuRJ5/epfhxzP3oIG5+8fSpDN1NFFkCpMQOdE0FlbqaAXccx6U1M7GoMnWmLoC3gdwKJnHdRlTllFe+4/dWpi6ypwFePgT0pocRt/Up86XPGkDFXjuM6VFKvhTzFCTA6yJknbuq1OPtGO2s+NdmQ6h1nxoiuxOFKkkCZr3B4Ik6jerVX6lT5iiWr6DWV9a0kWfDrWRY50a653qtfittR8a+tDPHbPN19aGGL75uVLGwehrl43h/rHrUxxrDn519amGgOjDaajnYac6mOLWJ1cetQu8QsH51rPbXTu2eWteBG5iaNa4lhwNXU0VeLYbm61rE0sV6pVlwS4tos+VcwgAsJhSGzFe+Qqz+9Sx4jhj86+tc3EsNtnX1pEvZpGnELDocwZiq79SPzrXcHVCSjKpnVZAPjWJ4bibL4m21twSmYwOo1H6+tau4/urwKmUkNHMA/yrpO453qn+L8Mte7YhQpjSOs1hmwcHRm+1a/2nxpGUKJ0zeu32r523HHzGbTGOkVKsWjYFz859BRLGBI37XqPyNUye0zzHu2HiKbw+KxN2cqBF+pj+VRpZX3tWll2E8lBJJPQCaVtX2d0XKVzEGM0nLv4DalPw6oM9xi7Tz/IUXhuORLnvLzhAQQs6b7AeU1WWguWRHSvAmkGKWb2gwexvL61Icewn+anrUUQWxUWtg71Acdwf+avrUv23gz/AIq+tRRkQDlXrWlPy0AcZwo/xV9akvHMKf8AFX1oONhZ0Fd7gE1JuMYX/NT1FQ/beEB/7qeooaObYHKoFAaiOMYU6e+T1FSXiuG294nqKpa5FjlROyflrhxHDcrieork4nh/8xPUUIkUHIV2QV63FcMBrdT1FA/a2G/zU9RUJXzNcMn0j1ojW0+gHzqt9y/1H1olpXHzfeqh9MOn0Cjfhk/o1Whbn9GjKzjegfFpZG/qa64icl+5pJldtjUGVxuajRoWbY1ifWvXw1s/KKTKvvIrwW3O7CKrJtrdvkgrgi/QKW93l+aamjsdjQNoLfzIPSik2h8g9KrnzH5qixI3agtF90fkHpXBLU/AIqrFwz8Vcxn5yKYatzasgSEU1Jbds65FqiLxpnJqSXerH1phq9whVHDoApHTetpfxJIVueVdfIVguAhXvhUmSr6a6wJrfnAOyKAjaKs6HoK3x+MX6WxWKD6ncADToNBWGxGLGc/Fua3eI4XdCNlR5jSFNZi57LYkkn3b7/QanKEU34sFtAd62WHd0tKMpnLvy8aqsJ7L3w6lrTlQZIyHWOVam9gb7Jl924A2GXu2pIWsU+dipbqa1XH+EoLdhjbDKLQzNAIzTBOm51FQtez14lew2nVT1qy9pL6WwiOcoyiFgnNlyzC89RNLDe2QZLP+Hh1cnm0ADx0/WrThnC0cxeSzaPygjU+ZMD1rPYjijySiKOhKgt5AyB96Da4tiZ+LMOjKsfYA1Gq1OLw9pVZktpcVPjyasg6shhgO+I76pW4phj/gj0q14LibV1wcvur6A9q3pI2Omzjqp/nVb7XYY2rgyhQHUN2R2STuU6KdNOUxypYSuTH4aNLX/GubHWeVkf7ao0xN4j4QPKvTirnUelTGtXIu2G0NpR5UC/h7Mdm0G8BVSbjncj7VfcMuFVGzHyphKWsYVJj8N6inV4dbYf8AZSnbuKY8qDiBppoaAIwKLMWkpQ4czK2koZulT8WvSpW7jHUkgUTUXw10nSwkdwFQ/Zt7/JT7VaYXFNsuamPfP3/agwB1Gk/euVW3/jUlS59Q9Kl7tx8w9KIKrt3140nma8S2frqful+uiuDkdaG2Y7k0QW1+o0QIvU0ACABuTUFPcaZNsd9cqDvohcIwOoNTLkbUeB1NeDDzuaCKXW6V65JOoov4VRzrx7IoBi2PCohO8UwmEWjJw/pHrQVowwn4hUntKB8X9elP/heUD7UUYYxsv2qh3+zwhcYrAmQjn7AfrX178aetfNPYnDEXnfTspGn7zD/1rclqJTz409aGuKJpNzRLK0Fhbcmm7dKWVpy2KAyivnf9olhjftlSB/dga9zt/GvoorHe3Ntc9pjzVx6FT+tRXzp8Dcn4qn+Bc6l48qtxkFEOJt6aiaopLWFZHRwxlSCP4eBEjzrU8Xw638GWA7Vkh1PP3baOPKZ9aRuX05Mp9KufZm4tzOmhV86Ef6kP8KJWFfAsRu3pXlvg86nNWgsXBlAzDMBBB3kafpXe811ceFFUK8HIMQx8aZThqqdVbyYj9atRdnYg+FAVhMsaigW8NqOy8f6qsBhBGn9fagtiLfN4jxrrGNVjAcR30EXwAnUjxrx8Cv1ad1e4rGZN2RhyEiaHbxecdkeU1UGFpFjUijZk76r8QzaEqf68q7OehorLqjdBXFPCmfczyNcLcb1DARYHSpKsDlRGPcaHz2oPI8Kmg13HpRUQcwaNatJOs0ASn7w/ryoTqJ+MVYnCqedDfBr1oFVH7wqUdTRvcovOpZU76GANcSKirjpNGfLOimPCpPdkaKR5UAxcUfLXhvjkPvUGRz1jwqS4YDctPgaI8zL3+teggayfvXowqE/E3pTVrDLtLd2lBrPYqz/dM/1tA8F0/Oa0tJ8Mwvu7SJ9KgHx3J9Zpxa0j2KYsJQ0FN2UoD21ptBQEFM26gmKyn9oSKMMLjbW3EnoH7P5la1lJ8UwYvWXtNs6kefI+Rg1FfEG47bGg18Z/hQv22m8L96exHDEEq9oggkGBsRoedL3+DWgJCn0/nVC37dtEQRJ7prU/2f4vPfEKQuYco11/hWUThyBhkUg961uPZZslu7dIA92rnaJIQAf8mipC/GF4vih7x4Bku3aHiaqnuk6+8Y1rLT2cgzfFAnsneNeXWl0t4YzJHp/Kpa1Iyi8Qupqtxh4g0M+0176wY7q0mK4bbf4XHhFZy/wEq52INSVbxs7gv/VrkaqvpULPtGk9pPSiDgwykZagvA8xAiNNfGqnZtuMYdu6ev8AOusvaLT70r0g0qfZZ9IjXvr237KvuQPWhlXKYpj8GJ25GgNjMT/mj0qrx3s66ICoMyKqruHugkS+ncaafGrCvyrzI/Sl1xl0fIvrXj8QvD5F9aBqHI2Fei2/dVa3Frv0L61JeMXIIKLQ6W9gv3UZrzDpWZxXtA66QJ5xU8BxS7dJygCN6qNKuOjeK9fiSDmPSs/iFxG4ykUkz3ucVF6af9pIdz9qLb4lb219Kxxu3RrAqa8Ruj5RQ1uLeOt8z9qKMWh2k+VYi1xi4N0B/rwp61xi78qKKqNaHnYGrvDYW29sOCSZcco7JI6VgbPE8TyVfWt7wqThgSIOjGOr20Zv+Ratce0qVvAoBJknpMD1ihcPdXuFVRSUIJJdoGuk9nu27qrlvKD2pG+oJFXPsxg0UO6Sc7kyTJ7IAjXlIPrSxNX9u4fmVfJj+oplAOn3/lSwFOJtQe5en3p1Fj0FJM2lNl9aBpKOlJo9MI9QHrqiDUqisZ7S20tXMzEBbmonbMPiH5HzqjfHWPrT7Vpv7QuEficG4UgPbIuKx5ZdHnuyFvtXxa97PXl1FxTOwG/hvVG8bidrXIVZhsBGp5D1imcYBbw9qwT2r757hOnYUyZ/1GfSqX2O4ALYa7fbsp2rj8hGyJ16d7HurO+23FL1++WUZQOQPwgaKg8F37zQb7JaPJPtQDg7J+Va+SJisSNi3qaMnEsUD8TetTVkfUnwNqPhWh3eG2ztAr5oeIYlt3avTfxMau3rRe30ccKXrPhRG4PbIr5vY4riU2dvPWjj2kxY5n0qK+gpwpB1NenhtveCPOsAntLi+v2oqe0WKDbz3EVU7bx+HI2hJpF/Z63PxGs2vtLifoWal/1NivoWou/2rHWgOasfdUrdsVpgotsnYUzh8KG0bQ0F0inbbErEz30Gc4zgsjjXQ86tMBbWysqZJ5ij45Udcr7jY1WWQq6LMd9Rbi6XF6aioHK29L2XFHKzrVR49tY0NCbDDrU2XyoRDdaCDWYoDM1HcNQnJoPBiHHdX0r2bxRbBo+8rB8Ud0/ICvmit1FfVP7OMKl7CFC2XJdcbSYYK/5k0nVL8UWIdix6SfGtr7OLFlP9J+5NWA9ksMZLO5nplA/I1ZYbhVhFCqzQNBJHWelW1nCTUyh0poYS11PrRlwyd/rUVW3Dp5ipu+p8aefAKdiaq77QT4mpaG7d2mUeqq007bjlR7V6kui2R6KrUhbuUwj1QW8gZSrAEMCCDsQRBBr5Zg+C5HcM8Kp7VxpAto2qqvVypEnlMDWvqGffppH8f66V8u9pb1u3leczaoAp3iGEkbdlte6ooHH+MLkCWxktp/21I1uONPeOOSjkP41kVSZkgk670HFYprjl2iTy2AA2AHIV7b8KjUGNnuFRKd1Gw1tmK5RJLZQO/T+NW37LQE576Kw0IKvlB+nNk38qmmKpEH01J2XmKcvWmUSMrKPmUhlHjGq+cUuYO8GmriCWEbUV6cJ3Ua3w9jBCOARmBjSJImfEGrK3w4m1mUvmBbPp2CByRvqAkkdNaaKT8LpMV7+H56VYYhgGIy6iFBJ0IGgOm9QS+6jskL4Kv5kU0KtaETUcw6VZjiV7Yu2XpplP+pYg+dRF0HXIu55dDFNwxTFT414yE84p1MMg61DIC2jetbYVr4fTX7UEjLsZFWN1SDyPhSz89DQVl8k0ALT7WAal7jTrQKITRRPWiKsbrNGRlOhEUAFLc5rveUwlv96imz3A0CQzGrHA4MOjs2mQKVjmWaInwmhe6XpVpbsKLLoHgsVJB1gKQYMd5rPK41Jqnv2LamC2Y/uEZR3ZiO15CK3H9m11E98iMSDkeGEEfEp1Bg7DWsimEymDBM7fyGtaH2PdUxMDTMjIVn5hDgA89FPrTYlj6G+INLXsYetddNI3Wq2MnrGKJNXOFuzWYw761cYS5UTWhR9J6Vlr96ry/dy2nbop/KKx97EVOVWdrLCXpeJ5Gi3bwV4J3129aoExRBkSYEmN401qxe6HUOrarqZ7pDA+RPpXn5eX15yM3rku7F6mbl4KpZtAoJJ8B96yj8dKEKkawCx0EsDt5Ame6mLfGUnKzTrl1IgnxNdZ5uNuM3ycZV5xTiPu8PcuGAURjroM0QvkTFfHEIfD3VE9h7br1ykG0x//AJ19axuFtX7eRzKkgwGOpBkeOutY697Mfhmdg7OjoyZgo7CmDmbXUghTpHXlW/aY3x5S1kl4Ocmd7llNjla4ufXqiSw8ImhXcG6ZJ7QcSjLJD6xA0mZ5ETqNK1vDOB2HKowUIIZrgYNc5O3vAQMg+WYgE+M2FpwHDItu3atZzkQ5nVIEudPjMDWRuBvNT2jplVeD4LcClICgZizsvYXMUATNGr5A8gT8Z6Gj3OFG27/3rBXQhkCEoM4hu0zBYUnMBvsB1q1OIe6xiUWGVVzDnBBLb5gwBJ8B30q4tkBs7sTLIWzEZnJntZsxUFdo5xXP2dPUHAcFdIUXbbgnOJDglWWAWXKWUiJEfV307jLKIhW63ZJIzAZgCY3E84iezz2pdLmUA6GDM5nBJM5yQQCw1J10BPdU8TiYRiAWhQgIhVC6E5ydYgkTPM7bltv0kkQNiy57HaGVSoc5gogg9k5Qp0iCW5bAA1PDcOeVLFCmfsNItsgA1CoNxEczNIowNsOdJIZEywCIMsrfOTLa9N6s8JdtnTOg7EkELJUx2NNCNJ5mlRScVwTI5ykhGjICza5QJBIEAbele4PBrlLu7afKg1nkC7Ea/wDj51aO6aXIGY/Ax1MRE9qco35GREUnjMYMxDkACQP7pWzQdYII3gHUyJpOVvUM/Zfi/EktuihEIZFcOyl2M8yHJUeQqsbESSTGpJ0URvyinOK2PeizcCgKUZMoOoyu0eUDeqm7hROh5DYdwrpZqS4Gof6WHlXOjc1q7/AOfmH+4TXv7Jbm33Fa1nFHfwbqYKyCAQRqCDzBpZ7DjkR5VqRwosuUuYmRrqp5x3HmKXu8Fb6/+RppYzRw7/Qx/wDH+VcMK8fA3oa1FvhTj5j5PRfwN1SAXbwzDlrv5impjHrhnn4W9DRW4c8/A5J/dIrY2sE8mGiTr2jz36Cuey+gz84gHf8A2jWpauMhZwhO6sO/lRrPCCzdpgB3TB843gHStFcsupKFnLAgwFP5sAOf2oFy0Xyoc69owGK9ot9Qmdv0qXks4kkFsFjbRJmQSSxBzAQo2ACltuYFCxLjOUDAHtJOUGWjedgAYHfFaFODpZl7l0BTAhcszIyy7HYR050jiMFgbJDkZ2PaU3H0037KQDr3VztakUlrAPdgIhZGCsWzQqEaOrs2m469KueHcJSzdS4zElCMoUQiToxLHVtCeQoeP9p8OVClWfKNFQkARyGgHmZ8TSln2iS4hQ57eXVUOgaDMZwIkjrHSn8vwvX5fScSsVW3qW4T7RW8RbEFZ5qQQ6x+Y7++vb7oPicp/q/mK7704etEtmrXAvrWbu4q0B2L2cz8KgaeJOwq34ZiNJIHk0nTuG9ceXOTljny5etxb+0eKyYaJguyr/8AI/lWIuYrvFa/ivDlxKKGY6arIUQT3MD618941we5ZfL7olTqrgpBH2g1u2V048t6h/DXzm0OoBI8v6NMfiitt22DwuuwLnJv/wCY9Knwr2TIW3fD9ogPkJCqFYwFzQZJB8JMU1wjiKo7K9rNB7E5QFZZAlid/wCdfN/yeM/2y70zzu/FNxXHICky28gDRQco7R8iKewHHsMgAYFj9IAZt+oBHqaY4vhrt66X91bUtlARyknkDmEgzrrHdSFzheJQHNYCKNZQB+uyoBHmK6y97xef1XacZtuJVBbRVzMzgDsgTIHl1FLvilu5CFuKygOFEEBQZUFNjJg7jx5Vl8VxG4OwiPkU6shBduWbJpykBe/xq2weOtuhyKwdV0TKA0HQmAe0B9JO400GUdeM5fn69fi4ZNq7ucRzTmR3VBmC9lEYSVaQxkiBqJBM66br2cVlzF0dLZARUlMgMRoZJYxMbgZqQtlkd3csrKVyLkyowJEkGJLRzOuwjSvMfimcOCVkuChYzK6w7kiFb4j07WsRNb+upjGYtMwClgSJAgAkDnoCDtBiNzpQsbxC2qShl1djkUZly6DMCPkmNRr0gGaqCYYBA3ZOYs5g5wFkoCSZzRAA6b1LHXHkFwhz7lA6vqAxBnskGNf41Mla+JpiWIBPw5ZaSBnkQdBqAAJgaCB5HfFO+UKZQ3FyyiiWUyZhoOhPI6nrFVeFwLuyqLN4hjKEhtEIPZ6c5k7bd1GxOEZHZni0WPaz+6kKNAEBeIAjberiWmr+JGT4F7RE5CMvZE84Vjvr37a1LCXXyqFRDIVmViWdYIy5lAC6aGDMb6EUliUvZ5yvlXTOqMysqkyUcSq5u7WPSn+GtksXGzobtxwFOWMgC/LuTAkTv2ieVWwOYnGoADd94VkrHYlSNSVGoHOWjTeakMVaIRHtI4fMXdWGbsDMHgDcgg8tyI6rWsPbdUUnOqgmVZme4x1WDMJsdcwkjSdaPhMHeUnIoKAlmRXQuARO8AROsGDtEzSRKau4ZQmgi3DADTtZmXK2YmRoWMjpymszirCK7Kt8wDA/urrf8gomtxZwpdAEZSPiyuNIYDkQdiCCO6qriuNtpdKnPICTlaBqinQTpvW5/bNm/C3vm6Hwyk1I3yNw3+00guDB2tP/AMv1Y1xwCTrYkdSz/wD6/wA66Ymnxim2CnxIP67VBMS5aG0HhtSjYBJ0swDrs/dzO21evw60NrRbTYK0+EgxUw0yOJuTCIR1Jgt6jQeA+9COPOu88zIAnkJ6eVKNgE0AsFep1/MCf/uonCANKZw4ECBmjoQ7rIqWVdi2SzfcahVWI1cCZ5gRRbSgP2chdSRmYrp4FjvrymqxcZiFXI7M40+NJ0HIxv4xVbfwmdixDjUHKCQk6fCHBy+RisXjyqyyNZbuFQzkBRmIOqkgLp2iBAECQZ0rzimLUoSoDkqQBIW6e+3cWA/+k6+NZO2hRLiKXAughwpOp07QzLoSOyeRBiKr7Vkof7sPEQQyllPUMgeD4xUnCtXlAsJaN66qMrMFYli3aYA7kqeYg6eNQ9prqJdK+7X4VUZtdFJ7Q00mQYoNvBX1Lm385UvOYTlaYJc6jlBOo3oOO4XinPaRI1MDIonqI/StzjZdYtlisFxMp7InWD08qXD+XnVh/wBMYo7W/Vv51NfZPG8kH+5a2yronc1wv5TVkfZTGj5F/wB6/wAaSucIuowFwACRmg8p1iO6iNDgiUspn0LdsgdD8M+UU1guLurDJCwdDJJHgJj1pDGYhWO+2gH5UBGk6A+Sk/pXg57yu44+u/X1jgvG3ZAXfxJgSetPcYuWrqMvvCsLmLofgygmZ69e4V8rwgvMeylw+KsB6mBVri7GNez7rIqW2BDnMQ5U/EFgETHXcSOdb4XyXqz/AKcePKXoHg/GMQASbjxnyqCxZHRipzBJ1Ik69/dSGC4w193PaBEuZIygMR99duetBPAcQHDqxUWz/dqqMxUDQbwCdO+iXcKitmRmttmzOgWBPL5WJTUwDqMxGulbvgnLu/Xe8Zfps8XudnWQmoJ1gHke7cVteE+1edFzaMuVTJ31jnvpWKR2f4cveSWygc+wELMd+gprAYm2jlGyMrz2mzhljaFVCOX1Vjj4+XHuOXPxZP4tbxjidq571RaRnS3nzR2iuo0I1MEDQzuKzuRbjQt1UctORwCM4ELDlVI2HxLBjViaFeuJkdUh3IZRczFR7p2BZGV41EGoYThLGWHunaILMbahAeQ331k+Xj08c5Wbyb8eydra4YcW7p1ABzMq9rMMqup1k9mNT07jXuJwiMj5XDgIVDvMKtyQYK8spYyeR5bkGH4UewM9gKrhsmdXVdQWyg5YMA6j70/huGIUVGKMloDIquguMdZzuWyiTrIAy7AGNenrXTVXwmwSGJ+C2h7eyKSNTPKSQAN+11NGw/ESLbhHa3kyQxcGcpgh2gnIZAEnmDO1H4jgsTdUWwthLQ2spfJXcNLdoEtKgz3bUCz7NuB2gmqMh/vg0I8SsZVEAgEa6ROu1PVfZn+KYtrbnO75joyi65UZxm7GYyF8JGognalcJ7SFQVZ8Qeiq/YM75ixMRpyq+u+xbMgUm2yJOSbmaJ3CuVmJE5e/zrxPYKREKwHR09IyVfVPZT4L2kLMSconmqnPI6urKfPXnWhW2txyCGBDMAGz5GZfr21BgywZfh1HKCewwGyIOhGXN5nn4afrV4nBHQ/C5DDthWA1y5SytJykzqYn8w9T2BsXWUe7KZQq5vizFtBvmJkb86aw15iFUI2XUwNEgmQOWnfzO3fNMFeCFVA1knR8vdo5aDHzTJ76Pa4dey6kAEjVpkEEbZj+UVPXF9nmLu+7AAbtFssS0kMsyZ1gZTqfvynfwNh2zOTmMT2F5AAfYCpvw2RMklTMoCATlKdnQtEE7mlvdgae7v6afPsNBt3Uz9m/pkWL7i2niCfvBqXvHIGh06Zo9Jryurow8fEtPZtt4zy7q5Me8wVcabsZA8hXV1ETs41nOsac5I+1MjEONj4/F+c17XUaAfFNrrr4sf1r21jWCmS4jmoI9SWrq6iB3sfI+K6f/I/xof40j4Uc/wCp2/rlXV1AW1jLpmVK+EnznSiNJEs90eAYDyg11dQe2nYCAXPcSx8N6LcvudBmHgSK6uoBlZ3z/wC9v0r23k5q/mXPppNdXUHiFDMIf+f6ipK6rqEcnoCdfSva6g9bHOBpauEHv29SKja4iZM2rp7wRP517XVQ8/EBGq3vApIHodaq8Vxe0mjpfg/uJB9Zrq6oELnGApGW22mxZ7cz4KRXtziTZQzo876MNPCHn1rq6gng+JodrbkNvLSQTvzP5UwvE7Q+FXJ3IDsIPcNBXtdQQu8bU7o5nn/9kx5UWzxFIAZTB5yQe7xrq6gnj+IWOYERp21C+YAJNKu9txmKrHIByAe6AK6uoGEsWT2VDDbQkGY5md4pu1hVUDaAde2AfAADvryuognuEYEK5UnYZ2keBnpXmHwqIRDgtr/3L1woOpyEx66V1dRXj2jsmLYmZhGUAbfSJjTrV3hsZAGZ1YgfMwU/nXV1Aw3EUyyrpJ37f5E6UW3j9BLJ/vX/ANq6uqj/2Q=="},
    {"nombre":"Huevo","imagen":"https://as.com/deporteyvida/imagenes/2018/05/08/portada/1525772857_240454_1525773041_noticia_normal.jpg"},
    {"nombre":"ak-47","imagen":"data:image/jpeg;base64,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"}]
  
    constructor() { }

  ngOnInit() {
  }

}
