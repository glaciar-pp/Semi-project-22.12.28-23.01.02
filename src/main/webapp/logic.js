function range(start, stop, step) {
    if (typeof stop == 'undefined') {
        // one param defined
        stop = start;
        start = 0;
    }

    if (typeof step == 'undefined') {
        step = 1;
    }

    if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
        return [];
    }

    var result = [];
    for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
        result.push(i);
    }

    return result;
};

const TESTS = [
    // constellation
    {
        info : {
            mainTitle:"별자리 테스트",
            subTitle:"별자리로 알아보는 내 성격",
            mainUrl:"constellation",
            scoreType:"Constellation", 
            mainImage:"",
            thumbImage:"",
            lang:"Kor"
        },
        questions:[
            
        ],
        results:[
            {
                type: "양자리",
                desc: ``,
                query: "didwkfl",
                score_range:range(2),
                img_src:''
            },
            {
                type: "황소자리",
                desc: ``,
                query: "ghkdthwkfl",
                score_range:range(2, 3),
                img_src:''
            },
            {
                type: "쌍둥이자리",
                desc: ``,
                query: "Tkdenddlwkfl",
                score_range:range(3, 4),
                img_src:''
            },
            {
                type: "게자리",
                desc: ``,
                query: "rpwkfl",
                score_range:range(4, 5),
                img_src:''
            },
            {
                type: "사자자리",
                desc: ``,
                query: "tkwkwkfl",
                score_range:range(5, 6),
                img_src:''
            },
            {
                type: "처녀자리",
                desc: ``,
                query: "cjsuwkfl",
                score_range:range(6, 7),
                img_src:''
            },
            {
                type: "천칭자리",
                desc: ``,
                query: "cjscldwkfl",
                score_range:range(7, 8),
                img_src:''
            },
            {
                type: "전갈자리",
                desc: ``,
                query: "wjsrkfwkfl",
                score_range:range(8, 9),
                img_src:''
            },
            {
                type: "사수자리",
                desc: ``,
                query: "tktnwkfl",
                score_range:range(9, 10),
                img_src:''
            },
            {
                type: "염소자리",
                desc: ``,
                query: "duathwkfl",
                score_range:range(10, 11),
                img_src:''
            },
            {
                type: "물병자리",
                desc: ``,
                query: "anfqudwkfl",
                score_range:range(11, 12),
                img_src:''
            },
            {
                type: "물고기자리",
                desc: ``,
                query: "anfrhrlwkfl",
                score_range:range(12, 13),
                img_src:''
            },
        ]
    },

    // personalTaro
    {
        info : {
            mainTitle:"퍼스널 타로 테스트",
            subTitle:"타로보고 스트레스 해소법 찾자!",
            mainUrl:"personalTaro",
            scoreType:"typeCountingMBTI",
            mainImage:"",
            thumbImage:"",
            lang:"Kor"
        },
        questions:[
            {
                which:"EI",
                question: '사람들과 있을 때 나는?',
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: '스트레스 풀리는 느낌!\n완전 재밌고 에너지 충전 완료!'
                    },
                    {
                        type: "I",
                        score: 5,
                        content: '노는 건 좋지만 너무 많은 사람들이 있으면 기 빨린다.'
                    },
                ],
            },
            {
                which:"EI",
                question: "회의를 할 때 나는?",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "‘일단 계속 말해봐 그 중에 하나는 건지겠지’\n생각 나는 대로 말한다."
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "‘ 마냥 말하기만 하는 건 의미 없어‘\n한참 고민 후 그 중 제일 나은 아이디어로 말한다."
                    },
                ]
            },
            {
                which:"EI",
                question: "더 스트레스 받는 상황은?",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "내내 집에만 있어야 할 때"
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "사람들이 많은 곳에 있어야 할 때"
                    },
                ]
            },
            {
                which:"SN",
                question: "둘 중 한 과목만 들을 수 있다면?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "정확한 답이 정해져 있는 수학과목"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "감정에 초점을 맞춘 국어과목"
                    },
                ]
            },
            {
                which:"SN",
                question: "사생대회에 참가했다 나는?",
                answers:[
                    {
                        type: "N",
                        score: 2,
                        content: "상상력을 발휘한 그림"
                    },
                    {
                        type: "S",
                        score: 5,
                        content: "눈에 보이는 장면이나 사물 그림"
                    },
                ]
            },
            {
                which:"SN",
                question: "무언갈 배우고 싶은 욕구가 뿜뿌~ 어떤 배움일까?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "현재 내가 부족한 부분을 채울 수 있는 배움"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "훗날 나에게 도움이 될 것 같은 배움"
                    },
                ]
            },
            {
                which:"TF",
                question: "회사에서는",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "일만 잘 하면 되는 것이다."
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "일도 일이지만 팀내 의사소통도 잘 해야 하는 것이다."
                    },
                ]
            },
            {
                which:"TF",
                question: "‘나 그림 그리려고 아이패드 샀어’\n라는 말에 제일 먼저 나오는 말은?",
                answers:[
                    {
                        type: "F",
                        score: 2,
                        content: "올~~~ 플렉스 해버렸네~"
                    },
                    {
                        type: "T",
                        score: 5,
                        content: "프로? 에어?"
                    },
                ]
            },
            {
                which:"TF",
                question: "나 요즘 스트레스 받아서 취미생활을 시작해보려고",
                answers:[
                    {
                        type: "F",
                        score: 2,
                        content: "잉...? 뭐 때문에 스트레스 받는데...?"
                    },
                    {
                        type: "T",
                        score: 5,
                        content: "에? 취미생활이랑 스트레스랑 뭔 상관이야...?\n그거 하면 나아지나...?"
                    },
                ]
            },
            {
                which:"JP",
                question: "평소 나의 일 스타일은?",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "전체적인 틀을 세우고 신속하게 바로 시작"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "뭘 해야 하는 건지 조사하고 계획 잡고 시작"
                    },
                ]
            },
            {
                which:"JP",
                question: "오늘 안에 다하기로 마음먹은 과제를 못했다.\n(과제 마감일은 아직 많이 남은 상태)",
                answers:[
                    {
                        type: "P",
                        score: 2,
                        content: "뭐, 내일 하면 되겠지"
                    },
                    {
                        type: "J",
                        score: 5,
                        content: "아..망했다... 불안하다... 오늘 안에 했어야 하는데..휴"
                    },
                ]
            },
            {
                which:"JP",
                question: "일이 너무 많을 때 나는?",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "고민 없이 바로 시작을 한다."
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "뭐 부터 할지 계획부터 짠다."
                    },
                ]
            },
        ],
        results:[
            {
                type: "ISTJ",
                desc: `은둔자`,
                query: "09THermit",
                score_range:range(26),
                img_src:''
            },
            {
                type: "ESFP",
                desc: `별`,
                query: "17Tstar",
                score_range:range(26, 51),
                img_src:''
            },
            {
                type: "ENFP",
                desc: `마법사`,
                query: "01TMagician",
                score_range:range(51, 75),
                img_src:''
            },
            {
                type: "INTJ",
                desc: `황제`,
                query: "04TEmperor",
                score_range:range(76, 101),
                img_src:''
            },
            {
                type: "ISTP",
                desc: `운명의 수레바퀴`,
                query: "10Wof",
                score_range:range(76, 101),
                img_src:''
            },
            {
                type: "ESFJ",
                desc: `절제`,
                query: "14Temperance",
                score_range:range(26),
                img_src:''
            },
            {
                type: "ENFJ",
                desc: `힘`,
                query: "08Strength",
                score_range:range(26, 51),
                img_src:''
            },
            {
                type: "INFP",
                desc: `태양`,
                query: "19Tsun",
                score_range:range(51, 75),
                img_src:''
            },
            {
                type: "ISFJ",
                desc: `여황제`,
                query: "03TEmpress",
                score_range:range(76, 101),
                img_src:''
            },
            {
                type: "ESTP",
                desc: `어릿광대`,
                query: "00TheFool",
                score_range:range(76, 101),
                img_src:''
            },
            {
                type: "INFJ",
                desc: `여사제`,
                query: "02THP",
                score_range:range(76, 101),
                img_src:''
            },
            {
                type: "ENTP",
                desc: `연인`,
                query: "06TLovers",
                score_range:range(26),
                img_src:''
            },
            {
                type: "ESTJ",
                desc: `교황`,
                query: "05THH",
                score_range:range(26, 51),
                img_src:''
            },
            {
                type: "ISFP",
                desc: `정의`,
                query: "11Justice",
                score_range:range(51, 75),
                img_src:''
            },
            {
                type: "INTP",
                desc: `심판`,
                query: "20Judgement",
                score_range:range(76, 101),
                img_src:''
            },
            {
                type: "ENTJ",
                desc: `전차`,
                query: "07TChariot",
                score_range:range(76, 101),
                img_src:''
            },
        ]
    },
    // daengdaeng
    {
        info : {
            mainTitle:"강아지로 보는 성격 테스트",
            subTitle:"내가 강아지 라면?",
            mainUrl:"daengdaeng",
            scoreType:"typeCounting",
            mainImage:"",
            thumbImage:"",
            horizontalBanner: "",
            lang:"Kor"
        },
        questions:[
            {
                question: '기분이 좋지 않을 때 난',
                answers:[
                    {
                        type: "포메라니안",
                        score: 2,
                        content: '기분이 좋지 않을 땐 혼자 있다가 기분이 나아 질 때 힘차게 돌아온다.'
                    },
                    {
                        type: "치와와",
                        score: 5,
                        content: '기분이 좋지 않을 때 누군가 날 건들이면 그 사람에 대해 참고 있던 게 폭발한다. '
                    },
                    {
                        type: "비글",
                        score: 10,
                        content: '“아 몰랑! 그냥 신경 안쓸래에에에에!!!” 하고 털어낸다.'
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: '세상 살며 기분 안 좋을 일이 별로 없다.'
                    },
                ],
            },
            {
                question: "다음 중 나의 연애 스타일과 가장 비슷한 것은?",
                answers:[
                    {
                        type: "포메라니안",
                        score: 2,
                        content: "애인도! 친구도! 다 같이 놀면 얼마나 좋아!? 둘 다 내꺼! "
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "집착 싫어! 집착은NO! 알아서 잘할 게! 의심하지 말아줬으면 좋겠어!"
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "질투는 잘 안 하는 편인데... 집착도 딱히…?"
                    },
                    {
                        type: "치와와",
                        score: 10,
                        content: "난 질투쟁이인데? 질투를 하는 만큼 그 사람을 좋아한다는 거 아냐?\n ...넌 나만 바라봐."
                    },
                ]
            },
            {
                question: "첫 조별과제 날, 과연 나의 역할은?",
                answers:[
                    {
                        type: "치와와",
                        score: 2,
                        content: "모두를 컨트롤 하는 리더십의 끝판 왕 조장"
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "화려한 나의 발표실력을 보여주지, 발표자"
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "꼼꼼함은 필수! 자료조사"
                    },
                    {
                        type: "포메라니안",
                        score: 10,
                        content: "미적 센스가 필요한 PPT"
                    },
                ]
            },
            {
                question: "드디어 동창회날, 과연 나는?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "여기저기 아는 사람과 반갑게 인사하며, 돌아다니면서 노는 인싸 스타일"
                    },
                    {
                        type: "리트리버",
                        score: 5,
                        content: "가만히 있어도 주변에 친구들이 먼저 다가오는 인기쟁이 스타일"
                    },
                    {
                        type: "포메라니안",
                        score: 10,
                        content: "처음에 낯을 가려 조금 어색해하지만 금세 친해져서 재밌게 분위기를 주도하는 반인싸스타일"
                    },
                    {
                        type: "치와와",
                        score: 10,
                        content: "아는 친구들은 많지 않지만 친한 친구들과는 재밌게 노는 스타일"
                    },
                ]
            },
            {
                question: "드디어 기다렸던 주말! 나의 모습은?",
                answers:[
                    {
                        type: "리트리버",
                        score: 2,
                        content: "집밖은 위험해~잠을 자거나 침대 위에서 크게 벗어나지 않는 휴식"
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "집에서 쉬는 건 너무 시간이 안 가 친구들에게 만나자고 연락한다."
                    },
                    {
                        type: "비글",
                        score: 10,
                        content: "주말에는 무조건 나가야지! 평일에 미리 봐두었던 힙한 곳과 핫플인 곳을 찾아간다."
                    },
                    {
                        type: "치와와",
                        score: 10,
                        content: "평일에 받은 스트레스를 맛난 음식을 먹으며, 미뤄왔던 영화나 드라마를 본다."
                    },
                ]
            },
            {
                question: "인형을 선물 받았다. 어떤 인형일까?",
                answers:[
                    {
                        type: "포메라니안",
                        score: 2,
                        content: "극세사로 만든 복슬거리는 중간사이즈 강아지 인형"
                    },
                    {
                        type: "비글",
                        score: 5,
                        content: "껴안고 자기 좋은 길다란 바나나 인형"
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "완전 큰 곰인형"
                    },
                    {
                        type: "웰시코기",
                        score: 10,
                        content: "납작해서 베개로 사용하기도 딱 좋은 원숭이 인형"
                    },
                ]
            },
            {
                question: "놀이공원에서 당신의 모습은?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "귀신의 집, 롤러코스터 등 가능한 모든 기구를 다 타본다!"
                    },
                    {
                        type: "웰시코기",
                        score: 5,
                        content: "딱히 불평하지 않고 다 탄다!"
                    },
                    {
                        type: "포메라니안",
                        score: 10,
                        content: "궁금은 하지만 겁이 많아서 고민하거나 무서운 건 타지 않는다."
                    },
                    {
                        type: "치와와",
                        score: 10,
                        content: "타긴 다 타지만 힘들면 못타는 사람과 함께 쉰다."
                    },
                ]
            },
            {
                question: "맛집을 가자는 친구들의 말에 나는?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "맛집 리스트 보유자라면서 적극적으로 맛집을 홍보한다."
                    },
                    {
                        type: "치와와",
                        score: 5,
                        content: "맛집이라고 추천하는 친구의 말에 따라간다."
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "아무 곳이든 상관 ㄴㄴ 별생각이 없다."
                    },
                    {
                        type: "웰시코기",
                        score: 10,
                        content: "일단 만나 돌아다니며 맛집스러워 보이는 곳에 들어간다."
                    },
                ]
            },
            {
                question: "파티가 있을 때 나의 드레스 코드는?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "주인공은 바로 나, 돋보일 수 있게 화려하고 멋있게 최대한 꾸미고 간다."
                    },
                    {
                        type: "포메라니안",
                        score: 5,
                        content: "나의 장점을 최대한으로 이끌 수 있게 스타일링을 한다."
                    },
                    {
                        type: "웰시코기",
                        score: 10,
                        content: "깔끔하지만 스타일리시한 포인트를 준다."
                    },
                    {
                        type: "리트리버",
                        score: 10,
                        content: "기본템을 장착한 댄디하고 캐주얼한 느낌"
                    },
                ]
            },
            {
                question: "내가 가고싶은 여행지 스타일은?",
                answers:[
                    {
                        type: "비글",
                        score: 2,
                        content: "네온사인 가득~ 신나는 파라다이스 놀이공원"
                    },
                    {
                        type: "치와와",
                        score: 5,
                        content: "이곳의 유명한 박물관이나 건물들은 꼭 가봐야지"
                    },
                    {
                        type: "웰시코기",
                        score: 10,
                        content: "꽃, 나무 자연이 가득한 여행지"
                    },
                    {
                        type: "포메라니안",
                        score: 10,
                        content: "친구들끼리 프라이빗하게 놀 수 있는 수영장이 있는 풀빌라"
                    },
                ]
            },
        ],
        results:[
            {
                type: "포메라니안",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                ✓   친구들에게 인기가 많은 타입으로 주변에 사람이 많고 늘 주인공 역할을 해요! \n
                ✓   활발하고 호기심이 많지만 겁이 너무 많아요 \n
                ✓   살짝 성격이 지랄맞을 때도 있는데 그럴 땐 좀 냅둬야 합니다. 풀어주려고 하지 말고 가만히 냅두세요. 알아서 풀리고 다시 기분이 좋아집니다.\n
                ✓   외모에 관심이 많은 스타일이라 스타일링을 바꾸고 싶어하지만 결국 다시 원래의 스타일로 돌아오곤 하죠.\n
                ✓   자기가 기분 좋을 땐 세상 애교쟁이, 기분 안 좋으면 세상 지랄견!\n
                ✓   사람을 너무 좋아해서 이것저것 다 퍼줍니다. \n
                ✓   기분 안 좋은 티를 숨기지 못해 가끔 표정관리가 안돼요.\n
                ✓   우리 친구들은 낯을 많이 가리는데 시간이 지나면서 친해지면 미친듯이 활기차게 놀아요.\n
                ✓   한 번 화나면 불같이 화를 내는 다혈질 적인 성격이 있어요.\n
                `,
                query: "1chqhwlqzhrfj",
                score_range:range(26),
                img_src:''
            },
            {
                type: "치와와",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n
                ✓   뽈뽈 돌아다니면서 많은 참견을 하는 참견쟁이들\n
                ✓   내 사람은 너무너무 소중하지만, 친하지 않은 사람들에겐 낯을 많이 가려요. 경계심 대마왕이라서 섣불리 다가가면 안 됩니다. 치와와 친구들에게 시간을 주세요!\n
                ✓   질투심이 많아서 조심해야해요. 잘못걸리는 순간 그날은 전쟁입니다. 나에게 질투에 대한 실험을 하지마세요!!\n
                ✓   불의를 보면 물불 가리지 않는 겁이 없는 용감한 용자! 으르렁!\n
                ✓   스트레스는 음식으로 풀 때가 있어요.\n
                ✓   내사람을 너무 좋아하다 보니 가끔 외로움을 많이 타요.\n
                ✓   눈치가 빨라서 행동에 막힘이 없이 재빠르게 움직이는 부지런쟁이들입니다.\n
                ✓   기부니가 좋을 땐 애교쟁이><기분이가 안 좋을 땐 까칠쟁이 -_-\n
                ✓   가끔 앞 뒤가 다른 사회생활 만랩이랍니다~\n
                ✓   참는 걸 극도로 싫어해요.`,
                query: "2tjsxorgudwlqzhrfj",
                score_range:range(26, 51),
                img_src:''
            },
            {
                type: "웰시코기",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n
                ✓   상당히 활동적인 스타일, 열정이 가득해요. 허허..\n
                ✓   가끔 에너지가 너무 넘쳐나서 가끔 주변인들이 감당하기 힘들어요\n
                ✓   집에 있으면 시간이 너무 안가는 느낌, 밖을 나가야합니다.\n
                ✓   날 가두는 느낌 너무 힘들어.. 나에게 집착하지 말아줄래? 난 자유로운 영혼이거든! 알아서 잘하니까 너무 의심하거나 집착하지 말아주세요.\n
                ✓   하는 행동에 있어 단단함이 있고 자신감이 넘쳐나지만 친절해서 주위에 사람들이 넘쳐나요. 학생 시절엔 반장, 부반장의 경험 많죠. \n
                ✓   저 사람은 너무 순딩해하는 소리를 많이 듣지만 사실 나는 단호박입니다. \n
                ✓   눈으로 말을 하는 것 같은..뭔가…매력이 있어….왜지…눈으로 사람 설레게 하기 만랩\n
                ✓   이성에게 인기가 많은 타입이에요. 난 그냥 이 사람을 도와준 것 뿐인데 보면 저를 좋아하고 있더라구요. 왤까요? 하면서 다른 사람이 가지지 못한 마성의 매력`,
                query: "3ehfdusqusdlwlqzhrfj",
                score_range:range(51, 75),
                img_src:''
            },
            {
                type: "리트리버",
                desc: `친숙한 댕댕이 , 리트리버\n
                ✓   순한 성격의 소유자, 이런들 어떠하리~ 저런들 어떠하리~ 이해심이 넘쳐나요\n
                ✓   사람을 잘 따르고 상냥한 친절한 성격을 지니고 있어 주변에서 은근 좋아하는 이성이 많아요. 하지만 본인은 모르죠. 주인공아닌가요? \n
                ✓   어쩜 이렇게 화를 안낼까 하지만 화를 내면 세상 제일 무서워요.\n
                ✓   은근 아무것도 하기 싫고 잘 누워있는 편이라 주변에서 놀자고 해야해요. 아니면 집 밖에 잘 안나오려고 해서… 누군가라도 만나자고 하면 일단 만나니까 놀아줘요.\n
                ✓   순둥순둥해서 걱정하겠지만 은근히 모든 걸 다 잘해냅니다.\n
                ✓   한 번 놀 때 미친듯이 놀면 적당한 휴식이 꼭 필요해요\n
                ✓   사람 자체가 너무 편안해서 같이 있으면 그냥 행복해지는 에너자이저~\n
                ✓   인내심 최강자이면서 예의도 바르지만 또 장난꾸러기 하지만 머리도 좋아 뭐야 못하는게 뭐야~~완전 워너비 애인상이로구나!`,
                query: "4vmfhwlqzhrfj",
                score_range:range(76, 101),
                img_src:''
            },
            {
                type: "비글",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n
                ✓   체력이 대단하다고 생각할 정도로 미친 텐션의 소유자 비글!\n
                ✓   영리하고 머리가 좋아요~ 그래서 눈치도 수준급! \n
                ✓   여기저기 맛집 탐방을 좋아하고 음식을 너무 좋아해요. 맛집 물어보면 왠만한 건 다 알정도로 아주 맛집 리스트를 가지고 있죠.\n
                ✓   악마견이라 불리지만 사실은 에너지가 넘쳐나고 사람을 너무 좋아해서 관심을 달라는 말이에요. \n
                ✓   외로움을 많이 타서 늘 밖으로 나가고 싶어해요. 누구든 만나서 힘차게 놀아야 외롭지 않거든요. 혼자 있는 거 너무 싫어!!! 스트레스 만땅!\n
                ✓   노는게 제일 좋아~ 친구들 모여라~ 언제나! 즐거워!\n
                ✓   될 대로 돼라~~~라는 마인드 늘 긍정적이고 낙천적인 마인드의 소유자`,
                query: "4vmfhwlqzhrfj",
                score_range:range(76, 101),
                img_src:''
            },
        ]
    },
     // zipkok
     {
        info : {
            mainTitle:"프로 집콕러 테스트",
            subTitle:"이시국엔 집에 붙어 있자 꼭!",
            mainUrl:"zipkok",
            scoreType:"numberScoring",
            mainImage:"",
            thumbImage:"",
            lang:"Kor"
        },
        questions:[
            {
                question: '주말에 만나자는 친구! \n 하지만 집밖은 위험해! 나의 답장은?',
                answers:[
                    {
                        type: "사자",
                        score: 2,
                        content: '그래도 친구가 오래간만에 만나자니 나간다.'
                    },
                    {
                        type: "너구리",
                        score: 5,
                        content: '귀찮지만 뭐하는 지에 따라 나갈지 말지 결정한다.'
                    },
                    {
                        type: "펭귄",
                        score: 10,
                        content: '귀찮은 건 no! 약속 있는 척하고 집에서 쉰다.'
                    },
                ],
            },
            {
                question: "나에게 소확행이란?",
                answers:[
                    {
                        type: "사자",
                        score: 2,
                        content: "남자친구와 주말에 걸어다니면서 소소한 데이트하기"
                    },
                    {
                        type: "너구리",
                        score: 5,
                        content: "친구들이랑 다같이 모여서 캠핑이나 1박 여행을 간다."
                    },
                    {
                        type: "펭귄",
                        score: 10,
                        content: "행복이란 \n '내침대에 따뜻한 전기장판과 부드러운 극세사 이불을 덮고 밀린 영화나 드라마를 귤을 까먹으면 보는 것'.."
                    },
                ]
            },
            {
                question: "아무런 약속이 없는 주말, 뭐할까?",
                answers:[
                    {
                        type: "사자",
                        score: 2,
                        content: "밥먹고 샤워를 한 뒤 밀린 방 청소나 할일을 찾아 움직인다."
                    },
                    {
                        type: "너구리",
                        score: 5,
                        content: "밥먹고 세수와 양치만 하고 쇼파에 앉아 티비를 본다."
                    },
                    {
                        type: "펭귄",
                        score: 10,
                        content: "양치만 하고 누워서 넷플릭스나 왓챠를 켜본다."
                    },
                ]
            },
            {
                question: "드디어 금요일, 주말에 뭐할까?",
                answers:[
                    {
                        type: "사자",
                        score: 2,
                        content: "집에 있는 건 너무 심심해! \n 친구들한테 만나자며 먼저 연락한다."
                    },
                    {
                        type: "너구리",
                        score: 5,
                        content: "집에 있다가 만나자는 연락을 받으면 저녁에 슬슬 기어나간다."
                    },
                    {
                        type: "펭귄",
                        score: 10,
                        content: "주말에..왜 약속을.. \n 난 쉴랭! 굳이 먼저 약속을 따로 잡지 않는다."
                    },
                ]
            },
            {
                question: "집에 있을 때 나의 모습은?",
                answers:[
                    {
                        type: "사자",
                        score: 2,
                        content: "으 시간이 왜 이렇게 안가... \n 주변 친구들에게 연락해서 나갈 각 잡기"
                    },
                    {
                        type: "너구리",
                        score: 5,
                        content: "낮엔 자고 밤에 나가야지~ \n 8.9시쯤 나갈 준비를 해본다."
                    },
                    {
                        type: "펭귄",
                        score: 10,
                        content: "밀린 드라마나 영화가 너무 많아... \n 하루가 너무 짧다."
                    },
                ]
            },
            {
                question: "배달 앱 속 나의 등급은?",
                answers:[
                    {
                        type: "사자",
                        score: 2,
                        content: "배달은 별로, 난 맛집 탐방가임"
                    },
                    {
                        type: "너구리",
                        score: 5,
                        content: "그냥 가끔 집에 있거나 친구들이랑 파티할 때 시킴"
                    },
                    {
                        type: "펭귄",
                        score: 10,
                        content: "vip 이하로 떨어져본적이 없수다"
                    },
                ]
            },
            {
                question: "갑자기 일이생겨 못만난다고 하는 친구!",
                answers:[
                    {
                        type: "사자",
                        score: 2,
                        content: "아,,어쩔 수 없지 하면서 바로 만날 친구에게 전화를 건다."
                    },
                    {
                        type: "너구리",
                        score: 5,
                        content: "밖에 있으면 누구라도 나오겟지. \n 카페나 pc방에서 친구들을 부른다."
                    },
                    {
                        type: "펭귄",
                        score: 10,
                        content: "안타까워하는 척 하면서 집에서 쉴 생각에 기분이 좋아진다."
                    },
                ]
            },
            {
                question: "집에만 있으니 심심한 당신!\n생각에 빠지게 되는데...",
                answers:[
                    {
                        type: "사자",
                        score: 2,
                        content: "휴 이렇게 집에만 있으니 좀 그렇다..\n 라고 생각하며 당장 뭘 배워야할지 찾아보고 상담예약을 잡아본다."
                    },
                    {
                        type: "너구리",
                        score: 5,
                        content: "당분간은 계속 집에 있어야하는데.. \n 먹을 간식과 생필품을 구입한다."
                    },
                    {
                        type: "펭귄",
                        score: 10,
                        content: "나는.. 아무생각이 없다. \n 왜냐면 아무생각이 없기 때문이다."
                    },
                ]
            },
            {
                question: "약속 시간 전 당신의 모습은?",
                answers:[
                    {
                        type: "사자",
                        score: 2,
                        content: "옷은 전 날에 미리 골라놨으니 메이크업, 헤어 등 섬세하게 꾸민다"
                    },
                    {
                        type: "너구리",
                        score: 5,
                        content: "약속 2시간전 부터 일어나서 준비중이지만 세월아 네월아한다."
                    },
                    {
                        type: "펭귄",
                        score: 10,
                        content: "아 귀찮다...나가지말까 \n 하고 늘어져있다가 시간을 보고 재빨리 준비한다."
                    },
                ]
            },
            {
                question: "친구들과의 약속이 있을때 나의 모습은?",
                answers:[
                    {
                        type: "사자",
                        score: 2,
                        content: "10분 전에 미리 도착해 친구들을 기다린다."
                    },
                    {
                        type: "너구리",
                        score: 5,
                        content: "조금 늦는다고 친구들이 다 가있을때 그 장소로 간다."
                    },
                    {
                        type: "펭귄",
                        score: 10,
                        content: "진짜 되도록 안나가지만 굳이 약속이 있다면 정각에 도착한다."
                    },
                ]
            },
        ],
        results:[
            {
                type: "Level 1. 초보 집콕러",
                desc: "집에 있으면 있지만 심심하면 집 밖을 나가고 싶어하는 \n 초보집콕러~ \n 아직은 집이랑 서먹서먹한 42~ \n 이틀이상 집에 있으면 나가고 싶어서 안달난 마치 라푼젤같은 그대! \n 집에 있다가도 나오라면 바로 나오는 오케이맨~!",
                query: "chqhwlqzhrfj",
                score_range:range(26),
                img_src:''
            },
            {
                type: "Level 2. 선택형 집콕러",
                desc: "주말엔 집에서 쉬는게 최고지만~~ \n 날 만나고 싶다면 ~ 나가줘야지~~~~ 뭐할건데? \n 꼭 재밌는 일이 있으면 무조건 튀어나가는 그대는 바로 \n 선택형 집콕러! \n 당신은 집에 있는 걸 좋아하지만 선택장애의 면모가 리를 빗 \n 있기때문에 친구들의 설득과 흥미 딘딘한 일이 있으면 \n 바로 집에서 튀어나가버리곤 하지~~",
                query: "tjsxorgudwlqzhrfj",
                score_range:range(26, 51),
                img_src:''
            },
            {
                type: "Level 3. 돌연변이 집콕러",
                desc: "극과극인 정말 집콕하고 싶을때 집에서 절대 나오지 않z...! \n 하지만 어느순간 또 약속 줄줄 잡아 버리는 그대! \n 성수기와 비성수기가 확실한 당신은 바로 \n 돌연변이 집콕러! \n 집에서도 밖에서도 최선을 다해 노는 당신! \n 한번 놀고 나면 꼭 충분한 휴식이 필요하지~",
                query: "ehfdusqusdlwlqzhrfj",
                score_range:range(51, 75),
                img_src:''
            },
            {
                type: "Level 4. 프로 집콕러",
                desc: "집이 곧 나의 삶의 전부일세, 당신은 바로 \n 프로 집콕러~ \n 집을 왜 나가~~ 집밖은 위험해~ \n 주변에 아무리 불러도 순순히 나가지 않지!! 마치 나는 신비주의~!! \n 하지만 그냥 나가기 귀찮은 사람 ^^ \n 개인적인 시간은 필수! 집에서 나가는 것 조차 큰 결심이 필요해요~ \n 집에 놀거리 가득하면 집 밖에 더더욱 안나갈 자신이 있어~~~~~",
                query: "vmfhwlqzhrfj",
                score_range:range(76, 101),
                img_src:''
            },
        ]
    },
    // personalScentBTI
    {
        info : {
            mainTitle:"퍼스널 향기 테스트",
            subTitle:"나의 퍼스널 향기는? - 퍼스널 향기 BTI",
            mainUrl:"personalScentBTI",
            scoreType:"typeCountingMBTI",
            mainImage:"",
            thumbImage:"",
            horizontalBanner: "",
            lang:"Kor"
        },
        questions:[
            {
                which:"EI",
                question: '내 마음에 쏙 든 향수를 발견했다!\n계산하려는데 직원이 바쁜것 같다면?',
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: '저기요! 계산 먼저해주세요!'
                    },
                    {
                        type: "I",
                        score: 5,
                        content: '직원이 카운터로 올때까지 딴청피우며 눈치본다.'
                    },
                ],
            },
            {
                which:"EI",
                question: "가게 직원이 따라다니면서 이것저것 추천해준다면?",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "이건 기회야! 궁금했던 향수정보를 물어본다."
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "(제발 말걸지 말아주세요..) 아..감사합니다.."
                    },
                ]
            },
            {
                which:"EI",
                question: "이제 향수가게를 나와 밥을 먹으려한다. 어디로 갈까?",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "평소 가고 싶었던 요즘 유행하는 핫플!"
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "사람이 별로 없는 여유롭고 조용한 식사."
                    },
                ]
            },
            {
                which:"SN",
                question: "식당에 들어온 순간 가장 먼저 보이는 것은?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "맛있는 음식들."
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "아기자기 예쁘게 꾸며둔 인테리어."
                    },
                ]
            },
            {
                which:"SN",
                question: "딱 하나의 향수면 시향 할 수 있다면?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "평소 좋아하던 향기."
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "한번도 시도 안 해본 향기."
                    },
                ]
            },
            {
                which:"SN",
                question: "집에 도착해 향수를 뜯어보았는데 패키지가 너무 예쁘다..어쩌지?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "어차피 쓰레긴데 그냥 버린다."
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "향수병 옆에 두면 너무 예쁘겠다!"
                    },
                ]
            },
            {
                which:"TF",
                question: "직원의 추천을 받은 향수! 냄새가 정말 너무 별로라면?",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "감사한데..\n제 취향은 아닌 것 같아요.."
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "와.. 좋은 것 같아요!\n혹시 다른 향도 추천해주시겠어요?"
                    },
                ]
            },
            {
                which:"TF",
                question: "직원이 실수로 진열장의 향수병을 전부 깨버렸다!\n당신의 속마음은?",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "'와 저게 다 얼마야..'"
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "'헉..어떻게..안다치셨나?..속상하시겠다..'"
                    },
                ]
            },
            {
                which:"TF",
                question: "친구의 생일에 카톡으로 선물을 보냈는데 답이 없다면?",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "바쁜가보네"
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "혹시 잘못보냈나? 생일이 아닌가?"
                    },
                ]
            },
            {
                which:"JP",
                question: "내일은 향수를 사러가는 날!\n설레는 마음으로 침대에 누웠을때 드는 생각은?",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "오픈시간, 교통편 모두 확인했고.. 가기전에 한 번 더 확인해야겠다"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "어떤 향수가 있을까? 혹시 다 마음에 들면 어쩌지.."
                    },
                ]
            },
            {
                which:"JP",
                question: "다음날 아침, 향수가게에 도착한 당신! 근데 문이 닫혀있다.",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "이럴리가 없는데.. 가게 오픈시간을 확인해본다."
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "다른곳 구경하고 오면 열려있겠지~"
                    },
                ]
            },
            {
                which:"JP",
                question: "이 향수 너무 맘에 든다! 곧 친구 생일인데..\n선물로 줘야겠다 언제사지?",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "일주일전에 미리 미리 준비해준다."
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "당일에 사면 되겠지? 무슨 향을 좋아하려나?"
                    },
                ]
            },
        ],
        results:[
            {
                type: "ESTJ",
                desc: ``,
                query: "citrus",
                score_range:range(26),
                img_src:''
            },
            {
                type: "ESTP",
                desc: ``,
                query: "gourmand",
                score_range:range(26, 51),
                img_src:''
            },
            {
                type: "ESFJ",
                desc: ``,
                query: "musk",
                score_range:range(51, 75),
                img_src:''
            },
            {
                type: "ESFP",
                desc: ``,
                query: "aqua",
                score_range:range(76, 101),
                img_src:''
            },
            {
                type: "ENTJ",
                desc: ``,
                query: "herbal",
                score_range:range(76, 101),
                img_src:''
            },
            {
                type: "ENTP",
                desc: ``,
                query: "green",
                score_range:range(26),
                img_src:''
            },
            {
                type: "ENFJ",
                desc: ``,
                query: "metalic",
                score_range:range(26, 51),
                img_src:''
            },
            {
                type: "ENFP",
                desc: ``,
                query: "fruity",
                score_range:range(51, 75),
                img_src:''
            },
            {
                type: "ISTJ",
                desc: ``,
                query: "floral",
                score_range:range(76, 101),
                img_src:''
            },
            {
                type: "ISTP",
                desc: ``,
                query: "oriental",
                score_range:range(76, 101),
                img_src:''
            },
            {
                type: "ISFJ",
                desc: ``,
                query: "fresh",
                score_range:range(76, 101),
                img_src:''
            },
            {
                type: "ISFP",
                desc: ``,
                query: "powdery",
                score_range:range(26),
                img_src:''
            },
            {
                type: "INTJ",
                desc: ``,
                query: "mossy",
                score_range:range(26, 51),
                img_src:''
            },
            {
                type: "INTP",
                desc: ``,
                query: "aldehyde",
                score_range:range(51, 75),
                img_src:''
            },
            {
                type: "INFJ",
                desc: ``,
                query: "spicy",
                score_range:range(76, 101),
                img_src:''
            },
            {
                type: "INFP",
                desc: ``,
                query: "woody",
                score_range:range(76, 101),
                img_src:''
            },
        ]
    },
    // flowerBTI
    {
        info : {
            mainTitle:"플라워BTI(FlowerBTI)",
            subTitle:"나의 연애 성격은 무슨 꽃일까?",
            mainUrl:"flowerBTI",
            scoreType:"typeCountingMBTI",
            mainImage:"",
            thumbImage:"",
            horizontalBanner: "",
            lang:"Kor"
        },
        questions:[
            {
                which:"EI",
                question: '새로운 모임에 들어가게 되었는데\n내 이상형을 발견했을 때 나는?',
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: '일단 연인이 있는지 물어보고\n없다면 적극적으로 연락을 시도한다.'
                    },
                    {
                        type: "I",
                        score: 5,
                        content: '그 사람 주위에만 맴돌며 기회를 노린다.'
                    },
                ],
            },
            {
                which:"EI",
                question: "이상형의 그분과 단 둘이\n만나게 되었을 때 나는?",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "어떤 스타일을 좋아하는지\n그 사람에게 궁금한 것들을 물어본다."
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "그 사람이 어떤 말을 하는지 경청하고 반응한다."
                    },
                ]
            },
            {
                which:"EI",
                question: "그 분과 연인이 되었다!\n단 둘이 손을 잡으며 걷다가 연인의 친구를 만났을 때 나는?",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "자연스럽게 웃으면서 대화를 같이 이어간다."
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "간단한 인사를 마지막으로 조용히 옆에 있는다."
                    },
                ]
            },
            {
                which:"SN",
                question: "자기 전 문득 든 생각…\n이 사람과 평생 함께 할 수 있을까?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "현실적으로 불가능할 것 같다."
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "그래! 이 사람과 평생 함께 하면\n어떨지 머릿속으로 상상해본다."
                    },
                ]
            },
            {
                which:"SN",
                question: "연인이 친구들과 노는데\n연락이 안 됐을 때 나는?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "재밌게 놀고 있어 연락이 안 되나?\n하고 내 할 일을 한다."
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "왜 갑자기 연락이 안 되는 거지…?\n하며 불안해진다."
                    },
                ]
            },
            {
                which:"SN",
                question: "연인과 판타지 영화를 보고 나서\n대화할 때 내 모습과 가까운 것은?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "재밌긴 했는데 현실적으로 마법사가 있을 수는 없지"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "만약 너가 마법사가 된다면 어떤 마법사야?\n영웅이야? 악당이야?"
                    },
                ]
            },
            {
                which:"TF",
                question: "연인이 나의 남/여사친을 신경 쓰인다고 했을 때 나는?",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "신경 쓰이긴 하겠지만 내 인간관계인 것을…\n그냥 친구인데"
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "하긴… 입장 바꿔서 생각해보면 서운할 것 같다…\n좀 적당히 해야겠다ㅜ"
                    },
                ]
            },
            {
                which:"TF",
                question: "연인과 다퉜을 때 나는?",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "이런 점은 고쳐줬으면 좋겠어!\n하며 차분하게 말하려고 노력한다."
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "나 진짜 이런 거 너무 서운해…\n하면서 눈물이 나올 것 같다."
                    },
                ]
            },
            {
                which:"TF",
                question: "둘 중 한 명만 만나야 한다면?",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "공감 능력이 없는 연인"
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "서운하다고 했는데 고칠 생각이 없이 사과만 하는 연인"
                    },
                ]
            },
            {
                which:"JP",
                question: "연인과 데이트하기 전날 나는?",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "자기 전 내일 무엇을 입을지\n머리부터 발끝까지 생각하고 잔다."
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "나가기 직전 마음에 드는 옷을 입는다."
                    },
                ]
            },
            {
                which:"JP",
                question: "연인이 집에 놀러 온다고 했을 때 나는?",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "한 김에 쓰레기도 버리고\n화장실 청소까지 말끔하게 다 한다."
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "보이는 곳만 급하게 치우고\n안 보이는 곳에 넣어둔다!"
                    },
                ]
            },
            {
                which:"JP",
                question: "같이 커플 여행 계획을 짤 때\n원하는 연인의 스타일은?",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "일정을 세세하게 일별로 같이 정리하는 연인"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "비행기 표만 일단 끊고\n그날의 기분에 따라 자유롭게 여행하는 연인"
                    },
                ]
            },
        ],
        results:[
            {
                type: "ESTJ",
                desc: `
                `,
                query: "mayweed",
                score_range:range(26),
                img_src:'g'
            },
            {
                type: "ESTP",
                desc: ``,
                query: "mango",
                score_range:range(26, 51),
                img_src:''
            },
            {
                type: "ESFJ",
                desc: ``,
                query: "grace",
                score_range:range(51, 75),
                img_src:''
            },
            {
                type: "ESFP",
                desc: ``,
                query: "phlox",
                score_range:range(76, 101),
                img_src:''
            },
            {
                type: "ENTJ",
                desc: ``,
                query: "marigold",
                score_range:range(76, 101),
                img_src:''
            },
            {
                type: "ENTP",
                desc: `
                `,
                query: "ranunculus",
                score_range:range(26),
                img_src:''
            },
            {
                type: "ENFJ",
                desc: ``,
                query: "janaRose",
                score_range:range(26, 51),
                img_src:''
            },
            {
                type: "ENFP",
                desc: ``,
                query: "pompon",
                score_range:range(51, 75),
                img_src:''
            },
            {
                type: "ISTJ",
                desc: ``,
                query: "charment",
                score_range:range(76, 101),
                img_src:''
            },
            {
                type: "ISTP",
                desc: ``,
                query: "lisianthus",
                score_range:range(76, 101),
                img_src:''
            },
            {
                type: "ISFJ",
                desc: ``,
                query: "hyacinth",
                score_range:range(76, 101),
                img_src:''
            },
            {
                type: "ISFP",
                desc: `
                `,
                query: "sweet",
                score_range:range(26),
                img_src:''
            },
            {
                type: "INTJ",
                desc: ``,
                query: "statice",
                score_range:range(26, 51),
                img_src:''
            },
            {
                type: "INTP",
                desc: ``,
                query: "sunflower",
                score_range:range(51, 75),
                img_src:''
            },
            {
                type: "INFJ",
                desc: ``,
                query: "mini",
                score_range:range(76, 101),
                img_src:'g'
            },
            {
                type: "INFP",
                desc: ``,
                query: "freesia",
                score_range:range(76, 101),
                img_src:''
            },
        ]
    },
    // persoanlColor2023
    {
        info : {
            mainTitle:"퍼스널 컬러 테스트 2023",
            subTitle:"나에게 어울리는 컬러는 무엇일까?",
            mainUrl:"personalColor2023",
            scoreType:"typeCountingMBTI",
            mainImage:"",
            thumbImage:"",
            horizontalBanner: "",
            lang:"Kor"
        },
        questions:[
            {
                which:"EI",
                question: '친구들하고 대화 할때 나는?',
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: '친구들 사이에서 대화를 주도해 이끌어간다'
                    },
                    {
                        type: "I",
                        score: 5,
                        content: '친구들이 이야기 하는 것을 끝까지 다 듣고 공감해준다'
                    },
                ],
            },
            {
                which:"EI",
                question: "휴일에 나는?",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "이대로 휴일을 그냥 보낼 수 없어!\n약속을 만들어 활동적인 휴일을 보낸다"
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "집이 최고! 그냥 집에서 푹 쉰다"
                    },
                ]
            },
            {
                which:"EI",
                question: "새로운 모임에 가게된 나는?",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "내가 먼저 다른사람들에게 밝게 인사한다"
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "다른사람들이 먼저 나에게 인사를하는 경우가 많다"
                    },
                ]
            },
            {
                which:"SN",
                question: "챙겨 보던 드라마가 열린 결말로 끝이 났을 때 나는?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "이게 뭐야? 이렇게 끝난다고?\n작가의 의도를 생각해본다"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "드라마의 결말을 마음대로 상상해보고 만족해 한다"
                    },
                ]
            },
            {
                which:"SN",
                question: "평소에 나는?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "관찰과 분석을 좋아 하고,\n현재에 일어나는 일에 집중한다"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "상상력이 풍부하고,\n일어나지 않은 일에 대한 걱정을 할때가 있다"
                    },
                ]
            },
            {
                which:"SN",
                question: "내가 선호하는 데이트는?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "일상적이고 익숙한 보편적인 데이트를 선호한다"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "매 번 새롭게 특별하고 이색적인 데이트를 선호한다"
                    },
                ]
            },
            {
                which:"TF",
                question: "거절해야 하는 상황일 때 나는?",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "단호하게 거절한다"
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "고민하다가 대부분 들어준다"
                    },
                ]
            },
            {
                which:"TF",
                question: "친구가 힘들다며 나에게 고민상담을 했을 때 나는?",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "현실적인 해결책을 제시하고 도움을 주려고 노력한다"
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "친구의 말에 공감하며,\n대부분 친구 편을 들어준다"
                    },
                ]
            },
            {
                which:"TF",
                question: "연인이 갑자기 배 아프다고 할때 내 반응에 가까운 것은?",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "배 어느 부분이 어떻게 아파??\n괜찮아? 같이 병원 가보자ㅠ"
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "헐 괜찮아? 많이 아프지ㅠ\n약사다줄까?"
                    },
                ]
            },
            {
                which:"JP",
                question: "친구들과 여행갈 때 나는?",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "세세하게 계획을 짜서 친구들과 공유하고,\n친구들에게 계획대로하자며 닦달한다"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "간단한 것들만 대충 정해 놓고,\n뭐 먹을지 생각하며 출발한다"
                    },
                ]
            },
            {
                which:"JP",
                question: "나와 더 가까운 것은?",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "정리를 자주하고 내 물건들을 곧 잘 찾는다"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "분명 거기 놨었는데?\n하면서 한참을 찾는다"
                    },
                ]
            },
            {
                which:"JP",
                question: "여러가지의 업무를 맡았을 때 나는?",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "계획을 세워 하나의 업무를 완벽히 다 끝내고 다음 업무를 시작한다"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "맡은 모든 업무들을 왔다갔다하며 융통성 있게 업무를 처리한다"
                    },
                ]
            },
        ],
        results:[
            {
                type: "ESTJ",
                desc: ``,
                query: "akflsk",
                score_range:range(26),
                img_src:''
            },
            {
                type: "ESTP",
                desc: ``,
                query: "vldptmxk",
                score_range:range(26, 51),
                img_src:''
            },
            {
                type: "ESFJ",
                desc: ``,
                query: "vpdlfqmffjtnl",
                score_range:range(51, 75),
                img_src:''
            },
            {
                type: "ESFP",
                desc: ``,
                query: "zotxmfldk",
                score_range:range(76, 101),
                img_src:''
            },
            {
                type: "ENTJ",
                desc: ``,
                query: "qjsxmtldpsk",
                score_range:range(76, 101),
                img_src:''
            },
            {
                type: "ENTP",
                desc: ``,
                query: "akdnsxlsapehdn",
                score_range:range(26),
                img_src:''
            },
            {
                type: "ENFJ",
                desc: ``,
                query: "fhwlqmfkdns",
                score_range:range(26, 51),
                img_src:''
            },
            {
                type: "ENFP",
                desc: ``,
                query: "wlswjfkdls",
                score_range:range(51, 75),
                img_src:''
            },
            {
                type: "ISTJ",
                desc: ``,
                query: "shxlffjtm",
                score_range:range(76, 101),
                img_src:''
            },
            {
                type: "ISTP",
                desc: ``,
                query: "ekvmsp",
                score_range:range(76, 101),
                img_src:''
            },
            {
                type: "ISFJ",
                desc: ``,
                query: "dlqmsldtnpehdn",
                score_range:range(76, 101),
                img_src:''
            },
            {
                type: "ISFP",
                desc: ``,
                query: "dhfflqmemfoqm",
                score_range:range(26),
                img_src:''
            },
            {
                type: "INTJ",
                desc: ``,
                query: "tmffpdlxmrmfpdl",
                score_range:range(26, 51),
                img_src:''
            },
            {
                type: "INTP",
                desc: ``,
                query: "ekzmtldks",
                score_range:range(51, 75),
                img_src:''
            },
            {
                type: "INFJ",
                desc: ``,
                query: "qjffldnem",
                score_range:range(76, 101),
                img_src:''
            },
            {
                type: "INFP",
                desc: ``,
                query: "tpfpslxl",
                score_range:range(76, 101),
                img_src:''
            },
        ]
    },
    // MyFactPok
    {
        info : {
            mainTitle:"내 팩폭력 지수 테스트",
            subTitle:"내 팩폭력 지수 테스트하기",
            mainUrl:"MyFactPok",
            scoreType:"typeCountingMBTI",
            mainImage:"",
            thumbImage:"",
            horizontalBanner: "",
            lang:"Kor"
        },
        questions:[
            {
                which:"EI",
                question: '기분 너무 좋은 주말!\n친구들과 만나기로 했는데 약속 시간에\n늦는다고 할 때,\n나의 반응은?',
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: '(컬러링소리) 여보세요?\n야 너 왜 이렇게 안 와!\n어제 술 먹느라 늦게 일어났지 빨리 와라 ㅂㄷㅂㄷ'
                    },
                    {
                        type: "I",
                        score: 5,
                        content: '뭐 기다리면 오겠지..\n그래도 카톡이나 하나 남겨봐야겠다.'
                    },
                ],
            },
            {
                which:"EI",
                question: "점심으로 어제 먹었던 음식을 먹자고 한다!\n이때, 나는?",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: '투쟁심을 발휘하여 적극적으로 반대한다.\n“나 그거 어제 먹었는데. 제발 다른 거 먹자!!”'
                    },
                    {
                        type: "I",
                        score: 5,
                        content: '어제 먹긴 했지만 그냥 좋은 게 좋은 거다.\n“그래. 어제 먹긴 했는데 그냥 먹자 뭐~~”'
                    },
                ]
            },
            {
                which:"EI",
                question: "식당에 와서 주문해야 한다!\n하지만 사장님이 우리를 보지 않을 때 내 행동은?",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "저~기~요 사장님~~\n여기 주문 좀 할게요!"
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "바쁘시니까 뭐..\n아까 눈 마주쳤는데 기다리면 오시겠지"
                    },
                ]
            },
            {
                which:"SN",
                question: "친구들과 영화를 보러 왔다!\n주인공이 상대에게 팩폭을 묵직하게 한다!\n이때 내가 드는 생각은? ",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "와..팩폭 딜량 장난 아니네.\n주인공 진짜 화 많이 났나 보다.\n뒤에 뭐 설명하겠지."
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "음.. 저 친구는 뭘 잘못했길래\n주인공한테 저렇게 팩트로 후드려 맞을까?\n내 생각엔 바람핀 거 같아."
                    },
                ]
            },
            {
                which:"SN",
                question: "기분 좋게 술을 마시러 가는 중\n타로 집을 발견했다.\n그런데.. 친구들이 타로 집 앞에\n서성거릴 때 나는?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "얘들아..\n안 하던 거 하지 말고 빨리 술이나 먹으러 가자."
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "옼ㅋㅋㅋㅋㅋ\n타로다 한번 보고 싶은데 한번 스근하게 보고 가자."
                    },
                ]
            },
            {
                which:"SN",
                question: `깻잎 논쟁 말고 이제는 핸드크림 논쟁! 나의 선택은?\n
                상황 설명 :\n
                단체모임 중, 내 애인이 가방에서 핸드크림 좀 꺼내달라고 했다.\n
                나는 잠시 다른 걸 하느라 그 말을 미처 듣지 못했는데,\n
                친구가 애인의 가방을 뒤져 핸드크림을 꺼내더니 애인 손에 직접 짜줬다면??\n`,
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "내가 못들은 것 같아서 그랬나부지...\n좀 거슬리지만 좋게 생각하고 넘어간다."
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "나한테 말해주면 되지 그걸 왜 본인이 직접?\n부들부들하다가 친구한테 슬쩍 눈치를 준다."
                    },
                ]
            },
            {
                which:"TF",
                question: "휴가 계획 중에 내가 해외여행 행선지 제안을 했다!\n내가 기분이 더 안 좋을 때는?",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "번뜩이는 감각으로 행선지를 제안했지만\n의견이 수용되지 않을 때."
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "자신 있게 행선지 얘기를 했지만\n아무도 리액션을 안 해줬을 때."
                    },
                ]
            },
            {
                which:"TF",
                question: "친구가 기분이 너무 안 좋아서\n좋은 향을 맡고 싶다고 한다.\n나의 대답은?",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "좋은 향 어떤 거?\n시트러스? ㅋㅋㅋㅋ"
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "에..? 기분이 왜 안 좋아?\n무슨 일 있었나?"
                    },
                ]
            },
            {
                which:"TF",
                question: "집에 돌아가는 길!\n그런데 두 명이서 싸우고 있고,\n한 명이 일방적으로 폭행을 당하고 있다.\n나의 반응은?",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "어우 주먹 좀 쓰시는 형님이네 ㄷㄷ\n엮이면 피곤한데 신고하면 보상금 주나?"
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "좀 말려야 되는 거 아닐까?..\n저러다가 크게 다치는 거 아닐까?"
                    },
                ]
            },
            {
                which:"JP",
                question: "즐겁게 놀고 집에 들어왔다!\n이때 나의 모습과 가까운 것은?",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "좀 씻고, 옷 정리하고,\n알람 확인하고 천천히 SNS 체크~\n하루 마감 루틴 정석으로 간다!"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "일단 소파에 누워서 SNS 체크도 좀 하고\n오늘 찍은 사진도 한번 쓱 보자~"
                    },
                ]
            },
            {
                which:"JP",
                question: "내가 SNS를 키는 순간!\n애인이 내 생일 일주일 전에 바람피운 걸 알았다면?",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "내가 여태 해온 게 있으니..\n선물 받고 헤어진다."
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "나는 참을 수 없다..\n당장 헤어지자고 선포한다."
                    },
                ]
            },
            {
                which:"JP",
                question: "이제 침대에 누워서 잘 시간.\n오늘 만난 친구 선물을 골라야 하는데,\n나의 방법은?",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "위시리스트에 핸드크림이 있네?\n정확하게 필요한 핸드크림을 선물한다."
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "쓱쓱 보다가 핸드크림이 뭔가 필요할 거 같아서 선물한다."
                    },
                ]
            },
        ],
        results:[
            {
                type: "ESTJ",
                desc: ``,
                query: "ESTJ",
                score_range:range(26),
                img_src:''
            },
            {
                type: "ESTP",
                desc: ``,
                query: "ESTP",
                score_range:range(26, 51),
                img_src:''
            },
            {
                type: "ESFJ",
                desc: ``,
                query: "ESFJ",
                score_range:range(51, 75),
                img_src:''
            },
            {
                type: "ESFP",
                desc: ``,
                query: "ESFP",
                score_range:range(76, 101),
                img_src:''
            },
            {
                type: "ENTJ",
                desc: ``,
                query: "ENTJ",
                score_range:range(76, 101),
                img_src:''
            },
            {
                type: "ENTP",
                desc: ``,
                query: "ENTP",
                score_range:range(26),
                img_src:''
            },
            {
                type: "ENFJ",
                desc: ``,
                query: "ENFJ",
                score_range:range(26, 51),
                img_src:''
            },
            {
                type: "ENFP",
                desc: ``,
                query: "ENFP",
                score_range:range(51, 75),
                img_src:''
            },
            {
                type: "ISTJ",
                desc: ``,
                query: "ISTJ",
                score_range:range(76, 101),
                img_src:''
            },
            {
                type: "ISTP",
                desc: ``,
                query: "ISTP",
                score_range:range(76, 101),
                img_src:''
            },
            {
                type: "ISFJ",
                desc: ``,
                query: "ISFJ",
                score_range:range(76, 101),
                img_src:''
            },
            {
                type: "ISFP",
                desc: ``,
                query: "ISFP",
                score_range:range(26),
                img_src:''
            },
            {
                type: "INTJ",
                desc: ``,
                query: "INTJ",
                score_range:range(26, 51),
                img_src:''
            },
            {
                type: "INTP",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "INTP",
                score_range:range(51, 75),
                img_src:''
            },
            {
                type: "INFJ",
                desc: ``,
                query: "INFJ",
                score_range:range(76, 101),
                img_src:''
            },
            {
                type: "INFP",
                desc: ``,
                query: "INFP",
                score_range:range(76, 101),
                img_src:''
            },
        ]
    },
];

export default TESTS;