import "./Modal.css";
import close from '../../../assets/close.png'
const modalData = {
  ds:{
    name:"Data Science",
    mentor:"Samir Madhavan",
    desc:"Samir Madhavan currently works at Kickfurther as Director of Data Products. After graduating from Model Engineering College in 2010, Samir started his career as a Data Analyst at MindTree Ltd. After specializing in Python for Data Science, he created ModelChimp which is an open source platform that makes Deep Learning and Machine Learning research reproducible. He later founded Saitama Solutions which helps companies productize their data and ML/AI by taking a first-principles approach to solving complex business problems using the right technologies for the job. As a part of Technopreneur 2021, he will be conducting a workshop on the topic, Data Science.",
    link:""
  },
  pm:{
    name:"Product Management (Learn through her journey)",
    mentor:"Nikita Mallya",
    desc:"Following her motto, “Living my dreams, one at a time”, is what has made Nikita’s story admirable and aspiring to a lot of the undergraduates out there. After graduating from Govt. Model Engineering College, she went on to do her Master of Science in the field of study - Management Science and Engineering, from  Columbia University. Within a rather short period of time, she got into Tesla, a highly innovative and famous company, as a Software Product Manager. As a part of Technopreneur 2021, she will be holding a  workshop on the topic of Product Managemen",
    link:""
  },
  as:{
    name:"Entrepreneurship in a 9 to 5 job",
    mentor:"Amal Jose Vallavanthara",
    desc:"An Electronics and Communications alumni from Model Engineering College, Amal Jose Vallavanthara is currently working in Cross Domain Computing at Bosch. His acclaimed career includes being an engineer at Siemens and working on High Performance Computing at the Fraunhofer Heinrich Hertz Institute. He has specialized in Machine Learning and Embedded systems and is the winner of multiple national level entrepreneurial business competitions in Netherlands and Germany. As a part of Technopreneur 2021, he will be giving a workshop on the topic of Higher Study track.",
    link:""

  },
  iot:{
    name:"Internet of Things",
    mentor:"Salman Faris",
    desc:"An alumni from the Copenhagen Institute of Interaction Design (CIID), Salman Faris has a significant amount of experience in hardware product development and prototyping with various development platforms. He is active in Maker Communities and a passionate technology enthusiast. He worked as an ambassador at Hackster.io and is currently an ambassador at Edge Impulse. He is a Board Member at the Open Source Hardware Association and the Space Manager at STEAG Energy Services. As a part of Technopreneur 2021, he will be giving a workshop on IoT.",
    link:""
  },
  ui:{
    name:" UI/UX",
    mentor:"Gokul Harikumar",
    desc:"A computer science alumni from Model Engineering College, Gokul Harikumar is a design genius and a major fintech enthusiast. He co-founded Savemo, which has changed the Personal Finance scene and is one of the smartest money apps in India. Savemo, characterized by its unique and beautiful UI developed by Gokul, is an efficient personal finance management app for millennials. Savemo brings two of his passions, design, and finance, together in perfect harmony. A designer with incredible UI/UX skills, he was the designer at Blowhorn. Furthermore, he was also the Design Manager at sernez.io. As part of Technopreneur 2021, he will be taking us through the “UX driven UI perspectives”.",
    link:""
  },

}
export default function Modal(props) {
  return (
    <div class="modal-overlay" id="modal">
      <div className="modal-container">
        <div className="modal-header">
          <div style={{ width: "30px" }} />
          <div style={{textAlign:'center'}}>
            <h2 style={{fontSize:'26px'}}>{modalData[props.track].name}</h2>
            <h2 style={{fontSize:'20px', color:'#292929', fontWeight:'normal'}}>{modalData[props.track].mentor}</h2>
        </div>
          <div onClick={() => props.close()}>
              <img src={close} width="30px"/>
          </div>
        </div>

        <div class="modal-content">
          {modalData[props.track].desc}
        </div>
        
      </div>
    </div>
  );
}
