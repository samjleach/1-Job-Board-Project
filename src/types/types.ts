export interface JobListingAttributes {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  applyLink: string;
}

export interface NavigationButtonProps {
  to: string;
  btnMessage: string;
}

export interface SingleJobListingProp {
  job: JobListingAttributes;
}

export interface InfoBoxProps {
  company: string;
  location: string;
  empType: string;
}
