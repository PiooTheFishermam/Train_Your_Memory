import TwoHeart from "../../img/2H.png"
import TwoSpades from "../../img/2S.png"
import TwoDiamond from "../../img/2D.png"
import TwoClubs from "../../img/2C.png"
import ThreeHeart from "../../img/3H.png"
import ThreeSpades from "../../img/3S.png"
import ThreeDiamond from "../../img/3D.png"
import ThreeClubs from "../../img/3C.png"
import FourHeart from "../../img/4H.png"
import FourSpades from "../../img/4S.png"
import FourDiamond from "../../img/4D.png"
import FourClubs from "../../img/4C.png"
import FiveHeart from "../../img/5H.png"
import FiveSpades from "../../img/5S.png"
import FiveDiamond from "../../img/5D.png"
import FiveClubs from "../../img/5C.png"
import SixHeart from "../../img/6H.png"
import SixSpades from "../../img/6S.png"
import SixDiamond from "../../img/6D.png"
import SixClubs from "../../img/6C.png"
import SevenHeart from "../../img/7H.png"
import SevenSpades from "../../img/7S.png"
import SevenDiamond from "../../img/7D.png"
import SevenClubs from "../../img/7C.png"
import EightHeart from "../../img/8H.png"
import EightSpades from "../../img/8S.png"
import EightDiamond from "../../img/8D.png"
import EightClubs from "../../img/8C.png"
import NineHeart from "../../img/9H.png"
import NineSpades from "../../img/9S.png"
import NineDiamond from "../../img/9D.png"
import NineClubs from "../../img/9C.png"
import TenHeart from "../../img/10H.png"
import TenSpades from "../../img/10S.png"
import TenDiamond from "../../img/10D.png"
import TenClubs from "../../img/10C.png"
import JackHeart from "../../img/JH.png"
import JackSpades from "../../img/JS.png"
import JackDiamond from "../../img/JD.png"
import JackClubs from "../../img/JC.png"
import QueenHeart from "../../img/QH.png"
import QueenSpades from "../../img/QS.png"
import QueenDiamond from "../../img/QD.png"
import QueenClubs from "../../img/QC.png"
import KingHeart from "../../img/KH.png"
import KingSpades from "../../img/KS.png"
import KingDiamond from "../../img/KD.png"
import KingClubs from "../../img/KC.png"
import AceHeart from "../../img/AH.png"
import AceSpades from "../../img/AS.png"
import AceDiamond from "../../img/AD.png"
import AceClubs from "../../img/AC.png"



export const getImageByName = (name="")=>{
    return require(`../../img/${name.substr(10)}`).default
} 

// export const CardsConfig = {
//     twoRed: TwoHeart,
//     twoPic: TwoSpades,
// }

