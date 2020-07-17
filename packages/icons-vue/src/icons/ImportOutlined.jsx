// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import ImportOutlinedSvg from '@whalue-design/icons-svg/lib/asn/ImportOutlined';

export default {
  name: 'IconImportOutlined',
  displayName: 'ImportOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ImportOutlinedSvg } },
      children,
    ),
};