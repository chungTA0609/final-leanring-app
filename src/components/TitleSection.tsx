const TitleSection = ({ titleSection }: { titleSection: string }) => {
  return (
    <>
      <div className="row mb-2">
        <div id="tickets-table_length" className="dataTables_length">
          <label className="d-inline-flex align-items-center">
            {titleSection}
          </label>
        </div>
      </div>
    </>
  );
};
export default TitleSection;
