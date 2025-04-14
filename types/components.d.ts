export type AccordionItem = {
  title: string;
} & StringKeyedObject;

export type BreadcrumbNode = {
  name: string;
  link: string;
  icon?: string;
};

export type CheckboxItem = {
  label: string;
  value: any;
  description?: string;
};

export type ChipItem = {
  id: string | number;
} & StringKeyedObject;

export type DefaultTableData = {
  address: {
      pickup_address: {
          lat: number,
          lng: number,
          city: string,
          street_name: string
      },
      dropoff_address: {
          lat: number,
          lng: number,
          city: string,
          street_name: string
      }
  },
  user: {
      full_name: string,
      email: string
  },
  phone_number: string,
  pickup_date: string,
  price: number,
  dropoff_date: string,
  passengers: number,
  pickup_amount: number,
  dropoff_amount: number,
  trip_type: string,
  round_type: string
}

export type DropdownItem = {
  id: string | number;
  name: string;
  value: any;
};

export type ETCDate = {
  day: number;
  month: number;
  year: number;
  style: string;
};

export type NotificationProps = {
  title?: string;
  description?: string;
  icon?: string;
  iconClass?: string;
  titleClass?: string;
  borderClass?: string;
  descriptionClass?: string;
  closeButtonClass?: string;
  cardClass?: string;
  image?: string;
};

export type Prop = {
  name: string;
  description: string;  
}

export type RadioItem = {
  label: string;
  value: any;
  class?: string;
  description?: string;
};

export type StepperItem = {
  id: number;
  name: string;
  icon: string;
};

export type TabData = {
  name: string;
  icon: string;
  value: string;
};

export type TableHeader = {
  text: string;
  value: string;
  sortable?: boolean;
};

export type Time = {
  hours: number;
  minutes: number;
};

export type StringKeyedObject = {
  [key: string]: any;
};

export type TableData<T> = {
  id: string;
  email_confirmation_sent?: boolean;
  data: T;
} & StringKeyedObject;

export type ListSelectItem = {
  id: string | number;
  name: string; 
} & StringKeyedObject;

export type MultiSelectItem = ListSelectItem;

export type ListSelectSearchItem = ListSelectItem;