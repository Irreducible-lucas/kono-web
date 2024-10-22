export interface Link {
  id: number;
  text: string;
  url: string;
  child?: null | Link[];
}

export interface SideNavLink {
  id: number;
  text: string;
  icon?: string;
  icon_active?: string;
  url: string;
}

export interface ProgramCardProps {
  id?: number;
  image: string;
  link_url: string;
  title?: string
}
export interface Review{
  id?: number;
  name: string;
  feedback: string;
  image: string;
  rating: number;
 
}
export interface ServicesCardsProps {
  id?: number;
  image: string;
  link_url: string;
}
export interface FeaturedsDevelopment {
  id: number;
  title: string;
  image: string;
  url: string;
};
export interface FeaturedTypes {
  id: number;
  title: string;
  url: string;
};
export interface News {
  id: number;
  title: string;
  image: string;
  url: string;
  desc: string;
  month: string;
  date: number;
};
export interface Testimonial {
  name: string;
  image: string;
  rating: number;
  feedback: string;
};

export interface CouncilServiceCard {
  image: string;
  title: string;
  description: string;
}
export interface BylawProps {
  image: string;
  title: string;
  description: string;
}
export interface SupportedProgram {
  id: number;
  title: string;
  image: string;
};
export interface CouncilPolicy {
  id: number;
  image: string;
};
export interface YouthDevelopment {
  id: number;
  title: string;
  image: string;
  url: string;
  description: string;
};
export interface EducationalPolicy {
  id: number;
  title: string;
  image: string;
  url: string;
  description: string;
};
export interface AgriculturalResource {
  id: number;
  image: string;
  url: string
  title: string,
  description: string
};
export interface RoadConstructions {
  image: string
  title: string,
  description: string
};
export interface LawCard {
  id: number
  image: string
  title: string,
  description: string
};
export interface ByLaw {
  id: number
  image: string
  title: string,
  description: string
};

export interface BudgetProject{
  id: number,
  title: string,
  text: string,
  link_url: string,
  status: string,
}
export interface ExpenditureProject{
  id: number,
  title: string,
  text: string,
  link_url: string,
  status: string,
}
export interface ProjectFunding{
  id: number,
  title: string,
  text: string,
  link_url: string,
  status: string,
}
export interface AnnualBudget{
  id: number,
  title: string,
  text: string,
  link_url: string,
}
export interface DepartmentalContact{
  id: number,
  department: string,
  phone: string,
  email: string,
}