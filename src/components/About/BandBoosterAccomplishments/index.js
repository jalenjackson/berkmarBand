import React from 'react';
import {Card} from "antd";
import {CardOverwrite, Wrapper} from "../../../global/Wrapper";
import Footer from "../../Footer";
import { AbsoluteWrapper } from "../../../global/Wrapper";
import styled from 'styled-components';

const Image = styled.img`
  float: left;
  padding-right: 50px;
  padding-bottom: 20px;
`

const P = styled.p`
  margin-left: 20px;
`

const BandAndBoosterAccomplishments = () => {
  return (
    <AbsoluteWrapper>
      <Wrapper>
        <h1> Berkmar Band Boosters Accomplishments</h1>
          <Card style={ CardOverwrite }>
          <Image src={ require('../../../images/BandAccomplishments/constitution.webp') } />
          <P>The Berkmar Band Boosters updated the Bylaws and Constitution of the Organization</P>
        </Card>
      </Wrapper>
      <Wrapper>
        <Card title='Gywinn Lewis' style={ CardOverwrite }>
          <Image src={ require('../../../images/BandAccomplishments/gwyin.webp') } />
          <P>The Berkmar Band Boosters hired Gywinn Lews for our 2016-2017 Leadership Camp in which the kids learned leadership skills, personal development, band commands, and marching styles.  Mr. Lewis is currently finishing the curriculum for a Bachelor’s Degree in Social Work from SCSU while leading the South Carlolina University Marching Band as Drum Major. During this time at S.C State he has served as a drum major instructor at Cross High School in Cross, South Carolina and currently serves at Allendale-Fairfax High School in Fairfax, SC is employed at the local YMCA where he is an early morning health and wellness coach as well as serving as a youth camp counselor during the summers. Mr. Lewis is a firm believer in the investment in the people. In Addition to being a Master Social Worker, He hopes to endeavor in the development of community Initiatives for the enhancement of African American youth in his own community and its surrounding areas.</P>
        </Card>
      </Wrapper>
      <Wrapper>
        <Card title='Phi Quach' style={ CardOverwrite }>
          <Image src={ require('../../../images/BandAccomplishments/phi.webp') } />
          <P>The Berkmar Band Boosters hired Phi Quach to assist Percussion in transitioning to Show Style. Phi Quach was born in the Philippians and came to the States when he was three months old. He’s been playing the drums since middle school at Lilburn Middle School and was also a Mighty Marching Mustang at Meadowcreek High School. Phi started off on tom toms his freshman year and was moved to snare drum his sophomore year. He was appointed section leader his last two years of high school and mold his line like no other in the county. His senior year of high school, he became part of the C.R.E.A.M Drum Corp in Atlanta, GA. He received a scholarship to The Fort Valley State University in 2009 and was apart of the Blue Machine Marching Band. He marched snare drum for three years and became drum instructor his forth year at Fort Valley State. Phi is a member the Lambda Zeta Chapter of Kappa Kappa Psi National Honorary Band Fraternity. He was fortunate enough to become apart of the second drumline movie Drumline “A New Beat” back in to 2014. It was a great experience being apart of the second drumline movie and playing along with his old friends.
            The Berkmar Band Boosters also hired Leo Holland to assist Percussion </P>
        </Card>
      </Wrapper>
      <Wrapper>
        <Card title='Martinique Campbell' style={ CardOverwrite }>
          <Image src={ require('../../../images/BandAccomplishments/martinique.webp') } />
          <P>The Berkmar Band Boosters hired Martinique Campbell to assist Color Guard in transitioning to Show Style. Martinique Campbell is a Native of Atlanta, GA with a vast history of Dance experience.  Martinique began dancing in 1987 with Jacob’s Dance Academy.  In 1992, Martinique continued her dance training at the Soapstone Center for the Arts. She became a member of the Redan High School Dance Auxiliary in the Fall of 1997 in which she later became captain. She continued pursuing her interest in dance at Morris Brown College in 1999 with the Ecstasy Morris Brown Dance Team while continuing her training at the Midtown Atlanta Ballet.  Martinique began to work as a dance instructor For A David Dance Company in 2003 and was also a company member.  She also became the choreographer for the Redan High School Dance Team Silver Essence and held training sessions for both Varsity and Jr. Varsity dance teams.  Martinique's performances include Killer Mike “Akshun” Music Video, Lloyd “How We Do it Round My Way” Music Video, Dancer for KQueens who were the opening act for Sean Paul and Beenie Man, Golden Scissors Awards, and numerous events in the Metro Atlanta Area.  In 2014, Martinique became a certified life coach and a year later she began teaching dance again to the Marching Lady Patriots of Berkmar High School to assist in transitioning from a Corps Style Band to a Traditional Style Band.  She is now the official Color Guard Instructor for the Marching Lady Patriots of Berkmar High School. </P>
        </Card>
      </Wrapper>
      <Wrapper>
        <Card title='Josh Hills' style={ CardOverwrite }>
          <Image src={ require('../../../images/BandAccomplishments/josh.webp') } />
          <P>
            The Berkmar Band Boosters recently hired Josh Hills to assist with transitioning our Drum Majors to Show Style.  Josh Hills hails from  Augusta, GA where he attended the Academy of Richmond County.  From there he graduated to become the head drum major for the CSRA All Star Marching Band for five consecutive years.  During these years he also attended South Carolina State University and FAMU for drum major training camp.  Since his graduation and completion of grade school, he has went into collegiate training as a drum major. He has trained over 10 students under his name to be nothing less than the best.  He currently coaches and teaches the Berkmar High School Drum Majors. </P>
        </Card>
      </Wrapper>
      <Wrapper>
        <Card style={ CardOverwrite }>
          <Image src={ require('../../../images/BandAccomplishments/uniforms.webp') } />
          <P>Berkmar Band Boosters Cleaned and Organized Marching Band And Concert Band Uniforms </P>
        </Card>
      </Wrapper>
      <Wrapper>
        <Card style={ CardOverwrite }>
          <Image src={ require('../../../images/BandAccomplishments/students.webp') } />
          <P>The Berkmar Band Boosters provides band students with sack lunches that includes a sandwhich, chips and fruit snaks, during half time at away football games </P>
        </Card>
      </Wrapper>
      <Wrapper>
        <Card style={ CardOverwrite }>
          <Image src={ require('../../../images/BandAccomplishments/alumni.webp') } />
          <P>2016 Annual Senior Dinner at T.G.I Friday's!</P>
        </Card>
      </Wrapper>
      <Footer />
    </AbsoluteWrapper>
  )
};

export default BandAndBoosterAccomplishments;
