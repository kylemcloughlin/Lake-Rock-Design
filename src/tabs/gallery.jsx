
import React from 'react';
import '../styles/gallery.css';
import PhotoGallery from 'react-grid-gallery';
import {Helmet} from 'react-helmet';


const IMAGES =
      [{
            src: 'https://lh3.googleusercontent.com/pw/AM-JKLVjcXFSCm9me71If7wdugzcPqyJKQQnfOMDBpKcUzcxQ-wWpcFClufSPi4g9pNxKkClJVXoV7My6i08pACHP_EfEbsRvDHQJhQb6a4XDg0Ix-FTDp_HtMe76wiTLT9r_YsmzDMT94ZWY5oPrkmcGJq0=w727-h485-no?authuser=0',
            thumbnail: 'https://lh3.googleusercontent.com/pw/AM-JKLWWOkxQ4ugrRGwwc9RAntXz9_2lzSbMPNpXAljWJmPmglQ6lVyGBgrTeGbfqWd_G0CovzouWnHarBPqpLER9XNIzQqQbvSjAaFC7rS-OQfUXEBJ1AjnrgdfIdLr-ZxD0Pk0y1uj8Hvs4VaXCJ8fASva=w588-h392-no?authuser=0',
            thumbnailWidth: 320,
            thumbnailHeight: 200,
            caption: ""
      },
      {
            src: "https://lh3.googleusercontent.com/pw/AM-JKLVTJn8mlsQXAGlDUSIom-xskIBP3YkiwnUkP_3Bs6njW6tUw-wTgeRNieeoNLHnHS3r3_SBEF_wKO7O2HjjS99S8T7b5uZ7UfXcAR5ShqwMKbLCITAqMD9SwD9GA3OyROkJ0JqjdVhyuKBjnEeFveq2=w526-h789-no?authuser=0",
            thumbnail: "https://lh3.googleusercontent.com/pw/AM-JKLVc579BBFJbEJyMibf4TnHmcsj35pYZ812qCUYaCyIYykVuG97sFU956A_PCY8le1YrUFAvsne_7me4wj1lNnCrSENejijDyniIrtVSy3A3PknqTWFzur8V15LN_ompr4eLxSxo15UmS7FUImozXIyd=w336-h504-no?authuser=0",
            thumbnailWidth: 250,
            thumbnailHeight: 320,
            caption: "",
      },

      {
            src: 'https://lh3.googleusercontent.com/pw/AM-JKLV0a154kKAoERZM3xmFMxQyq41liVkzhHJgrmIIAL3fI98h7C9l9YzxSiR0OvUQly19bwTXh96vZ6H1h3IAj1EaSsWfe3h7IIcQtAncsiz58o6Jdbb76-KoJlIGollBKtlKv2Utk7sNe0yVk4WT2EaF=w727-h485-no?authuser=0',
            thumbnail: 'https://lh3.googleusercontent.com/pw/AM-JKLXbXupmm4zpoQ8AvH90otxluHnz0yfyZhpXp78b11CvcX4Tj1s8ypSpvjRiUSvQ5LwiC0J69Sg_kKse6IQ-1-itbmaJE0FEMm_aWMkZbPPCL_CBCco_3cQfGKIOKLqFlaCRhnqMR53HI4fdQVcL-jLi=w400-h267-no?authuser=0',
            thumbnailWidth: 320,
            thumbnailHeight: 212
      }, {
            src: "https://lh3.googleusercontent.com/pw/AM-JKLXsPPlHlO7Jx6ZOaYOTs71feXkomuLYGcYEofrXKCvU9KwSo8MnmYEH01UoI4l16ONzhWRKuReFbULHSzzF4NCqQWUdYqRLxndg7wpV6SgeHF4hYaSECpybMdlEPrrrHLZe200YvfqYNVYUz9T2y1DA=w500-h334-no?authuser=0",
            thumbnail: "https://lh3.googleusercontent.com/pw/AM-JKLX1AgG2Hmbqmvj-P7bnEpXLoS25gOVp3JCoE_fnmxCaWfB8iGE_bpbGUpoV-MrZikmGGEvJ_pOAaWsZhzJgwSPK_MfOd0exxjE133zGBPZ56yowjfcNjJcp2BPjISay8_bT6xUBE9ZoP4rjBoNiqxEE=w450-h300-no?authuser=0",
            thumbnailWidth: 320,
            thumbnailHeight: 174,
            caption: "",
      },
      {
            src: "https://lh3.googleusercontent.com/pw/AM-JKLVCzW-RT-F1KzC7Kxnfr3a4OWEbzPmwCitAcJ8b_uq01efzocCKz-Lgp1JW04oYsSgR94G0o5xXH8EZL-pq5wAgtGpiJrFzkCFCwvycDYwWTdPPqnQgpoxRmRSq-BjBFDV1vN6M64GErsnw-ogfuCUn=w526-h789-no?authuser=0",
            thumbnail: "https://lh3.googleusercontent.com/pw/AM-JKLVBodAjGnQWFPUyhw9ukbwb87ez0YnhhM72bbjiWV1-cNf0P8j3VLOtAaqA9qFTSBXZ1wMT4VnL1SXM7qBQfSEZpQDH7ss1CCimaSZrYex4g8dz3iGWjrniYafRQQHLQ_27fKGDeh8PZu3QKlVMBRat=w259-h389-no?authuser=0",
            thumbnailWidth: 250,
            thumbnailHeight: 320,
            caption: "",
      },

      {
            src: "https://lh3.googleusercontent.com/pw/AM-JKLUGUHCWh084Sdia4JzmZsJbGCYN_YApLxrUxKp6-Iu61itsgQU8triIw4K3JLQKCSZ229OPppO3s1U5nv2pUrRb16EPKUSNvfG7MuhLyE0K4nOdRPup7k09FUsZR4o9DybmsEyZkn3v7fxcIAhJbTYz=w526-h789-no?authuser=0",
            thumbnail: "https://lh3.googleusercontent.com/pw/AM-JKLXphTCNpMxs0FphdUsAhfr3K1t2WxKx6MlcahRAdm_oMGo01lMs01VKpPC48pcbia-K5YRnltUePgcfBhdz5gcCYWTFs5HgxINO-PQ_rmKKFS6hATqj5DEiO9pgBBWjJljkf2C8U3oIM9KLbrk4Dxpn=w259-h389-no?authuser=0",
            thumbnailWidth: 250,
            thumbnailHeight: 320,
      },
      {
            src: "https://lh3.googleusercontent.com/pw/AM-JKLV1i__JCfer1OzUUslzQoPFHaMY47eoBX3Zq6f5GLJ6ibibgOTNMdzAs7Jwob65lG-gYUXz2cXPEMXnYqmqfjkljNB9gFZ1vjdWPLLWHuK2L-MGVlzyKpjUftyDHVFCdQCoV8B7wB6xP8sIvgnx14a8=w623-h416-no?authuser=0",
            thumbnail: "https://lh3.googleusercontent.com/pw/AM-JKLUyXSS-z9LcHX1XHEeRZzAWBNIw3E88_uKHZtqq1gjiUGZf8aSPT1YgE0xYKjFHzFCmpuTD9lhDjM80pZpTzLXDx6fSOKz5DChdkCAx8n7OcarwCs16_nw7BCy4XDkkrYU9u48H4D9fqhG6-8qg_3M1=w388-h259-no?authuser=0",
            thumbnailWidth: 320,
            thumbnailHeight: 174,
            caption: "",
      },
      {
            src: "https://lh3.googleusercontent.com/pw/AM-JKLU6evGT47vJIrLaUfW1mvejgBao7LlUQ7_cM5q-LW2xbecw1zmlQnt5uXkhsgsA_0d0OC3xP1ta8jQ3zSzpgxvajjqgfjZ6xH_hi15T7IAbbGds2kPaSa5sg3qTt_hF3OHjUPhQ8-bKhgJcjcH16QEC=w623-h416-no?authuser=0",
            thumbnail: "https://lh3.googleusercontent.com/pw/AM-JKLXuCSMVtL0x3iQ-jcTOXle2O6WiFzcpyrrtcJG1j0upqSfj0OWTAmT0Hzx_r3QVC4LpCBBAJ2UOZKUJMyyPa31LtLhP0dDo5a3UgxYljMH53YRysc1dhBOTtEIqeNGoV3ioYGzVlBPAeBAttLWk74_6=w388-h259-no?authuser=0",
            thumbnailWidth: 320,
            thumbnailHeight: 183,
            caption: "",
      },
      {
            src: "https://lh3.googleusercontent.com/pw/AM-JKLXw9lc6l1f7NWvnJJ_CUXDJwgVyixIBgAbi__3JnANOR8-UkZjALnf65OWmBQFPdrNI6o9dtq0ZMJvXQU2hR7rMzCRLyIErnvWZGOSCBfPr61w4QHESHMxAxV5zTnfcS6L7BDuGwQG_8mTRPj38CuuH=w623-h416-no?authuser=0",
            thumbnail: "https://lh3.googleusercontent.com/pw/AM-JKLWBSt4D1ql2qRpJD4IQ4tFYHNtPhDaIjy8mklTCKKvU1bt8dq7Ir1W4mTSGoOI4R9jN95933jxPV6_Rr_bV39hMl954srDjJAsX9u28vEC4nyeJJKBFK2dftk5xUn9lOS5zAKQ4IWnASOws-38Lpy6z=w388-h259-no?authuser=0",
            thumbnailWidth: 450,
            thumbnailHeight: 320,
            caption: "",
      },
      {
            src: "https://lh3.googleusercontent.com/pw/AM-JKLXWzVfmkF0VUyGgUE1lBZOnBIcHnuOl9l9mkzV2rty5eCMj5RAhDE5RqXnCaB9FNtYHx-KPO9Q6OdaZ-CEKhrclVMP735z8CNgUHAyx0sF0fSJaPuodlDfqHjfT7vTH5KoFxL_va9gc0oliYZmDbkMu=w623-h416-no?authuser=0",
            thumbnail: "https://lh3.googleusercontent.com/pw/AM-JKLWPET_7AKk4AIki6JmEqXxyr8oWVQe6ERSffVc82AMm1_DEA5qfyfrOEaXWUrf2X0E0Qg1colJFa68e2rxycy6Rkf4iA-aA53pmgPyLijQDQdjPR7MzgnV54257mZgyNIkoyQBkQw-UbA3Thwz1WwCG=w388-h259-no?authuser=0",
            thumbnailWidth: 320,
            thumbnailHeight: 213,
            caption: ""
      },
      {
            src: "https://lh3.googleusercontent.com/pw/AM-JKLVq23-fS4kkwOE5mAErMDsSXL42RiyS-ZqHOv6za_q0Tb8b6DJLtd4SnZPOjfeD45aMsjznNb5LQFXesCkgMx3toeOSMILP2iAj6WYgG5mNJ4xYtfhVvUZI-aiNwzg_c2L1h2ltfWkpMb3G0dkFFdat=w526-h789-no?authuser=0",
            thumbnail: "https://lh3.googleusercontent.com/pw/AM-JKLUySyHYSHphIDSxaJt0_S96Fb5yGItNLOIwFbbB6_m-3xE1gXF2QRTqKiazS__v71YaEPNkF5FsnQO9MzmZ-stSHd4QOdsnOdczw0ITx6XVpwcV-CgX_QxQqrRjNgppwutBOuTSRn4abAxNBFaeOCWM=w259-h389-no?authuser=0",
            thumbnailWidth: 250,
            thumbnailHeight: 320,
            caption: "",
      },
      {
            src: "https://lh3.googleusercontent.com/pw/AM-JKLXSjFyWzHV6kMg7dpKPm9fbzo_PDyGOxPZQ9R8ZklpvkKzam3mx4KI-vS-F3U75FeqvU5tjL_x8VWXtxWCfHCja4jDSflO2eInMjGMIkhhF64QqDq6MnZiZJHL5Tp8Jj4HRVTzPFQuWpec4ZoAE2Y0R=w704-h470-no?authuser=0",
            thumbnail: "https://lh3.googleusercontent.com/pw/AM-JKLUnl4yesZgJaQ3zDHqD67KEjHCAVfY2R8Z0h74KzjP3p-PyOoDGoKIAtgj2jXWDlffNpeh-orJdkWR8geV46B0e6qA1Ee3Ie2RJzq2ol1h0durADjHXKbYXGgcHKIwIm3gxxrU3HUvn6nTTcu456joz=w388-h259-no?authuser=0",
            thumbnailWidth: 320,
            thumbnailHeight: 213,
            caption: "",
      },
      {
            src: "https://lh3.googleusercontent.com/pw/AM-JKLUBDDKFSetgbnSKJsinENhlIiMW004llsxiOliS_L2L4Lgmm83Qi4XcHVAqXKU7bIs0XiIUs1YAlwrtVVv-lDsB4Pi0PShccHI3mz2E7UnQ1TbhQMyXvNAzEITtin6SatEP0Bo0jAnyiEIeska4CXGK=w704-h470-no?authuser=0",
            thumbnail: "https://lh3.googleusercontent.com/pw/AM-JKLXe9MwIswPuCiEaD1BCxy2QMuqkcD4FnIUXWPtT4C9s8jhG4qoSQoDF9V_mAcddXit1f7yoSS1RwiX0LcQyQZfeT3cbqTDjO708MmP6z_NAexSTy8KHAH9QfDO5vLtKEdtpHVLYQOMIaOwi6tKASSGp=w388-h259-no?authuser=0",
            thumbnailWidth: 320,
            thumbnailHeight: 213,
            caption: "",
      },
      {
            src: "https://lh3.googleusercontent.com/pw/AM-JKLVbViL5QExZQ3LjR-BfFCo0wxtDRKhoqmHRswxqfRzV2hz0GqlGxb6MBdGDAXs6vyk54jbBqa1njVUOuwaV9eHMF2zWz2Tp-tDSFxyoPOTNQkoK7y_3AEnHCQHkdI6WnMkBrKOWXthQmkJQgf2WFKTJ=w704-h470-no?authuser=0",
            thumbnail: "https://lh3.googleusercontent.com/pw/AM-JKLW9TbW7vidGLlwCSUIpTOw4qaOQh3W1XnINkIM0sS0hqpkCJjLDyRvhogjg8cZtnfUFZem_x-AkHsKICi34h-oJ94-g7wMrYQpEz8d9_4lhTwhFBPbQTyngqkO91YQBPoTb3uE38SICZx3xv7nvLtCt=w388-h259-no?authuser=0",
            thumbnailWidth: 357,
            thumbnailHeight: 220,
            caption: "",
      }, {
            src: "https://lh3.googleusercontent.com/pw/AM-JKLU4j8WR-RQWehneoH1WpMqE-6iRDh4C9l1Nzjmn1dVPP6WMR2cQuGMceR4TAJZC1d7aKdUQeQOuUZyfbwYGKXPRJsTkAjlQhDpXYV9TrTsA61HWV0ADPM3xvn9yNhm2KLwB4kunULMxsM5YW11KfA0b=w704-h470-no?authuser=0",
            thumbnail: "https://lh3.googleusercontent.com/pw/AM-JKLUcuHy5yNkBp61FcCE6y1U1uVPq-55NOVBiOYch7ns_iz5mssd-QcKxKBzI78PddX9uHw9iGqLktsh4JooJn3CocL76Db7sa4gmQQIHjwKsv0xNM5TXR5oh8773MgQZ0vPNevOevvWv5Drf79edA8N8=w388-h259-no?authuser=0",
            thumbnailWidth: 340,
            thumbnailHeight: 220,
            caption: "",
      },
      {
            src: "https://lh3.googleusercontent.com/pw/AM-JKLWFkXi9Wo2XVejwxmrkOWSNRG8pgQlqEd3ZeFasRuJ7SCC-UrLk6vmwDYHTtuHG5yz1h-WODyqW8yVkbbQTNS4-mnJr72buMs8ZFxdaV0GN82AIDlJlrguWZHqVSpgur01SpdC96e1qNfXzgaIGq4zH=w704-h470-no?authuser=0",
            thumbnail: "https://lh3.googleusercontent.com/pw/AM-JKLWt7odcRrMapndYKSsHBa1ov4ACBYP0B8XL_nljaRVjKdzqYw7Ult68cq8q7Y_LHTaweQ_gzDAmsQkZdwdIv23Qb1qX5VWBbHXN0b47j95Ipjn92SZabtHZHk3wUdvnMeCG1o3VhchPhbjsF8OEKpq4=w388-h259-no?authuser=0",
            thumbnailWidth: 320,
            thumbnailHeight: 190,
            caption: "",
      },
      {
            src: "https://lh3.googleusercontent.com/pw/AM-JKLWHXbErOrTqX-DDvl6nBDevkej4KhfC-eWfVXFR5SNNkPcUNw9su6zRIxSJhvimFZXyEc3HKxZbKxfYAtCnwTqajrFPQJdmfCj-Yuua3RLaZdXGUPFbpYeAPDxjqDlTxWHt0suqJiE31pnAIOLhtt4E=w704-h470-no?authuser=0",
            thumbnail: "https://lh3.googleusercontent.com/pw/AM-JKLVYgyWvNBzDMGnQmJS1DHTjG3_R5Yib57w2nbmzsUoSZQblFQVRhT6jXGw2IOZsDynap_Q3FJ90yIBppKjUnbzwwnQ8bUCT1yvFQnCqtu-xBQc1PtHb4NDyhuoT8GaV8xym3lInfNd7Xg8-Aj-c9V2y=w388-h259-no?authuser=0",
            thumbnailWidth: 320,
            thumbnailHeight: 148,
            caption: "",
      },
      {
            src: "https://lh3.googleusercontent.com/pw/AM-JKLWmsa1ZKbaAaPDqIWHW_yutUedU-ps9SwVAV4bK_42WvGWqIglhgZOhD7VnM7SSSbWJf6MdXc8QM1Ye4qek9jsG2vi3VePAUpjoyh_m3uqR6PTK7_03QOJfaEN3bIHjQeBZuLL_vn_rpT9obQsmJWbG=w526-h789-no?authuser=0",
            thumbnail: "https://lh3.googleusercontent.com/pw/AM-JKLVtXdCf1xoPTKLhhHLORsz-e8FGZNv5jKIsg_ABr416cq3Hk3i7hiGvj7s3LJ7gPfDvZ2lC77prwuKPTSM7ad5nIYAuk0M7lw0I4IJcDpcRYzzZcjrDc06BKYm3YzNYctgKJMGk3-6rSIdztp5NPlRd=w259-h389-no?authuser=0",
            thumbnailWidth: 248,
            thumbnailHeight: 320,
            caption: "",
      },
      {
            src: "https://lh3.googleusercontent.com/pw/AM-JKLU9wbbmgSiymk-oV2kMhJQogmXUvvnxCiwTArO1AWIlW6w2S1-tz9D9oQQ3AHLNHKDgYPRyPhEm8o-CgrBbAVJEMeu1f-cVUESC_fubWroA65FSkTTV-2R9X9FKviAgBgeJEH3MqoW-XNhbr1MPa4m4=w526-h789-no?authuser=0",
            thumbnail: "https://lh3.googleusercontent.com/pw/AM-JKLUeUscU4h86iFmtPwOVxdnl2nDOQKk0C9WzA6_sBENSie3585NSeLICc5KbghVOqCu7xRQ7_rzr6jOADc0EoCU9JowtUqs8mASYXNrI8F7QH53Bgv-lnG7jOjkSAvtaufz_0RtxfpMbtCGtgQmWT8nY=w259-h389-no?authuser=0",
            thumbnailWidth: 220,
            thumbnailHeight: 313,
            caption: "",      },
      {
            src: "https://lh3.googleusercontent.com/AsAtqFuRMhL59slHE3BEqXnu1fuLGYc9m8VI1auwS--mCC-qK7c8uW3AJeqx8Pyd8ANxBe_SSqMAgeoyIXHypxkjPSfJvqZwONfyvex5BgNHY5y55864r3Y0BS_p4Fi5pMyyBIfs4qgU5MdIk_b7OHvstFVn9kEIKCb5_30HsNAQld43qzE2uZHfYqqrIBYCkZkKC-j1SFjwrdz25P_N3HmEZ_VyB5X72f5qq1_D0cMlWYnGNBX9ACc4QvesYw_iRqShLE0CT42rVfFMjGnob-yiLeaSJYSNcLNnHlrrzC2rd2fvd2W6jnrYtUruWjdV01i8sRcuOYOHiWEz3y_J44MEuo6J7gEucJkagoAEDOlc6H_sEvM_4hzcwlbBB0SJmg5vJg3Bax9RnQL05FCCqxGSBfiK22xI38ylxGzuOiRiH5e_4z5wY__YibCMwix8mefqQPTQwv1Pecdu6nkb5eTui19u_k-6ziQGVrrSij0IRGGOHE6M-WrEcpALebAYisc7G-1Cn_w5htEZ-30WkHNJ97xjIsmzOJQz-h3Y5sqd8zZUe9sa9KjADtVUns0kvNt_xgqB9SYjxj2chIQ62ZIwZieV2-tH6iyw4orNwuC4k3mKC1UwJFAkCm0GWwpHMR9pWJdQeFK8hR-2SIjFEQcVECTVafcz4P3iAcygwelc4m6O51Y4YbRlrB32IjiW_xJ6L41K45aZxcsAwGvjcJf5=w704-h470-no?authuser=0",
            thumbnail: "https://lh3.googleusercontent.com/pw/AM-JKLWDAuAuzIxgPpBt5j0KAHObpmc5OvZfZKgqUYoCY6HuBuhHn_91cPLCbDR1ZWRpTzDvBqFt29owoh1dAy4w1dWpQFgLirc0dxlJyLw5fXW077yikV2E8jaOw8uL5YSTBatEJl_9nhfDvkKiLfn2vdiJ=w388-h259-no?authuser=0",
            thumbnailWidth: 313,
            thumbnailHeight: 220,
            caption: "",
      },
      {
            src: "https://lh3.googleusercontent.com/pw/AM-JKLU-L6ZDo2hEKDPMJtwd1b7FYXF8GwBAldBRsQKouhErUUHzrJnvyn7xg87nKq3_BsLPQU6YGkn4L2HYJH5Hxe9TtKu0z4mNqeBny02ikBO__46Rn3_qcoQiZKc7pyo7uGTfPalBZGc9oWGZyCLLa5Y3=w704-h470-no?authuser=0",
            thumbnail: "https://lh3.googleusercontent.com/pw/AM-JKLWQkOV5afkl3IzkPOrN-HGwxZpAIwK9eIVxL-b8HZXKiFWhNo-ykV1ZijBNVpOnbTiuxB8h4lbbXP3RyGav1iD5l1eqmDcvi1SRPCsw_CNk12UNdeK0tnGtn_151WvrUQ6OJg_fspRIwBCa30HKvYr9=w388-h259-no?authuser=0",
            thumbnailWidth: 320,
            thumbnailHeight: 213,
            caption: "",

      },
      {
            src: "https://lh3.googleusercontent.com/pw/AM-JKLVoyEbOdimzAamQ36ztapc5bfrSVH4UWr4dFj8GDb2fiwfxUUrugcNkCuvLCk7UVKlrS1EG8tt9FhbKb6iUHhjg1IeYwUjZovYQ0_qb4icp-4TomQ_s40FZBtp9ivEiKpq6U1wcdIF_FiYE-JRngooX=w704-h470-no?authuser=0",
            thumbnail: "https://lh3.googleusercontent.com/pw/AM-JKLVoyEbOdimzAamQ36ztapc5bfrSVH4UWr4dFj8GDb2fiwfxUUrugcNkCuvLCk7UVKlrS1EG8tt9FhbKb6iUHhjg1IeYwUjZovYQ0_qb4icp-4TomQ_s40FZBtp9ivEiKpq6U1wcdIF_FiYE-JRngooX=w704-h470-no?authuser=0",
            thumbnailWidth: 320,
            thumbnailHeight: 213,
            caption: "",

      }
      ]


const Gallery = () => {

      return (<div className='galler-wrapper'>
            <Helmet>
                  <title>Past Work - Landscaping, Garden Centre, Rock Gardens, Apsley Ontario</title>
                  <meta name="description" content="Our qualified team will take your project from the design stage to completion in an organized, professional and timely manner. We specialize in water front and country properties." />
                  <meta name="keywords" content="Landscaping, Landscaping Material,Garden Centre, Rock Gardens, Apsley Ontario" />
            </Helmet>
            <div className='lndscp-ttl'>
                  <h1>Photo Gallery</h1>
                  <p>Our qualified team will take your project from the design stage to completion in an organized, professional and timely manner. We specialize in water front and country properties.</p>
            </div>

            <PhotoGallery images={IMAGES} />
      </div>)
}

export default Gallery;