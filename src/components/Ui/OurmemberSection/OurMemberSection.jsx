import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import "../../../Pages/Style/ourMember.css"
import { Link } from "react-router-dom";
const OurMemberSection = ({member}) => {
    const {name, experience, imgUrl, fbUrl, instUrl, twitUrl, linkedinUrl} = member;
  return (
    <div className="">
        <div>
            <div className="single__member-img">
                <img src={imgUrl} alt="" className="w-full" />

                <div className="single__member-social">
                    <a><FaFacebook></FaFacebook></a>
                    <a><FaInstagram></FaInstagram></a>
                    <a><FaTwitter></FaTwitter></a>
                    <a><FaLinkedin></FaLinkedin></a>
                </div>
            </div>
            <h6 className="md:text-xl text-xs text-center font-bold mt-2">{name}</h6>
            <p className="text-xs text-center md:text-[16px]">{experience}</p>
        </div>
    </div>
  );
};

export default OurMemberSection;
