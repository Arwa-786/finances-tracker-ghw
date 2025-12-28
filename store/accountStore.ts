import { Account, Currency, Institution } from "../types/models";

type AccountStore = {
  accounts: Account[];
  institutions: Institution[];
  currencies: Currency[];

  addAccount: (account: Omit<Account, "id" | "createdAt">) => void;
  removeAccount: (id: string) => void;
  updateAccount: (id: string, updates: Partial<Account>) => void;

  addInstitution: (institution: Omit<Institution, "id">) => void;
  removeInstitution: (id: string) => void;
  updateInstitution: (id: string, updates: Partial<Institution>) => void;

  addCurrency: (currency: Omit<Currency, "id">) => void;
  removeCurrency: (id: string) => void;
  updateCurrency: (id: string, updates: Partial<Currency>) => void;
};
