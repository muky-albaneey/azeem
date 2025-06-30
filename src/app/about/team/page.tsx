import AboutHeader from "@/components/about/AboutHeader";
import { Card, CardContent } from "@/components/ui/card";

interface TeamMember {
  name: string;
  title: string;
  image: string;
}

const globalManagementTeam: TeamMember[] = [
  {
    name: "Henk van Duijn",
    title: "President & CEO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Dr. Oumou Camara",
    title: "Vice President, Programs",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Beatrice Bezmalinovic Dhebar",
    title: "Vice President, Business Development",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Chris Holt",
    title: "Vice President, Corporate Services",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Geoffrey Martin",
    title: "Chief Financial Officer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Dr. Zachary P. Stewart",
    title: "Director of Research",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  }
];

const seniorLeadership: TeamMember[] = [
  {
    name: "Veyrl Adell",
    title: "Director, Market Systems Development",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Dr. Jean Ekwe Dossa",
    title: "Director, Soil Health & Agricultural Productivity",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Adodo Abalo",
    title: "Country Director, Benin, Togo",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Patrick Boro",
    title: "Country Director, Uganda",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Adam Crosswhite",
    title: "Director of Engineering and Pilot Plant",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Dr. Tolessa Debele",
    title: "Program Director, TRANSFORM",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Moussa Dionou",
    title: "Country Director, Burkina Faso and Mali",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Dr. Cheikh Sadibou Fall",
    title: "Country Representative, Senegal",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  }
];

const additionalLeadership: TeamMember[] = [
  {
    name: "Sheila Keino",
    title: "Executive Director, Sustain Africa",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Kelly Kelley",
    title: "General Counsel",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Muntasir Saqib Khan",
    title: "Country Director, Bangladesh",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Dr. Wilson Leonardo",
    title: "Senior Scientist, S2P",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Amélia Moreira",
    title: "Country Director, Mozambique",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Dr. Latha Nagarajan",
    title: "SOILS Consortium Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Dr. Mustapha Naimi",
    title: "Country Representative, Morocco",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Marcel Nibasumba",
    title: "Country Director, Burundi",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  }
];

const programsLeadership: TeamMember[] = [
  {
    name: "Dr. Oumou Camara",
    title: "Vice President, Programs",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Veyrl Adell",
    title: "Director, Market Systems Development",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Dr. Jean Ekwe Dossa",
    title: "Director, Soil Health & Agricultural Productivity",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Peter Majur Ador",
    title: "Project Manager, A3-SEED",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Micael Beun",
    title: "Program Manager",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Dr. Tolessa Debele",
    title: "Program Director, TRANSFORM",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Marina Diboma",
    title: "Program Manager",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Dr. Bidjokazo Fofana",
    title: "Senior Program Officer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  }
];

const researchStaff: TeamMember[] = [
  {
    name: "Dr. Jean Ekwe Dossa",
    title: "Director, Soil Health & Agricultural Productivity",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Dr. Caroline Kundu Agaratu",
    title: "Senior Soil Scientist",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Wendie Bible",
    title: "Analytical Labs Manager",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Adam Crosswhite",
    title: "Director of Engineering and Pilot Plant",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Dr. Syam Dodla",
    title: "Senior Scientist | Systems Agronomist",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Dr. Kodjovi Senam Guillaume Foli",
    title: "Senior Scientist | Systems",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Dr. Yam Kanta Gaihre",
    title: "Divisional Soil Scientist, Asia",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Dr. Wilson Leonardo",
    title: "Senior Scientist, S2P",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  }
];

const corporateServicesLeadership: TeamMember[] = [
  {
    name: "Ismael Gomez",
    title: "Global Security Manager",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Ricky Isbell",
    title: "Global IT Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "James Thigpen",
    title: "Global Corporate Communications Manager",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  }
];

interface TeamSectionProps {
  title: string;
  members: TeamMember[];
  backgroundColor?: string;
  gridCols?: string;
}

function TeamSection({ title, members, backgroundColor = "bg-white", gridCols = "lg:grid-cols-4" }: TeamSectionProps) {
  return (
    <section className={`py-16 ${backgroundColor}`}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">{title}</h2>
        
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${gridCols} gap-8 ${gridCols === 'lg:grid-cols-3' ? 'max-w-4xl mx-auto' : ''}`}>
          {members.map((member, index) => (
            <Card key={index} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-800 text-lg mb-1">{member.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{member.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
       <AboutHeader />
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
          }}
        />
        
        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 geometric-pattern" />
        
        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">Our Team</h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-white drop-shadow-md leading-relaxed mb-4">
             Our team of engineers, architects, project managers, and skilled builders make our vision a reality.
At Azim Construction Company, we value collaboration and precision—because without strong teamwork, we cannot overcome the complex challenges of modern infrastructure development.
            </p>
            <p className="text-lg text-white drop-shadow-md">
              View our <span className="text-primary font-semibold">organizational chart</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Global Management Team */}
      <TeamSection 
        title="Global Management Team" 
        members={globalManagementTeam} 
        backgroundColor="bg-gray-50" 
      />

      {/* Senior Leadership */}
      <TeamSection 
        title="Senior Leadership" 
        members={seniorLeadership} 
        backgroundColor="bg-white" 
      />

      {/* Additional Leadership (continuation of Senior Leadership) */}
      <TeamSection 
        title="" 
        members={additionalLeadership} 
        backgroundColor="bg-gray-50" 
      />

      {/* Programs Leadership */}
      <TeamSection 
        title="Programs Leadership" 
        members={programsLeadership} 
        backgroundColor="bg-white" 
      />

      {/* Research Staff */}
      <TeamSection 
        title="Research Staff" 
        members={researchStaff} 
        backgroundColor="bg-gray-50" 
      />

      {/* Corporate Services Leadership */}
      <TeamSection 
        title="Corporate Services Leadership" 
        members={corporateServicesLeadership} 
        backgroundColor="bg-white"
        gridCols="lg:grid-cols-3" 
      />

     
    </div>
  );
}
