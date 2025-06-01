export interface PostProps {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface UserProps {
    id: number;
    username: string;
    email: string;
    avatar: string;
    street:  string;
    suite:   string;
    city:    string;
    zipcode: string;
    catchPhrase: string;
}
  
export interface PostData {
    userId: number;
    id?: number;
    title: string;
    body: string;
  }
  
  export interface PostModalProps {
    onClose: () => void;
    onSubmit: (post: PostData) => void;
}
  
export interface UserProps {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  }
  
  export interface UserModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (user: UserProps) => void;
  }
  