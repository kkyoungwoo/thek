import React, {useState, useCallback,useEffect} from 'react'
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import SectionTitle from "../../elements/sectionTitle/SectionTitle";
import ScrollAnimation from "react-animate-on-scroll";
import { useHistory } from 'react-router-dom'
import emailjs from "emailjs-com";
import './forms.css'

const filters = [
    {
      id: 0,
      text: "0",
      title: "비자 문의",
      content: [
          {
            name : "이름",
            type : "text",
            discription : "name",
            emailjsText: "name",
          },
          {
            name : "전화번호",
            type : "text",
            discription : "Phone",
            emailjsText: "phone",
          },
          {
            name : "이메일",
            type : "text",
            discription : "E-mail",
            emailjsText: "email",
          },
          {
            name : "국적",
            type : "text",
            discription : "Nationality",
            emailjsText: "nationality",
          },
          {
            name : "현재 체류자격 유형",
            type : "text",
            discription : "Current visa type",
            emailjsText: "visatype",
          },
          {
            name : "주소",
            type : "text",
            discription : "Location",
            emailjsText: "location",
          },
          {
            name : "한국어 능력",
            type : "text",
            discription : "TOPIK Level or korea proficiency",
            emailjsText: "lang",
          }
      ]
    },
    {
      id: 1,
      text: "1",
      title: "유학 문의",

      content: [
          {
            name : "이름",
            type : "text",
            discription : "name",
            emailjsText: "name",
          },
          {
            name : "전화번호",
            type : "text",
            discription : "Phone",
            emailjsText: "phone",
          },
          {
            name : "이메일",
            type : "text",
            discription : "E-mail",
            emailjsText: "email",
          },
          {
            name : "국적",
            type : "text",
            discription : "Nationality",
            emailjsText: "nationality",
          },
          {
            name : "현재 체류자격 유형",
            type : "text",
            discription : "Current visa type",
            emailjsText: "visatype",
          },
          {
            name : "주소",
            type : "text",
            discription : "Location",
            emailjsText: "location",
          },
          {
            name : "한국어 능력",
            type : "text",
            discription : "TOPIK Level or korea proficiency",
            emailjsText: "lang",
          }
      ]
    },
    {
      id: 2,
      text: "2",
      title: "출입국 사범 문의",

      content: [
          {
            name : "이름",
            type : "text",
            discription : "name",
            emailjsText: "name",
          },
          {
            name : "전화번호",
            type : "text",
            discription : "Phone",
            emailjsText: "phone",
          },
          {
            name : "이메일",
            type : "text",
            discription : "E-mail",
            emailjsText: "email",
          },
          {
            name : "국적",
            type : "text",
            discription : "Nationality",
            emailjsText: "nationality",
          },
          {
            name : "현재 체류자격 유형",
            type : "text",
            discription : "Current visa type",
            emailjsText: "visatype",
          },
          {
            name : "주소",
            type : "text",
            discription : "Location",
            emailjsText: "location",
          },
          {
            name : "한국어 능력",
            type : "text",
            discription : "TOPIK Level or korea proficiency",
            emailjsText: "lang",
          }
      ]
    },
    {
      id: 3,
      text: "3",
      title: "소송 문의",
      
      content: [
          {
            name : "이름",
            type : "text",
            discription : "name",
            emailjsText: "name",
          },
          {
            name : "전화번호",
            type : "text",
            discription : "Phone",
            emailjsText: "phone",
          },
          {
            name : "이메일",
            type : "text",
            discription : "E-mail",
            emailjsText: "email",
          },
          {
            name : "국적",
            type : "text",
            discription : "Nationality",
            emailjsText: "nationality",
          },
          {
            name : "현재 체류자격 유형",
            type : "text",
            discription : "Current visa type",
            emailjsText: "visatype",
          },
          {
            name : "주소",
            type : "text",
            discription : "Location",
            emailjsText: "location",
          },
          {
            name : "한국어 능력",
            type : "text",
            discription : "TOPIK Level or korea proficiency",
            emailjsText: "lang",
          }
      ]
    },
    {
      id: 4,
      text: "4",
      title: "행정 문의",
      
      content: [
          {
            name : "이름",
            type : "text",
            discription : "name",
            emailjsText: "name",
          },
          {
            name : "전화번호",
            type : "text",
            discription : "Phone",
            emailjsText: "phone",
          },
          {
            name : "이메일",
            type : "text",
            discription : "E-mail",
            emailjsText: "email",
          },
          {
            name : "국적",
            type : "text",
            discription : "Nationality",
            emailjsText: "nationality",
          },
          {
            name : "현재 체류자격 유형",
            type : "text",
            discription : "Current visa type",
            emailjsText: "visatype",
          },
          {
            name : "주소",
            type : "text",
            discription : "Location",
            emailjsText: "location",
          },
          {
            name : "한국어 능력",
            type : "text",
            discription : "TOPIK Level or korea proficiency",
            emailjsText: "lang",
          }
      ]
    },
    {
      id: 5,
      text: "5",
      title: "일자리 문의",
      
      content: [
          {
            name : "국적",
            type : "text",
            discription : "Nationality",
            emailjsText: "nationality",
          },
          {
            name : "현재 체류자격 유형",
            type : "text",
            discription : "Current visa type",
            emailjsText: "visatype",
          },
          {
            name : "이름",
            type : "text",
            discription : "name",
            emailjsText: "name",
          },
          {
            name : "전화번호",
            type : "text",
            discription : "Phone",
            emailjsText: "phone",
          },
          {
            name : "성별",
            type : "text",
            discription : "남성",
            emailjsText: "gender",
          },
          {
            name : "나이",
            type : "text",
            discription : "Age",
            emailjsText: "age",
          },
          {
            name : "주소",
            type : "text",
            discription : "Location",
            emailjsText: "location",
          },
          {
            name : "원하는 근무지역",
            type : "text",
            discription : "The area you want to work",
            emailjsText: "wantlocation",
          },
          {
            name : "희망 직종",
            type : "text",
            discription : "상관없음",
            emailjsText: "want",
          },
          {
            name : "원하는 근무시간",
            type : "text",
            discription : "10:00 ~ 20:00 or 2교대",
            emailjsText: "hours",
          },
          {
            name : "한국어 능력",
            type : "text",
            discription : "TOPIK Level or korea proficiency",
            emailjsText: "lang",
          },
          {
            name : "당신은 살 곳을 옮길 수 있나요?",
            type : "text",
            discription : "Yes or No",
            emailjsText: "place",
          },
          {
            name : "업체코드",
            type : "text",
            discription : "W0DE2",
            emailjsText: "jobnumber",
          }
      ]
    },
    {
      id: 6,
      text: "6",
      title: "기타 문의",
      
      content: [
          {
            name : "이름",
            type : "text",
            discription : "name",
            emailjsText: "name",
          },
          {
            name : "전화번호",
            type : "text",
            discription : "Phone",
            emailjsText: "phone",
          },
          {
            name : "이메일",
            type : "text",
            discription : "E-mail",
            emailjsText: "email",
          },
          {
            name : "국적",
            type : "text",
            discription : "Nationality",
            emailjsText: "nationality",
          },
          {
            name : "현재 체류자격 유형",
            type : "text",
            discription : "Current visa type",
            emailjsText: "visatype",
          },
          {
            name : "주소",
            type : "text",
            discription : "Location",
            emailjsText: "location",
          },
          {
            name : "한국어 능력",
            type : "text",
            discription : "TOPIK Level or korea proficiency",
            emailjsText: "lang",
          }
      ]
    },
    {
      id: 7,
      text: "7",
      title: "파트너 문의",
      
      content: [
          {
            name : "이름",
            type : "text",
            discription : "name",
            emailjsText: "name",
          },
          {
            name : "전화번호",
            type : "text",
            discription : "Phone",
            emailjsText: "phone",
          },
          {
            name : "주소",
            type : "text",
            discription : "Location",
            emailjsText: "location",
          },
          {
            name : "회사명",
            type : "text",
            discription : "Company",
            emailjsText: "email",
          },
          {
            name : "자료 (최대 50MB)",
            type : "file",
            discription : "my_file",
            emailjsText: "my_file",
          }
      ]
    },
    {
      id: 8,
      text: "8",
      title: "비자 대행 신청",
      
      content: [
          {
            name : "이름",
            type : "text",
            discription : "name",
            emailjsText: "name",
          },
          {
            name : "전화번호",
            type : "text",
            discription : "Phone",
            emailjsText: "phone",
          },
          {
            name : "주소",
            type : "text",
            discription : "Location",
            emailjsText: "location",
          },
          {
            name : "국적",
            type : "text",
            discription : "Nationality",
            emailjsText: "email",
          }
      ]
    }
];


