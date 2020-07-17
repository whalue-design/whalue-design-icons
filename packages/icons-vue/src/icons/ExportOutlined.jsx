// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import ExportOutlinedSvg from '@whalue-design/icons-svg/lib/asn/ExportOutlined';

export default {
  name: 'IconExportOutlined',
  displayName: 'ExportOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ExportOutlinedSvg } },
      children,
    ),
};