"use client";

import { useConvexAuth, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { LogsTable } from "./logs-table";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Stats } from "./stats";
import dynamic from "next/dynamic";
import { SignInButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";
import LoadingIndicator from "@/components/loading-indicator";
import { GeocodedLocation } from "@/components/geocoded-location";

const LocationMap = dynamic(() => import("./location-map"), {
  ssr: false,
  loading: () => <LoadingIndicator />,
});

export default function Home() {
  const roles = useQuery(api.users.getRoles);
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="container items-center justify-center max-w-(--breakpoint-2xl)">
      {!isAuthenticated && !isLoading && (
        <div className="flex justify-center">
          <SignInButton mode="modal">
            <Button className="text-lg">Sign In</Button>
          </SignInButton>
        </div>
      )}
      {isAuthenticated && roles?.includes("reader") && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6">
          <Card>
            <CardHeader className="font-bold text-2xl p-4">Summary</CardHeader>
            <CardContent>
              <Stats />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="font-bold text-2xl p-4">Location</CardHeader>
            <CardContent>
              <div className="space-y-4">
                <GeocodedLocation />
                <Suspense fallback={<LoadingIndicator />}>
                  <LocationMap />
                </Suspense>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="font-bold text-2xl p-4">Logs</CardHeader>
            <CardContent>
              <LogsTable />
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
