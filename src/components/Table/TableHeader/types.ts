export interface ControllerProps {
 data: Columns[];
}

export type LayoutProps = ControllerProps;

export type Columns = {
 heading: string;
 value: string;
};
