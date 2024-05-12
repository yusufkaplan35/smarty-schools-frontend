import LoadingForm from "@/components/common/loaders/loading-form";
import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";

const Loading = () => {
	return (
		<>
			<PageHeader>Edit Student</PageHeader>
			<Spacer height={70} />
			<LoadingForm
				title="Edit"
				inputCount={14}
			/>
			<Spacer />
		</>
	);
};

export default Loading;
