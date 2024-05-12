import LoadingForm from "@/components/common/loaders/loading-form";
import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";

const Loading = () => {
	return (
		<>
			<PageHeader>Edit Manager</PageHeader>
			<Spacer height={70} />
			<LoadingForm
				title="Edit"
				inputCount={10}
			/>
			<Spacer />
		</>
	);
};

export default Loading;
