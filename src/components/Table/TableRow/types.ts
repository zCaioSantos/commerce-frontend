export interface ControllerProps {
 data: {
  columns: Columns[];
  data: DataList;
  onDelete?: () => void;
  onEdit?: (id: string) => void;
 };
}

export type LayoutProps = ControllerProps;

export type DataList<T = unknown | undefined> = T;

export type Columns = {
 heading: string;
 value: string;
};
