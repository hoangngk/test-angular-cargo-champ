export interface Identity {
  _id: string;
  _v: number;
  email: string;
  token: string;
  status: string;
  full_name: string;
  organization: {
    billing_info: {
      email: string;
      full_address_hr: string;
      name: string;
      address: {
        city: string;
        country: string;
        line1: string;
        line2: string;
        postal_code: number;
        state: string;
      };
    };
    payment_details: {
      brand: string;
      country: string;
      exp_month: number;
      exp_year: number;
      expires_hr: string;
      last4: string;
      last4_hr: string;
    };
    subscription_active: boolean;
    subscription_details: {
      product: Product;
      createdAt: string;
      current_period_end: string;
      current_period_end_hr: string;
      current_period_start: string;
      current_period_start_hr: string;
      customer_id: string;
      plan_amount: number;
      plan_id: string;
      plan_interval: string;
      plan_interval_count: number;
      product_id: string;
      quantity: number;
      start_date: string;
      start_date_hr: string;
      status: string;
      subscription_id: string;
      total: number;
      total_hr: string;
      updatedAt: string;
      user: string;
    };
    subscription_name: string;
    team: Team;
    title: string;
    updatedAt: string;
    _id: string;
  };
  user_photo: string;
  job: {
    title: string;
    _id: number;
  };
  jwt: string;
}

export interface BriefIdentity {
  email: string;
  full_name: string;
  job: string;
  role: string;
  status: string;
  user_photo: string;
  _id: string;
}

export interface Team {
  amount_of_seats: number;
  amount_of_available_seats: number;
  amount_of_busy_seats: number;
  createdAt: string;
  members: TeamMember[];
  organization: string;
  team_name: string;
  updatedAt: string;
  _id: string;
}

export interface TeamMember {
  permissions: {
    addMembers: boolean;
  };
  role: string;
  user: {
    email: string;
    full_name: string;
    job: string;
    role: string;
    status: string;
    user_photo: string;
    _id: string;
  };
}

interface UserTeamAction {
  message: string;
  team: Team;
}

export interface Product {
  most_popular: boolean;
  price_per_seat: boolean;
  product_description: string;
  product_id: string;
  product_livemode: boolean;
}

export interface GetUserTeam extends UserTeamAction {
}

export interface UpdateUserTeam extends UserTeamAction {
}

export interface ChangeSeatsQuantity {
  message: string;
  user: Identity;
}

export interface GetSubscriptionChangingConditionResponse {
  message: string;
}

export enum UserRoles {
  'CREATOR' = 'CREATOR',
  'ADMIN' = 'ADMIN',
}

export interface SeatPermissions {
  manageMembers: boolean;
  manageSeats: boolean;
}

export interface ChangeSeatRoleEvent {
  originalEvent: MouseEvent;
  value: string;
}

export interface SignupRouteData {
  organizationId?: string;
  organizationTitle?: string;
  token: string;
}
