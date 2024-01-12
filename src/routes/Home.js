import {useState, useEffect} from 'react';

import styled from 'styled-components';

import klass from '../images/Klass.jpg';
import man from '../images/Man.png';
import woman from '../images/Woman.png';

function Home(){
    const QuestionsM = [
        {
            question : `27일 KLASS-TEST행사에 도착한 당신. 당신의 매칭상대로 추정되는 그녀에게 다가가려합니다. 당신이 말을 걸 그녀는`,

            selections : 
            ['청순하고 여성스러운 스타일',
            '힙하고 트렌디한 스타일',
            '섹시하고 육감적인 스타일']
        },
        {
            question : '끼야앙 2번이다',

            selections : 
            ['청순하고 여성스러운 스타일',
            '힙하고 트렌디한 스타일',
            '섹시하고 육감적인 스타일']
        },
        {
            question : '으아아 3번이다',

            selections : 
            ['청순하고 여성스러운 스타일',
            '힙하고 트렌디한 스타일',
            '섹시하고 육감적인 스타일']
        },
        {
            question : '4번이다',

            selections : 
            ['청순하고 여성스러운 스타일',
            '힙하고 트렌디한 스타일',]
        },
        {
            question : '5이다',

            selections : 
            ['청순하고 여성스러운 스타일',
            '힙하고 트렌디한 스타일',]
        },
        {
            question : '6',

            selections : 
            ['청순하고 여성스러운 스타일',
            '힙하고 트렌디한 스타일',]
        },
    ]
    const QuestionsW = [
        {
            question : `27일 KLASS-TEST행사에 도착한 당신. 당신의 매칭상대로 추정되는 그에게 다가가려합니다. 
            
            당신이 말을 걸 그는`,

            selections : 
            ['청순하고 여성스러운 스타일',
            '힙하고 트렌디한 스타일',
            '섹시하고 육감적인 스타일']
        },
        {
            question : '끼야앙 2번이당',

            selections : 
            ['청순하고 여성스러운 스타일',
            '힙하고 트렌디한 스타일',
            '섹시하고 육감적인 스타일']
        },
        {
            question : '으아아 3번이다',

            selections : 
            ['청순하고 여성스러운 스타일',
            '힙하고 트렌디한 스타일',
            '섹시하고 육감적인 스타일']
        },
        {
            question : '4번이다',

            selections : 
            ['청순하고 여성스러운 스타일',
            '힙하고 트렌디한 스타일',]
        },
        {
            question : '5이다',

            selections : 
            ['청순하고 여성스러운 스타일',
            '힙하고 트렌디한 스타일',]
        },
        {
            question : '6',

            selections : 
            ['청순하고 여성스러운 스타일',
            '힙하고 트렌디한 스타일',]
        },
    ]
    const [Questions,setQuestions]=useState([]);
    const [answerList,setAnswerList]=useState([]);
    const [start,setStart]=useState(true);
    const [gender,setGender]=useState(0);
    const [style, setStyle] = useState("");
    const [entire,setEntire]=useState(6);
    const [cnt, setCnt]=useState(0);

    const onClick_gender=(event)=>{
        event.preventDefault();

        const event_gender = Number(event.target.value);
        //value={1} 이것도 문자열로 읽어들이니 숫자형으로 돌려야됨
        
        console.log("gender : ",event_gender);
        setGender(event_gender);

        if(event_gender===1)
            setQuestions(QuestionsM);
        else if(event_gender===2)
            setQuestions(QuestionsW);
    }

    const onClick_selection=(event)=>{
        event.preventDefault();
        setAnswerList(prev=>[...prev,event.target.value]);

        if(cnt<entire)
            setCnt(prev=>prev+1);
        else if (cnt==entire)
            setStart(false);
    }

    
    useEffect(()=>{
        if(Questions.length>1){
            setStart(false);
            console.log("Questions:",Questions);
        }
    },[Questions])


    return(
    <Wrapper>
        <BkImg src={klass}></BkImg>

        {
        start 
        ?   <FlexBox_Column>
            <QGender>
                당신의 성별은?
            </QGender>
            <GenderBox>
                <Selection onClick={onClick_gender} value={1}>
                    <ManImg src={man}/>
                    남자</Selection>
                <Selection onClick={onClick_gender} value={2}>
                    <WomanImg src={woman}/>
                    여자</Selection>
            </GenderBox>
            </FlexBox_Column>
        : cnt < Questions.length  
            ? <div>
                    <QuestionBox>
                        {Questions[cnt].question}
                    </QuestionBox>
                    <SelectionBox>
                        {Questions[cnt].selections.map((item,key)=> 
                        <Selection onClick = {onClick_selection} key = {key}>
                            {item}
                        </Selection>)}
                    </SelectionBox>

                    <Index>
                        {cnt}/{entire}
                    </Index>
            </div>
            : <div>
                <QGender>
                    당신의 스타일은...
                </QGender>
            </div>
        }
        {
        !start&&                
        <UnderBlock>
            <UnderBox>
                <UnderBar width={`${cnt/entire*380}px`}/>
            </UnderBox>
        </UnderBlock>
        }
    </Wrapper>
    )
}
export default Home;
export {FlexBox_Column, FlexBox_Row, Wrapper,
QuestionBox,Selection,SelectionBox}

