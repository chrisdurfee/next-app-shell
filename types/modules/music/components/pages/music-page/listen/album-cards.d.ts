export function LargeAlbumSkeleton(): object;
export function SmallAlbumSkeleton(): object;
export function LargeAlbumCard({ src, title, artist }: object): object;
export function SmallAlbumCard({ src, title, artist }: object): object;
/**
 * AlbumCard
 *
 * Displays the skeleton placeholder while the album image loads.
 *
 * @type {typeof Component}
 */
export const AlbumCard: typeof Component;
import { Component } from "@base-framework/base";