const Form = () => {

    const history = useHistory();

    const [activeFilter, setActiveFilter] = useState("form");
    const [simpleTextNum,setSimpleTextNum] = useState(8)
    const [simpleText,setSimpleText] = useState("비자 대행 신청")
    const [loadingText,setLoadingText] = useState("신청서 접수")
      
      const loading = useCallback(()=>{
          setLoadingText("loading ...")
      },[])

    
    const handleChange = (e) => {
        setActiveFilter(e.target.id);
        setSimpleTextNum(filters[e.target.id].id)
        setSimpleText(filters[e.target.id].title)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
          .sendForm(
            "service_thek_form",
            "template_pkoh5hd",
            e.target,
            "user_YOvzVUT3C3OBySLzLPves"
          )
          .then(
            (result) => {
              console.log(result.text);
              alert("입력하신 내용으로 정상접수 되었습니다. 곧 연락드리겠습니다.")
              history.push("/")
            },
            (error) => {
              console.log(error.text);
              alert("메일이 발송되지 않았습니다. 연락처 : 010-4242-3088")
            }
          );
      };

    return (
        <>
            <SEO title="korea visa" />
            <Layout>
                <div className="main-content">
                    <div className="rwt-portfolio-area rn-section-gap">
                        <div className="container">
                            <a href="/form" className='col-lg-12' style={{
                              display: "flex",
                              justifyContent: "center",
                              textAlign: "center",
                              margin: "0 auto 30px",
                              width: "220px",
                              border: "1px solid #ff5245",
                              borderRadius: "15px",
                              padding: "20px"
                            }}> " Language Change "
                            </a>
                            {/**cards start */}
                            <div>
                                <div className="col-lg-12">
                                    <ul className="rwt-portfolio-filter filter-button-default liststyle mb--20">
                                        {filters.map((filter,idx) => (
                                        <li className="list-item" key={filter.id} >
                                            <button
                                            onClick={handleChange}
                                            className={
                                                filter.id === simpleTextNum
                                                ? "current"
                                                : ""
                                            }
                                            id={filter.id}
                                            >
                                            <div className="none_pointer">
                                                {filter.title}
                                            </div>
                                            </button>
                                        </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            {/**cards end */}
                            <div className="row">
                                <div className="col-lg-12 mb--50 mt--50" id="form_btn">
                                    <ScrollAnimation 
                                        animateIn="fadeInUp"
                                        animateOut="fadeInOut"
                                        animateOnce={true}>
                                        <SectionTitle
                                            textAlign = "text-center"
                                            radiusRounded = ""
                                            subtitle = "온라인 상담 센터"
                                            title = {simpleText}
                                            description = "온라인으로 상담을 신청해주시면 빠르고 더 정확한 상담을 받을 수 있습니다."
                                        />
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                        <div className='form_data container'>
                            <form className='form_warp' encType="multipart/form-data" method="post" onSubmit={handleSubmit}>
                              <input type="text" name="value" value={simpleText} style={{display:"none"}}/>
                                {filters[simpleTextNum].content.map((item,idx) => (
                                  <div key={idx}>
                                    <div style={{
                                      marginBottom: "10px",
                                      fontWeight: "bold"
                                    }}>
                                      {item.name}
                                    </div>
                                    <input type={item.type} name={item.emailjsText} placeholder={item.discription} style={{
                                      height: "50px",
                                      marginBottom: "20px",
                                    }}/>
                                  </div>
                                ))}
                                <div>
                                  <div style={{
                                      marginBottom: "10px",
                                      fontWeight: "bold"
                                    }}>내용</div>
                                  <textarea name="message" id="message" cols="30" rows="10" />
                                </div>
                                <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}
                                    className="button-group mt--20"
                                    style={{
                                      display: "flex",
                                      justifyContent: "center"
                                    }}>
                                    <button className="submit_btn btn-default btn-large" type="submit" onClick={loading}>{loadingText}</button>
                                    </ScrollAnimation>
                            </form>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
export default Form;