const FlexBox_Row = styled.div`
display:flex;
justify-content:center;
align-items:center;
`;
const FlexBox_Column = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;

const Wrapper= styled.div`
@import url('https://webfontworld.github.io/SCoreDream/SCoreDream.css');

box-sizing:border-box;
margin:0;
padding:0;

font-family: 'S-Core Dream';

width:100vw;
height:100vh;

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
position:relative;
`;

const BkImg = styled.img`
width:100vh;
height:100vh;
position:absolute;
opacity:0.5;
z-index:-1;

background-image: url(${klass});

  /* 배경 이미지의 위치를 중앙으로 설정 */
  background-position: center center;

  /* 배경 이미지의 크기를 확대해서 보여줌 */
  background-size: 200%;

  /* 배경 이미지가 div의 크기에 맞게 잘리도록 설정 */
  background-clip: content-box;
`;


const QuestionBox = styled.div`
width:360px;

font-size:18px;
margin-bottom:24px;
text-align:center;
line-height:24px;


display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;


const ManImg = styled.img`
width:80px;
height:80px;
margin-bottom:8px;
pointer-events: none;   //기본적으로 클릭을 못 받도록 설정 
`;
const WomanImg = styled.img`
width:70px;
height:70px;
margin-bottom:8px;
pointer-events: none;
`;
const QGender = styled.div`
width:360px;
margin-bottom:24px;

font-size:18px;

display:flex;
justify-content:center;
align-items:center;
`;
const Selection = styled.button``;
const GenderBox = styled.div`
display:flex;
justify-content:center;
align-items:center;

gap:12px;

${Selection}{
width:160px;
height:160px;

border:2px solid rgb(200,50,50);
border-radius:20px;
box-shadow:0px 2px 5px gray;

background-color:rgba(255,255,255);

font-family: 'S-Core Dream';
font-size:14px;

cursor: pointer;

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
}
`;
const SelectionBox = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

gap:24px;

margin-bottom:48px;
${Selection}{
width:360px;
height:80px;

border:2px solid rgb(200,50,50);
border-radius:20px;
box-shadow:0px 2px 5px gray;

background-color:rgba(255,255,255);

font-family: 'S-Core Dream';
font-size:14px;

cursor: pointer;

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
}
`;

const Index = styled.div`
width:360px;

display:flex;
justify-content:center;
align-items:center;
`;

const UnderBlock = styled.div`
margin:0;
padding:0;

display:flex;
justify-content:center;
align-items:center;
`;

const UnderBar = styled.div`
width:${props=>props.width};
`;
const UnderBox = styled.div`
position:relative;
width:380px;
height:20px;
border-radius:10px;
background-color:lightgray;

${UnderBar}{
position:absolute;
left:0;
height:20px;
border-radius:10px;
background-color:rgb(255,150,150);
z-index:10;

transition: width 0.2s ease-out;
}
`;




