import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

export default function DashboardPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Dashboard</CardTitle>
        <CardDescription>Ver resumen de todo el dashboard.</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
}
