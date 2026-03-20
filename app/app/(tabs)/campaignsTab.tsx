import { FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import { useCampaignsWithPagination } from '../../hooks/useCampaignsWithPagination';
import { CampaignElement } from '../../components/Campaign';

export default function CampaignsTabScreen() {
  const {
    campaigns,
    error,
    isLoading,
    isRefreshing,
    loadMore,
    refresh,
    hasMore,
  } = useCampaignsWithPagination({
    userId: '086f4eb7-5d90-4ef2-9240-4c44e0348149',
  });

  if (error && !campaigns.length) {
    return (
      <View style={styles.container}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  if (isLoading && !campaigns.length) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={campaigns}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <CampaignElement key={item.id} campaign={item} />
      )}
      onEndReached={loadMore}
      onEndReachedThreshold={0.3}
      onRefresh={refresh}
      refreshing={isRefreshing}
      ListFooterComponent={
        hasMore && isLoading ? (
          <ActivityIndicator style={{ marginVertical: 16 }} />
        ) : null
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 16,
    flexGrow: 1,
  },
});
