import { createContext, useContext } from 'react';
import { PageSectionsConfig } from '../types';
import { LayoutProps } from 'sanity';

export type ConfigContextValue = Required<PageSectionsConfig> 

const ConfigContext = createContext<ConfigContextValue | null>(null);

export function useConfigContext() {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error('useConfigContext must be used within a ConfigProvider');
  }
  return context;
}

type ConfigProviderProps = {
  value: void | PageSectionsConfig;
  children: React.ReactNode;
}

export function ConfigProvider(props: LayoutProps & ConfigProviderProps) {
  return (
    <ConfigContext.Provider value={props.value!}>
      {props.renderDefault(props)}
    </ConfigContext.Provider>
  );
}