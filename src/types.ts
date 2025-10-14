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
  title?: string;
}
export interface Review {
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
  id?: number;
  title: string;
  image: string;
  url: string;
}
export interface FeaturedTypes {
  id: number;
  title: string;
  url: string;
}
export interface News {
  id?: number;
  title: string;
  image: string;
  desc: string;
  month: string;
  url: string
  date: any;
  createdAt?: any;
}
export interface Testimonial {
  name: string;
  image: string;
  rating: number;
  feedback: string;
}

export interface CouncilServiceCard {
  image: string;
  title: string;
  description: string;
  description2?: string;
  description3?: string;
  commitment: string;
}
export interface BylawProps {
  image: string;
  title: string;
  description: string;
}
export interface SupportedProgram {
  id?: number;
  title: string;
  image: string;
}
export interface CouncilPolicy {
  id?: number;
  image: string;
}
export interface YouthDevelopment {
  id?: number;
  title: string;
  image: string;
  url: string;
  description: string;
}
export interface EducationalPolicy {
  id?: number;
  title: string;
  image: string;
  url: string;
  description: string;
}
export interface AgriculturalResource {
  id?: number;
  image: string;
  url: string;
  title: string;
  description: string;
}
export interface RoadConstructions {
  image: string;
  title: string;
  description: string;
}
export interface LawCard {
  id: number;
  image: string;
  title: string;
  description: string;
}
export interface ByLaw {
  id: number;
  image: string;
  title: string;
  description: string;
}

export interface BudgetProject {
  id: number;
  title: string;
  text: string;
  link_url: string;
  status: string;
}
export interface ExpenditureProject {
  id: number;
  title: string;
  text: string;
  link_url: string;
  status: string;
}
export interface ProjectFunding {
  id: number;
  title: string;
  text: string;
  link_url: string;
  status: string;
}
export interface AnnualBudget {
  id: number;
  title: string;
  text: string;
  link_url: string;
}
export interface DepartmentalContact {
  id: number;
  department: string;
  phone: string;
  email: string;
}
export interface ServicesProps {
  id: number;
  img: string;
  title: string;
  content: string;
  url: string;
}
export type GeneralListModel = {
  id: string;
  title?: string;
  subtitle?: string;
  subheading?: string;
  content?: string;
  buttonText?: string;
  img?: string;
  mainImage?: string;
  createdAt?: string;
  description?: string;
  notes?: string;
  plans?: GeneralListModel[];
  reason?: GeneralListModel[];
  subservice?: GeneralListModel[];
};
export type ChiefdomProps = {
  id: number;
  name: string;
  title: string;
  content: string;
  summary?: string;
};
export interface CouncilServiceCard {
  image: string;
  title: string;
  description: string;
  commitment: string;
}
export interface WeWillProps {
  icon: string;
  title: string;
  description: string;
  initiative: string;
}
export interface ImplementationGistProps {
  heading: string;
  subheading1?: string;
  subheading2?: string;
  subheading3?: string;
}
export interface PIData {
  title: string;
  description: string;
  progress: number;
  color: string;
  image: string;
}
export interface Overview {
  name: string;
  value: string;
  imgURL: string;
  number: string;
  color: string;
}
export interface Button3 {
  white?: boolean;
  name: string;
  py: number;
  px: number;
}

export interface HomeDataType {
  id?: number;
  title: string;
  message: string;
  image: string | null | File;
}

export interface ProjectCategoryType {
  id: number;
  title: string;
}

export interface ProjectType {
  id?: number;
  title: string;
  description: string;
  image: any;
  report: any;
  category: string;
  completion_rate: string;
  budget: string;
  starting_date: string;
  date_completed: string;
  status: string;
}

export interface NewsType {
  id?: number;
  title: string;
  image: any;
  report: any;
  description: string;
  createdAt: any;
}

export interface TestimonialType {
  id?: number;
  name: string;
  image: any;
  rating: string;
  text: string;
}

export interface ProjectStatusType {
  id?: number;
  title: string;
}

export interface AboutUsType {
  id?: number;
  title: string;
  description: string;
  image: any;
}

export interface OfficialType {
  id?: number;
  name: string;
  description: string;
  summary: string;
  image: any;
}

export interface PolicyType {
  id?: number;
  title: string;
  description: string;
  image: any;
  document: any;
  document_type: string;
}
