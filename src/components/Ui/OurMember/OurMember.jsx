import { useEffect } from "react";
import { useState } from "react";
import OurMemberSection from "../OurmemberSection/OurMemberSection";

const OurMember = () => {
    const [members, setMembers] = useState([])

    useEffect(() => {
        fetch('ourMember.json')
        .then(ref => ref.json())
        .then(data => setMembers(data))
    },[])
    return (
        <div className="max-w-7xl mx-auto mt-10">
            <div className="grid grid-cols-4 gap-3">
                {
                    members.map(member => <OurMemberSection key={member.id} member={member}></OurMemberSection>)
                }
            </div>
        </div>
    );
};

export default OurMember;