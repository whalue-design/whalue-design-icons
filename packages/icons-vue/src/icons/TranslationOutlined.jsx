// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import TranslationOutlinedSvg from '@whalue-design/icons-svg/lib/asn/TranslationOutlined';

export default {
  name: 'IconTranslationOutlined',
  displayName: 'TranslationOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: TranslationOutlinedSvg } },
      children,
    ),
};