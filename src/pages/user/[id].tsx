import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import { trpc } from "../../utils/trpc";
import { format } from "date-fns";
import { Layout } from "../../components/Layout";

const UserPage: NextPage = () => {
  const { query } = useRouter();
  const { data } = trpc.users.getById.useQuery(query.id as string);

  return (
    <>
      <Head>
        <title>Alpha Gang&Games</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="flex w-full justify-between gap-4">
          <div className="w-1/2">
            <h2 className="mb-2 text-2xl text-slate-50">Worldle</h2>
            <p className="text-slate-50">Ta moyenne : {data?.worldleScore}</p>
            {data && data.worldle.length ? (
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="w-1/2 border-b border-slate-600 p-4 text-left text-sm font-semibold text-slate-200">
                      Date
                    </th>
                    <th className="w-1/2 border-b border-slate-600 p-4 text-sm font-semibold text-slate-200">
                      Score
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.worldle.map((worldle) => (
                    <tr
                      key={worldle.id}
                      className="odd:bg-slate-800 even:bg-slate-700 group-hover:bg-slate-600"
                    >
                      <td className="p-4 text-slate-400">
                        {format(worldle.createdAt, "dd/MM/yyyy")}
                      </td>
                      <td className="p-4 text-center text-slate-400">
                        {worldle.score}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>Aucune donnée</p>
            )}
          </div>
          <div className="w-1/2">
            <h2 className="mb-2 text-2xl text-slate-50">Sutom</h2>
            <p className="text-slate-50">Ta moyenne : {data?.sutomScore}</p>
            {data && data.sutom.length ? (
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="w-1/2 border-b border-slate-600 p-4 text-left text-sm font-semibold text-slate-200">
                      Date
                    </th>
                    <th className="w-1/2 border-b border-slate-600 p-4 text-sm font-semibold text-slate-200">
                      Score
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.sutom.map((sutom) => (
                    <tr
                      key={sutom.id}
                      className="odd:bg-slate-800 even:bg-slate-700 group-hover:bg-slate-600"
                    >
                      <td className="p-4 text-slate-400">
                        {format(sutom.createdAt, "dd/MM/yyyy")}
                      </td>
                      <td className="p-4 text-center text-slate-400">
                        {sutom.score}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>Aucune donnée</p>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default UserPage;
