import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './Detail.modules.css';

function Detail() {
  const { uuid } = useParams();
  
const navigate= useNavigate()
  const [detail, setDetail] = useState({
    abilities: []
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://valorant-api.com/v1/agents/${uuid}`);
        const data = await response.json();
        setDetail(data.data);
      } catch (error) {
        window.alert('UUID no encontrado');
      }
    }
    fetchData();
  }, [uuid]);

  

  const goBack=()=>navigate(-1)

  const backgroundStyle = {
    backgroundImage: `url(${detail.background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  };

  const { role } = detail;
  const roleDisplayName = role && role.displayName;
  const description = role && role.description;
  const displayIcon = role && role.displayIcon;

  return (
    <div className="box">
      <div className="picture" style={backgroundStyle}>
        <button className="back" onClick={goBack}>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-back-up" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1" /> </svg>
            </button>
        <img src={detail.bustPortrait} alt="Agent Portrait" />
      </div>
      <div className="detail">
        <h1>{detail.displayName}</h1>
        <p>{detail.description}</p>
        <div>
          <h2>Role</h2>
          <div className="title">
            <img src={displayIcon} alt="Role Icon" />
            <p className="subTitle">{roleDisplayName}</p>
          </div>
          <p>{description}</p>
        </div>
        <div>
          <h2>Abilities</h2>
          {detail.abilities.map((ability, index) => (
            <div key={index} className="ability">
              <div className="title"> 
              <img src={ability.displayIcon} alt="Ability Icon" />
              <p className="subTitle">{ability.displayName}</p>
              </div> 
              <p>{ability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Detail;
