import { useState, useEffect, useCallback } from 'react';
import type { Campaign } from '../models/campaign';
import { useGetManyCampaigns } from './api/campaigns/useGetManyCampaigns';

const CAMPAIGNS_COUNT_ON_SCREEN = 20;

interface CampaignsWithPaginationProps {
  userId: string;
}

export const useCampaignsWithPagination = ({
  userId,
}: CampaignsWithPaginationProps) => {
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [items, setItems] = useState<Campaign[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const {
    campaigns: currentPageCampaigns,
    error: fetchError,
    isLoading: pageLoading,
  } = useGetManyCampaigns({
    userId,
    limit: CAMPAIGNS_COUNT_ON_SCREEN,
    offset: page * CAMPAIGNS_COUNT_ON_SCREEN,
  });

  // Initial load
  useEffect(() => {
    if (currentPageCampaigns !== undefined && isInitialLoading) {
      setItems(currentPageCampaigns ?? []);
      setHasMore(
        (currentPageCampaigns ?? []).length === CAMPAIGNS_COUNT_ON_SCREEN,
      );
      setIsInitialLoading(false);
    }
  }, [currentPageCampaigns, isInitialLoading]);

  // Load more
  useEffect(() => {
    if (page > 0 && currentPageCampaigns !== undefined && !isLoadingMore) {
      setItems((prev) => [...prev, ...(currentPageCampaigns ?? [])]);
      setHasMore(
        (currentPageCampaigns ?? []).length === CAMPAIGNS_COUNT_ON_SCREEN,
      );
      setIsLoadingMore(false);
    }
  }, [page, currentPageCampaigns, isLoadingMore]);

  // Error
  useEffect(() => {
    if (fetchError) {
      setError(fetchError);
    }
  }, [fetchError]);

  const refresh = useCallback(() => {
    setIsRefreshing(true);
    setPage(0);
    setItems([]);
    setHasMore(true);
    setIsInitialLoading(true);
  }, []);

  const loadMore = useCallback(() => {
    if (!hasMore || pageLoading || isLoadingMore || page === 0) return;
    setIsLoadingMore(true);
    setPage((prev) => prev + 1);
  }, [hasMore, pageLoading, isLoadingMore, page]);

  return {
    campaigns: items,
    error,
    isLoading: isInitialLoading || pageLoading,
    isRefreshing,
    isLoadingMore,
    loadMore,
    refresh,
    hasMore,
  };
};
