import Banner from "./Components/Banner";
import { PartnerSection } from "./Components/PartnerSection";
import { ToInformSection } from "./Components/ToInformSection";
import { WorkTogetherSection } from "./Components/WorkTogetherSection";
import { ConnectSection } from "./Components/ConnectSection";
import { BuiltSection } from "./Components/BuiltSection";
import { BuiltKindsSection } from "./Components/BuiltKindsSection";
import { TrustMiroSection } from "./Components/TrustMiroSection";
import LovedSection from "./Components/LovedSection";
import { JoinSection } from "./Components/JoinSection";
export default function Home() {
  return (
    <>
    <div className="container mx-auto">
      <Banner />
      <PartnerSection />
      <ToInformSection />
      <WorkTogetherSection />
      <ConnectSection />
      <BuiltSection />
      <BuiltKindsSection />
    </div>
    <div className="bg-yellow-400 mx-auto">
      <TrustMiroSection />
    </div>
    <div className="container mx-auto">
      <LovedSection />
      <JoinSection />
    </div>
    </>
  );
}
