const PageHeader = () => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div
            className={"page-title-box"}
            // :className="{
            //   'page-title-box-alt':
            //     layout.layoutType !== 'vertical' &&
            //     layout.layoutType !== 'two-column',
            // }"
          >
            <h4 className="page-title"> title</h4>
            <div className="page-title-right"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PageHeader;
