// Core data models from Swift app
export interface Receipt {
  id: string;
  user_id: string;
  image_urls: string[];
  total_amount: number;
  items: ReceiptItem[];
  store_name: string;
  store_address: string;
  receipt_name: string;
  purchase_date: Date;
  currency: string;
  payment_method: string;
  total_tax: number;
}

export interface ReceiptItem {
  id: string;
  name: string;
  price: number;
  category: string;
  originalPrice?: number;
  discountDescription?: string;
  isDiscount: boolean;
}

export interface AppState {
  isLoggedIn: boolean;
  userEmail: string;
  isGuestUser: boolean;
  useLocalStorage: boolean;
  guestUserId?: string;
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}
