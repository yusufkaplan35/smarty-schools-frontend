import LoadingForm from "@/components/common/loaders/loading-form";
import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";

const Loading = () => {
	return (
		<>
			<PageHeader>New Teacher</PageHeader>
			<Spacer height={70} />
			<LoadingForm
				title="New"
				inputCount={15}
			/>
			<Spacer />
		</>
	);
};

export default Loading;
